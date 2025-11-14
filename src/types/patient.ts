export interface Patient {
  _id: string;
  clerkUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'patient' | 'admin';
  phone?: string;
  address?: string;
  dateOfBirth?: string;
  nif?: string;
  medicalHistory?: string;
  allergies?: string;
  medications?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreatePatientData {
  clerkUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  dateOfBirth?: string;
  nif?: string;
  medicalHistory?: string;
  allergies?: string;
  medications?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface UpdatePatientData extends Partial<CreatePatientData> {}