import { useQuery } from '@tanstack/react-query';
import { patientService } from '../services/patientService';
import { treatmentService } from '../services/treatmentService';
import { examService } from '../services/examService';
import { invoiceService } from '../services/invoiceService';
import { usePatientAuth } from './usePatientAuth';

export const usePatientData = () => {
  const { patientData } = usePatientAuth();

  // Buscar dados completos do paciente
  const {
    data: patient,
    isLoading: isLoadingPatient,
    error: patientError,
  } = useQuery({
    queryKey: ['patient', patientData?.id],
    queryFn: () => patientService.getById(patientData!.id),
    enabled: !!patientData?.id,
  });

  // Buscar tratamentos do paciente
  const {
    data: treatments,
    isLoading: isLoadingTreatments,
  } = useQuery({
    queryKey: ['treatments', patient?._id],
    queryFn: () => treatmentService.getByPatient(patient!._id),
    enabled: !!patient?._id,
  });

  // Buscar exames do paciente
  const {
    data: exams,
    isLoading: isLoadingExams,
  } = useQuery({
    queryKey: ['exams', patient?._id],
    queryFn: () => examService.getByPatient(patient!._id),
    enabled: !!patient?._id,
  });

  // Buscar faturas do paciente
  const {
    data: invoices,
    isLoading: isLoadingInvoices,
  } = useQuery({
    queryKey: ['invoices', patient?._id],
    queryFn: () => invoiceService.getByPatient(patient!._id),
    enabled: !!patient?._id,
  });

  const isLoading = isLoadingPatient || isLoadingTreatments || isLoadingExams || isLoadingInvoices;

  return {
    patient,
    treatments: treatments || [],
    exams: exams || [],
    invoices: invoices || [],
    isLoading,
    error: patientError,
  };
};