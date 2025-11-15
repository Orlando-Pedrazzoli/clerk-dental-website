import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  clerkUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'patient';
  patientId?: string; // ← ADICIONAR ESTE CAMPO
  phone?: string;
  address?: string;
  dateOfBirth?: Date;
  nif?: string;
  medicalHistory?: string;
  allergies?: string;
  medications?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'patient'],
      default: 'patient',
      required: true,
    },
    patientId: {  // ← ADICIONAR ESTE CAMPO
      type: String,
      unique: true,
      sparse: true, // permite que apenas pacientes tenham este campo
      uppercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    nif: {
      type: String,
      trim: true,
    },
    medicalHistory: {
      type: String,
      trim: true,
    },
    allergies: {
      type: String,
      trim: true,
    },
    medications: {
      type: String,
      trim: true,
    },
    emergencyContact: {
      name: { type: String, trim: true },
      phone: { type: String, trim: true },
      relationship: { type: String, trim: true },
    },
  },
  {
    timestamps: true,
  }
);

// Índices para otimizar buscas
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ clerkUserId: 1 });
UserSchema.index({ patientId: 1 }); // ← ADICIONAR ESTE ÍNDICE

export default mongoose.model<IUser>('User', UserSchema);