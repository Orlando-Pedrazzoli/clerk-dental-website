import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IInvoice extends Document {
  patientId: Types.ObjectId;
  treatmentId?: Types.ObjectId;
  invoiceNumber: string;
  issueDate: Date;
  dueDate?: Date;
  amount: number;
  paidAmount: number;
  status: 'pending' | 'partial' | 'paid' | 'overdue' | 'cancelled';
  description: string;
  receiptImageUrl?: string;
  receiptCloudinaryPublicId?: string;
  paymentDate?: Date;
  paymentMethod?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new Schema<IInvoice>(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    treatmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Treatment',
    },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    paidAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'partial', 'paid', 'overdue', 'cancelled'],
      default: 'pending',
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    receiptImageUrl: {
      type: String,
      trim: true,
    },
    receiptCloudinaryPublicId: {
      type: String,
      trim: true,
    },
    paymentDate: {
      type: Date,
    },
    paymentMethod: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices
InvoiceSchema.index({ invoiceNumber: 1 });
InvoiceSchema.index({ patientId: 1, status: 1 });
InvoiceSchema.index({ issueDate: -1 });

export default mongoose.model<IInvoice>('Invoice', InvoiceSchema);