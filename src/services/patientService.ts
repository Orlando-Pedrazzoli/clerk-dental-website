import api from './api';
import type { Patient, CreatePatientData, UpdatePatientData } from '../types/patient';

export const patientService = {
  // Criar paciente
  create: async (data: CreatePatientData): Promise<Patient> => {
    const response = await api.post('/patients', data);
    return response.data.patient;
  },

  // Listar todos os pacientes
  getAll: async (): Promise<Patient[]> => {
    const response = await api.get('/patients');
    return response.data.patients;
  },

  // Buscar paciente por ID
  getById: async (id: string): Promise<Patient> => {
    const response = await api.get(`/patients/${id}`);
    return response.data;
  },

  // Buscar paciente por Clerk User ID
  getByClerkId: async (clerkUserId: string): Promise<Patient> => {
    const response = await api.get(`/patients/clerk/${clerkUserId}`);
    return response.data;
  },

  // Atualizar paciente
  update: async (id: string, data: UpdatePatientData): Promise<Patient> => {
    const response = await api.put(`/patients/${id}`, data);
    return response.data.patient;
  },

  // Deletar paciente
  delete: async (id: string): Promise<void> => {
    await api.delete(`/patients/${id}`);
  },
};