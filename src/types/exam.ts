export interface Exam {
  _id: string;
  patientId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | string;
  doctorId: {
    _id: string;
    name: string;
    specialty: string;
  } | string;
  treatmentId?: {
    _id: string;
    treatmentType: string;
    description: string;
  } | string;
  examType: string;
  examDate: string;
  description?: string;
  imageUrls: string[];
  cloudinaryPublicIds: string[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateExamData {
  patientId: string;
  doctorId: string;
  treatmentId?: string;
  examType: string;
  examDate: string;
  description?: string;
  imageUrls?: string[];
  cloudinaryPublicIds?: string[];
  notes?: string;
}

export interface UpdateExamData extends Partial<CreateExamData> {}