export interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  licenseNumber: string;
  phone?: string;
  email?: string;
  bio?: string;
  photoUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDoctorData {
  name: string;
  specialty: string;
  licenseNumber: string;
  phone?: string;
  email?: string;
  bio?: string;
  photoUrl?: string;
}

export interface UpdateDoctorData extends Partial<CreateDoctorData> {
  isActive?: boolean;
}