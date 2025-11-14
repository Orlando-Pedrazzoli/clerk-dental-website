import { Request, Response } from 'express';
import Exam from '../models/Exam';
import mongoose from 'mongoose';

// Criar novo exame
export const createExam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId, doctorId, treatmentId, examType, examDate, description, imageUrls, cloudinaryPublicIds, notes } = req.body;

    const exam = new Exam({
      patientId,
      doctorId,
      treatmentId,
      examType,
      examDate,
      description,
      imageUrls: imageUrls || [],
      cloudinaryPublicIds: cloudinaryPublicIds || [],
      notes,
    });

    await exam.save();

    await exam.populate('patientId', 'firstName lastName email');
    await exam.populate('doctorId', 'name specialty');

    res.status(201).json({
      message: 'Exame criado com sucesso',
      exam,
    });
  } catch (error) {
    console.error('Erro ao criar exame:', error);
    res.status(500).json({ error: 'Erro ao criar exame' });
  }
};

// Listar todos os exames
export const getAllExams = async (req: Request, res: Response): Promise<void> => {
  try {
    const exams = await Exam.find()
      .populate('patientId', 'firstName lastName email')
      .populate('doctorId', 'name specialty')
      .sort({ examDate: -1 });

    res.status(200).json({
      total: exams.length,
      exams,
    });
  } catch (error) {
    console.error('Erro ao listar exames:', error);
    res.status(500).json({ error: 'Erro ao listar exames' });
  }
};

// Buscar exames por paciente
export const getExamsByPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      res.status(400).json({ error: 'ID do paciente inválido' });
      return;
    }

    const exams = await Exam.find({ patientId })
      .populate('doctorId', 'name specialty')
      .sort({ examDate: -1 });

    res.status(200).json({
      total: exams.length,
      exams,
    });
  } catch (error) {
    console.error('Erro ao buscar exames do paciente:', error);
    res.status(500).json({ error: 'Erro ao buscar exames do paciente' });
  }
};

// Buscar exame por ID
export const getExamById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const exam = await Exam.findById(id)
      .populate('patientId', 'firstName lastName email')
      .populate('doctorId', 'name specialty')
      .populate('treatmentId', 'treatmentType description');

    if (!exam) {
      res.status(404).json({ error: 'Exame não encontrado' });
      return;
    }

    res.status(200).json(exam);
  } catch (error) {
    console.error('Erro ao buscar exame:', error);
    res.status(500).json({ error: 'Erro ao buscar exame' });
  }
};

// Atualizar exame
export const updateExam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const exam = await Exam.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .populate('patientId', 'firstName lastName email')
      .populate('doctorId', 'name specialty');

    if (!exam) {
      res.status(404).json({ error: 'Exame não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Exame atualizado com sucesso',
      exam,
    });
  } catch (error) {
    console.error('Erro ao atualizar exame:', error);
    res.status(500).json({ error: 'Erro ao atualizar exame' });
  }
};

// Deletar exame
export const deleteExam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const exam = await Exam.findByIdAndDelete(id);

    if (!exam) {
      res.status(404).json({ error: 'Exame não encontrado' });
      return;
    }

    res.status(200).json({
      message: 'Exame deletado com sucesso',
    });
  } catch (error) {
    console.error('Erro ao deletar exame:', error);
    res.status(500).json({ error: 'Erro ao deletar exame' });
  }
};