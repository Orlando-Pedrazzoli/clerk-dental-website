import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import AdminLayout from '../../components/admin/AdminLayout';
import { patientService } from '../../services/patientService';
import { ArrowLeft, Copy, User, Mail, Phone, Calendar, FileText, AlertCircle, Users } from 'lucide-react';
import type { Patient } from '../../types/patient';
import { formatDate } from '../../utils/formatDate';
import { NoIndexSEO } from '../../components/NoIndexSEO';

export default function PatientDetail() {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPatient = async () => {
      try {
        if (id) {
          const data = await patientService.getById(id);
          setPatient(data);
        }
      } catch (error) {
        console.error('Erro ao carregar paciente:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPatient();
  }, [id]);

  const copyPatientId = () => {
    if (patient?.patientId) {
      navigator.clipboard.writeText(patient.patientId);
      alert('ID do paciente copiado para área de transferência!');
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <NoIndexSEO title="Detalhes do Paciente" />
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Carregando...</div>
        </div>
      </AdminLayout>
    );
  }

  if (!patient) {
    return (
      <AdminLayout>
        <NoIndexSEO title="Paciente não encontrado" />
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800">Paciente não encontrado</p>
            <Link to="/admin/patients" className="text-red-600 hover:text-red-800 mt-2 inline-block">
              Voltar para lista de pacientes
            </Link>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <NoIndexSEO title="Detalhes do Paciente" />
      <div className="max-w-7xl mx-auto">
        <Link
          to="/admin/patients"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          Voltar para Pacientes
        </Link>

        {/* Header com Nome */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {patient.firstName} {patient.lastName}
          </h1>
          <p className="text-gray-600">Informações completas do paciente</p>
        </div>

        {/* Patient ID em Destaque */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">
                ID do Paciente
              </p>
              <p className="text-3xl font-mono font-bold text-blue-900 tracking-wider">
                {patient.patientId || 'Não definido'}
              </p>
            </div>
            <button
              onClick={copyPatientId}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
            >
              <Copy size={20} />
              Copiar ID
            </button>
          </div>
          <p className="text-sm text-blue-700 mt-3">
            <AlertCircle size={16} className="inline mr-1" />
            Forneça este ID ao paciente para que ele possa acessar o portal
          </p>
        </div>

        {/* Informações Básicas */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <User size={24} className="text-blue-600" />
              Informações Básicas
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{patient.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="font-medium text-gray-900">{patient.phone || '-'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Data de Nascimento</p>
                  <p className="font-medium text-gray-900">
                    {patient.dateOfBirth ? formatDate(patient.dateOfBirth) : '-'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">NIF</p>
                  <p className="font-medium text-gray-900">{patient.nif || '-'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={24} className="text-blue-600" />
              Contacto de Emergência
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                <p className="font-medium text-gray-900">
                  {patient.emergencyContact?.name || '-'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <p className="font-medium text-gray-900">
                  {patient.emergencyContact?.phone || '-'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Relação</p>
                <p className="font-medium text-gray-900">
                  {patient.emergencyContact?.relationship || '-'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Histórico Médico */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Histórico Médico</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Histórico Médico</p>
              <p className="text-gray-600">{patient.medicalHistory || 'Nenhum registro'}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Alergias</p>
              <p className="text-gray-600">{patient.allergies || 'Nenhuma alergia registada'}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Medicamentos</p>
              <p className="text-gray-600">{patient.medications || 'Nenhum medicamento'}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}