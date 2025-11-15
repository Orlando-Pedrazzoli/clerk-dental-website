export interface Patient {
  _id: string;
  clerkUserId?: string; // ← Opcional agora
  patientId: string; // ← ADICIONAR
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
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
  createdAt?: string;
  updatedAt?: string;
}

export interface CreatePatientData {
  patientId: string; // ← ADICIONAR
  clerkUserId?: string; // ← Opcional agora
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
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