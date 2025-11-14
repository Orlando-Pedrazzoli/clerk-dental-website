import api from './api';
import type { Treatment, CreateTreatmentData, UpdateTreatmentData } from '../types/treatment';

export const treatmentService = {
  // Criar tratamento
  create: async (data: CreateTreatmentData): Promise<Treatment> => {
    const response = await api.post('/treatments', data);
    return response.data.treatment;
  },

  // Listar todos os tratamentos
  getAll: async (): Promise<Treatment[]> => {
    const response = await api.get('/treatments');
    return response.data.treatments;
  },

  // Buscar tratamentos por paciente
  getByPatient: async (patientId: string): Promise<Treatment[]> => {
    const response = await api.get(`/treatments/patient/${patientId}`);
    return response.data.treatments;
  },

  // Buscar tratamento por ID
  getById: async (id: string): Promise<Treatment> => {
    const response = await api.get(`/treatments/${id}`);
    return response.data;
  },

  // Atualizar tratamento
  update: async (id: string, data: UpdateTreatmentData): Promise<Treatment> => {
    const response = await api.put(`/treatments/${id}`, data);
    return response.data.treatment;
  },

  // Deletar tratamento
  delete: async (id: string): Promise<void> => {
    await api.delete(`/treatments/${id}`);
  },
};