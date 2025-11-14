import { Request, Response } from 'express';
import Treatment from '../models/Treatment';
import mongoose from 'mongoose';

// Criar novo tratamento
export const createTreatment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId, doctorId, treatmentType, description, status, startDate, endDate, notes, cost } = req.body;

    const treatment = new Treatment({
      patientId,
      doctorId,
      treatmentType,
      description,
      status,
      startDate,
      endDate,
      notes,
      cost,
    });

    await treatment.save();

    // Popular dados do paciente e médico
    await treatment.populate('patientId', 'firstName lastName email');
    await treatment.populate('doctorId', 'name specialty');

    res.status(201).json({
      message: 'Tratamento criado com sucesso',
      treatment,
    });
  } catch (error) {
    console.error('Erro ao criar tratamento:', error);
    res.status(500).json({ error: 'Erro ao criar tratamento' });
  }
};

// Listar todos os tratamentos
export const getAllTreatments = async (req: Request, res: Response): Promise<void> => {
  try {
    const treatments = await Treatment.find()
      .populate('patientId', 'firstName lastName email')
      .populate('doctorId', 'name specialty')
      .sort({ startDate: -1 });

    res.status(200).json({
      total: treatments.length,
      treatments,
    });
  } catch (error) {
    console.error('Erro ao listar tratamentos:', error);
    res.status(500).json({ error: 'Erro ao listar tratamentos' });
  }
};

// Buscar tratamentos por paciente
export const getTreatmentsByPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      res.status(400).json({ error: 'ID do paciente inválido' });
      return;
    }

    const treatments = await Treatment.find({ patientId })
      .populate('doctorId', 'name specialty')
      .sort({ startDate: -1 });

    res.status(200).json({
      total: treatments.length,
      treatments,
    });
  } catch (error) {
    console.error('Erro ao buscar tratamentos do paciente:', error);
    res.status(500).json({ error: 'Erro ao buscar tratamentos do paciente' });
  }
};

// Buscar tratamento por ID
export const getTreatmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const treatment = await Treatment.findById(id)
      .populate('patientId', 'firstName lastName email phone')
      .populate('doctorId', 'name specialty phone email');

    if (!treatment) {
      res.status(404).json({ error: 'Tratamento não encontrado' });
      return;
    }

    res.status(200).json(treatment);
  } catch (error) {
    console.error('Erro ao buscar tratamento:', error);
    res.status(500).json({ error: 'Erro ao buscar tratamento' });
  }
};

// Atualizar tratamento
export const updateTreatment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const treatment = await Treatment.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .populate('patientId', 'firstName lastName email')
      .populate('doctorId', 'name specialty');

    if (!treatment) {
      res.status(404).json({ error: 'Tratamento não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Tratamento atualizado com sucesso',
      treatment,
    });
  } catch (error) {
    console.error('Erro ao atualizar tratamento:', error);
    res.status(500).json({ error: 'Erro ao atualizar tratamento' });
  }
};

// Deletar tratamento
export const deleteTreatment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const treatment = await Treatment.findByIdAndDelete(id);

    if (!treatment) {
      res.status(404).json({ error: 'Tratamento não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Tratamento deletado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao deletar tratamento:', error);
    res.status(500).json({ error: 'Erro ao deletar tratamento' });
  }
};