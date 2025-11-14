export interface Invoice {
  _id: string;
  patientId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  } | string;
  treatmentId?: {
    _id: string;
    treatmentType: string;
    description: string;
  } | string;
  invoiceNumber: string;
  issueDate: string;
  dueDate?: string;
  amount: number;
  paidAmount: number;
  status: 'pending' | 'partial' | 'paid' | 'overdue' | 'cancelled';
  description: string;
  receiptImageUrl?: string;
  receiptCloudinaryPublicId?: string;
  paymentDate?: string;
  paymentMethod?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInvoiceData {
  patientId: string;
  treatmentId?: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate?: string;
  amount: number;
  paidAmount?: number;
  status?: 'pending' | 'partial' | 'paid' | 'overdue' | 'cancelled';
  description: string;
  receiptImageUrl?: string;
  receiptCloudinaryPublicId?: string;
  paymentDate?: string;
  paymentMethod?: string;
  notes?: string;
}

export interface UpdateInvoiceData extends Partial<CreateInvoiceData> {}

export interface UpdatePaymentData {
  paidAmount: number;
  status: 'pending' | 'partial' | 'paid' | 'overdue' | 'cancelled';
  paymentDate?: string;
  paymentMethod?: string;
  receiptImageUrl?: string;
  receiptCloudinaryPublicId?: string;
}