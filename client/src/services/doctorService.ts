import api from './api';
import type { Doctor, CreateDoctorData, UpdateDoctorData } from '../types/doctor';

export const doctorService = {
  // Criar médico
  create: async (data: CreateDoctorData): Promise<Doctor> => {
    const response = await api.post('/doctors', data);
    return response.data.doctor;
  },

  // Listar todos os médicos
  getAll: async (): Promise<Doctor[]> => {
    const response = await api.get('/doctors');
    return response.data.doctors;
  },

  // Listar apenas médicos ativos
  getActive: async (): Promise<Doctor[]> => {
    const response = await api.get('/doctors/active');
    return response.data.doctors;
  },

  // Buscar médico por ID
  getById: async (id: string): Promise<Doctor> => {
    const response = await api.get(`/doctors/${id}`);
    return response.data;
  },

  // Atualizar médico
  update: async (id: string, data: UpdateDoctorData): Promise<Doctor> => {
    const response = await api.put(`/doctors/${id}`, data);
    return response.data.doctor;
  },

  // Deletar médico
  delete: async (id: string): Promise<void> => {
    await api.delete(`/doctors/${id}`);
  },

  // Ativar/Desativar médico
  toggleStatus: async (id: string): Promise<Doctor> => {
    const response = await api.patch(`/doctors/${id}/toggle-status`);
    return response.data.doctor;
  },
};