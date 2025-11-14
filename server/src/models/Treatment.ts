import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ITreatment extends Document {
  patientId: Types.ObjectId;
  doctorId: Types.ObjectId;
  treatmentType: string;
  description: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  notes?: string;
  cost?: number;
  createdAt: Date;
  updatedAt: Date;
}

const TreatmentSchema = new Schema<ITreatment>(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
      index: true,
    },
    treatmentType: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['scheduled', 'in_progress', 'completed', 'cancelled'],
      default: 'scheduled',
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    notes: {
      type: String,
      trim: true,
    },
    cost: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Índices compostos para queries otimizadas
TreatmentSchema.index({ patientId: 1, status: 1 });
TreatmentSchema.index({ doctorId: 1, startDate: -1 });

export default mongoose.model<ITreatment>('Treatment', TreatmentSchema);