export interface Treatment {
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
  treatmentType: string;
  description: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  startDate: string;
  endDate?: string;
  notes?: string;
  cost?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTreatmentData {
  patientId: string;
  doctorId: string;
  treatmentType: string;
  description: string;
  status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  startDate: string;
  endDate?: string;
  notes?: string;
  cost?: number;
}

export interface UpdateTreatmentData extends Partial<CreateTreatmentData> {}