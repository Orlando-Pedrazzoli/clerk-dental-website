import { useQuery } from '@tanstack/react-query';
import { patientService } from '../services/patientService';
import { doctorService } from '../services/doctorService';
import { treatmentService } from '../services/treatmentService';
import { examService } from '../services/examService';
import { invoiceService } from '../services/invoiceService';

export const useAdminData = () => {
  // Buscar todos os pacientes
  const {
    data: patients,
    isLoading: isLoadingPatients,
    refetch: refetchPatients,
  } = useQuery({
    queryKey: ['patients'],
    queryFn: () => patientService.getAll(),
  });

  // Buscar todos os médicos
  const {
    data: doctors,
    isLoading: isLoadingDoctors,
    refetch: refetchDoctors,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => doctorService.getAll(),
  });

  // Buscar todos os tratamentos
  const {
    data: treatments,
    isLoading: isLoadingTreatments,
    refetch: refetchTreatments,
  } = useQuery({
    queryKey: ['treatments'],
    queryFn: () => treatmentService.getAll(),
  });

  // Buscar todos os exames
  const {
    data: exams,
    isLoading: isLoadingExams,
    refetch: refetchExams,
  } = useQuery({
    queryKey: ['exams'],
    queryFn: () => examService.getAll(),
  });

  // Buscar todas as faturas
  const {
    data: invoices,
    isLoading: isLoadingInvoices,
    refetch: refetchInvoices,
  } = useQuery({
    queryKey: ['invoices'],
    queryFn: () => invoiceService.getAll(),
  });

  const isLoading =
    isLoadingPatients ||
    isLoadingDoctors ||
    isLoadingTreatments ||
    isLoadingExams ||
    isLoadingInvoices;

  return {
    patients: patients || [],
    doctors: doctors || [],
    treatments: treatments || [],
    exams: exams || [],
    invoices: invoices || [],
    isLoading,
    refetch: {
      patients: refetchPatients,
      doctors: refetchDoctors,
      treatments: refetchTreatments,
      exams: refetchExams,
      invoices: refetchInvoices,
    },
  };
};