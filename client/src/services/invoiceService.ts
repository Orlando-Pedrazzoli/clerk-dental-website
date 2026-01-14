import api from './api';
import type { Invoice, CreateInvoiceData, UpdateInvoiceData, UpdatePaymentData } from '../types/invoice';

export const invoiceService = {
  // Criar fatura
  create: async (data: CreateInvoiceData): Promise<Invoice> => {
    const response = await api.post('/invoices', data);
    return response.data.invoice;
  },

  // Listar todas as faturas
  getAll: async (): Promise<Invoice[]> => {
    const response = await api.get('/invoices');
    return response.data.invoices;
  },

  // Buscar faturas por paciente
  getByPatient: async (patientId: string): Promise<Invoice[]> => {
    const response = await api.get(`/invoices/patient/${patientId}`);
    return response.data.invoices;
  },

  // Buscar fatura por ID
  getById: async (id: string): Promise<Invoice> => {
    const response = await api.get(`/invoices/${id}`);
    return response.data;
  },

  // Atualizar fatura
  update: async (id: string, data: UpdateInvoiceData): Promise<Invoice> => {
    const response = await api.put(`/invoices/${id}`, data);
    return response.data.invoice;
  },

  // Atualizar status de pagamento
  updatePayment: async (id: string, data: UpdatePaymentData): Promise<Invoice> => {
    const response = await api.patch(`/invoices/${id}/payment`, data);
    return response.data.invoice;
  },

  // Deletar fatura
  delete: async (id: string): Promise<void> => {
    await api.delete(`/invoices/${id}`);
  },
};