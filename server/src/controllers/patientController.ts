import { Request, Response } from 'express';
import User from '../models/User';
import mongoose from 'mongoose';
import { generateUniquePatientId } from '../utils/generatePatientId';

// Criar novo paciente
export const createPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      email,
      firstName,
      lastName,
      phone,
      address,
      dateOfBirth,
      nif,
      medicalHistory,
      allergies,
      medications,
      emergencyContact,
    } = req.body;

    // Verificar se email já existe
    const existingPatient = await User.findOne({ email, role: 'patient' });
    if (existingPatient) {
      res.status(400).json({ error: 'Paciente com este email já cadastrado' });
      return;
    }

    // Gerar Patient ID único e sequencial
    const patientId = await generateUniquePatientId();

    // Criar novo paciente
    const patient = new User({
      patientId,
      email,
      firstName,
      lastName,
      role: 'patient',
      phone,
      address,
      dateOfBirth,
      nif,
      medicalHistory,
      allergies,
      medications,
      emergencyContact,
    });

    await patient.save();

    res.status(201).json({
      message: 'Paciente criado com sucesso',
      patient,
    });
  } catch (error) {
    console.error('Erro ao criar paciente:', error);
    res.status(500).json({ error: 'Erro ao criar paciente' });
  }
};

// Listar todos os pacientes
export const getAllPatients = async (_req: Request, res: Response): Promise<void> => {
  try {
    const patients = await User.find({ role: 'patient' }).sort({ createdAt: -1 });

    res.status(200).json({
      total: patients.length,
      patients,
    });
  } catch (error) {
    console.error('Erro ao listar pacientes:', error);
    res.status(500).json({ error: 'Erro ao listar pacientes' });
  }
};

// Buscar paciente por ID
export const getPatientById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const patient = await User.findById(id);

    if (!patient || patient.role !== 'patient') {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    res.status(500).json({ error: 'Erro ao buscar paciente' });
  }
};

// Buscar paciente por Clerk User ID
export const getPatientByClerkId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { clerkUserId } = req.params;

    const patient = await User.findOne({ clerkUserId, role: 'patient' });

    if (!patient) {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    res.status(500).json({ error: 'Erro ao buscar paciente' });
  }
};

// Atualizar paciente
export const updatePatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const patient = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!patient || patient.role !== 'patient') {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Paciente atualizado com sucesso',
      patient,
    });
  } catch (error) {
    console.error('Erro ao atualizar paciente:', error);
    res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
};

// Deletar paciente
export const deletePatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const patient = await User.findByIdAndDelete(id);

    if (!patient || patient.role !== 'patient') {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Paciente deletado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao deletar paciente:', error);
    res.status(500).json({ error: 'Erro ao deletar paciente' });
  }
};
