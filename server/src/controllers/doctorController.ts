import { Request, Response } from 'express';
import Doctor from '../models/Doctor';
import mongoose from 'mongoose';

// Criar novo médico
export const createDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, specialty, licenseNumber, phone, email, bio, photoUrl } = req.body;

    // Verificar se licença já existe
    const existingDoctor = await Doctor.findOne({ licenseNumber });
    if (existingDoctor) {
      res.status(400).json({ error: 'Número de licença já cadastrado' });
      return;
    }

    const doctor = new Doctor({
      name,
      specialty,
      licenseNumber,
      phone,
      email,
      bio,
      photoUrl,
    });

    await doctor.save();

    res.status(201).json({
      message: 'Médico criado com sucesso',
      doctor,
    });
  } catch (error) {
    console.error('Erro ao criar médico:', error);
    res.status(500).json({ error: 'Erro ao criar médico' });
  }
};

// Listar todos os médicos
export const getAllDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctors = await Doctor.find().sort({ name: 1 });

    res.status(200).json({
      total: doctors.length,
      doctors,
    });
  } catch (error) {
    console.error('Erro ao listar médicos:', error);
    res.status(500).json({ error: 'Erro ao listar médicos' });
  }
};

// Listar apenas médicos ativos
export const getActiveDoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const doctors = await Doctor.find({ isActive: true }).sort({ name: 1 });

    res.status(200).json({
      total: doctors.length,
      doctors,
    });
  } catch (error) {
    console.error('Erro ao listar médicos ativos:', error);
    res.status(500).json({ error: 'Erro ao listar médicos ativos' });
  }
};

// Buscar médico por ID
export const getDoctorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      res.status(404).json({ error: 'Médico não encontrado' });
      return;
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.error('Erro ao buscar médico:', error);
    res.status(500).json({ error: 'Erro ao buscar médico' });
  }
};

// Atualizar médico
export const updateDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!doctor) {
      res.status(404).json({ error: 'Médico não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Médico atualizado com sucesso',
      doctor,
    });
  } catch (error) {
    console.error('Erro ao atualizar médico:', error);
    res.status(500).json({ error: 'Erro ao atualizar médico' });
  }
};

// Deletar médico
export const deleteDoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const doctor = await Doctor.findByIdAndDelete(id);

    if (!doctor) {
      res.status(404).json({ error: 'Médico não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Médico deletado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao deletar médico:', error);
    res.status(500).json({ error: 'Erro ao deletar médico' });
  }
};

// Ativar/Desativar médico
export const toggleDoctorStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      res.status(404).json({ error: 'Médico não encontrado' });
      return;
    }

    doctor.isActive = !doctor.isActive;
    await doctor.save();

    res.status(200).json({
      message: `Médico ${doctor.isActive ? 'ativado' : 'desativado'} com sucesso`,
      doctor,
    });
  } catch (error) {
    console.error('Erro ao alterar status do médico:', error);
    res.status(500).json({ error: 'Erro ao alterar status do médico' });
  }
};