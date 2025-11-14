import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IExam extends Document {
  patientId: Types.ObjectId;
  doctorId: Types.ObjectId;
  treatmentId?: Types.ObjectId;
  examType: string;
  examDate: Date;
  description?: string;
  imageUrls: string[];
  cloudinaryPublicIds: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExamSchema = new Schema<IExam>(
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
    },
    treatmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Treatment',
    },
    examType: {
      type: String,
      required: true,
      trim: true,
    },
    examDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageUrls: {
      type: [String],
      default: [],
    },
    cloudinaryPublicIds: {
      type: [String],
      default: [],
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
ExamSchema.index({ patientId: 1, examDate: -1 });
ExamSchema.index({ treatmentId: 1 });

export default mongoose.model<IExam>('Exam', ExamSchema);