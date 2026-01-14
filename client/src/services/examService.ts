import api from './api';
import type { Exam, CreateExamData, UpdateExamData } from '../types/exam';

export const examService = {
  // Criar exame
  create: async (data: CreateExamData): Promise<Exam> => {
    const response = await api.post('/exams', data);
    return response.data.exam;
  },

  // Listar todos os exames
  getAll: async (): Promise<Exam[]> => {
    const response = await api.get('/exams');
    return response.data.exams;
  },

  // Buscar exames por paciente
  getByPatient: async (patientId: string): Promise<Exam[]> => {
    const response = await api.get(`/exams/patient/${patientId}`);
    return response.data.exams;
  },

  // Buscar exame por ID
  getById: async (id: string): Promise<Exam> => {
    const response = await api.get(`/exams/${id}`);
    return response.data;
  },

  // Atualizar exame
  update: async (id: string, data: UpdateExamData): Promise<Exam> => {
    const response = await api.put(`/exams/${id}`, data);
    return response.data.exam;
  },

  // Deletar exame
  delete: async (id: string): Promise<void> => {
    await api.delete(`/exams/${id}`);
  },
};