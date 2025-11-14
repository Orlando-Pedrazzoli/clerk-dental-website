import { Link } from 'react-router';
import { usePatientData } from '../../hooks/usePatientData';
import { UserButton } from '@clerk/clerk-react';
import { 
  Calendar, 
  FileText, 
  ClipboardList, 
  Microscope,
  User,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

export default function PatientPortal() {
  const { patient, treatments, exams, invoices, isLoading } = usePatientData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando seus dados...</div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Paciente não encontrado</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const activeTreatments = treatments.filter(t => 
    t.status === 'in_progress' || t.status === 'scheduled'
  );
  
  const pendingInvoices = invoices.filter(i => 
    i.status === 'pending' || i.status === 'overdue'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-colombo-nav.png" 
              alt="Centro Dentário Colombo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Portal do Paciente</h1>
              <p className="text-sm text-gray-600">Centro Dentário Colombo</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
              Voltar ao Site
            </Link>
            <UserButton />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Bem-vindo, {patient.firstName}!
          </h2>
          <p className="text-blue-100">
            Acesse todas as informações sobre seus tratamentos, exames e consultas
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <ClipboardList className="text-blue-600" size={32} />
              <span className="text-3xl font-bold text-gray-900">
                {treatments.length}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Tratamentos</p>
            <p className="text-sm text-blue-600 mt-1">
              {activeTreatments.length} ativos
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Microscope className="text-green-600" size={32} />
              <span className="text-3xl font-bold text-gray-900">
                {exams.length}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Exames</p>
            <Link to="/patient/exams" className="text-sm text-green-600 hover:underline mt-1 inline-block">
              Ver todos
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="text-purple-600" size={32} />
              <span className="text-3xl font-bold text-gray-900">
                {invoices.length}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Faturas</p>
            <p className="text-sm text-purple-600 mt-1">
              {pendingInvoices.length} pendentes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="text-orange-600" size={32} />
              <span className="text-3xl font-bold text-gray-900">
                {activeTreatments.length}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Próximas Consultas</p>
            <Link to="/patient/treatments" className="text-sm text-orange-600 hover:underline mt-1 inline-block">
              Ver agenda
            </Link>
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/patient/treatments"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition group"
          >
            <ClipboardList className="text-blue-600 mb-4 group-hover:scale-110 transition" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Meus Tratamentos</h3>
            <p className="text-gray-600">Acompanhe seus tratamentos e histórico médico</p>
          </Link>

          <Link
            to="/patient/exams"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition group"
          >
            <Microscope className="text-green-600 mb-4 group-hover:scale-110 transition" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Meus Exames</h3>
            <p className="text-gray-600">Visualize todos os seus exames dentários</p>
          </Link>

          <Link
            to="/patient/invoices"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition group"
          >
            <FileText className="text-purple-600 mb-4 group-hover:scale-110 transition" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Minhas Faturas</h3>
            <p className="text-gray-600">Consulte suas faturas e pagamentos</p>
          </Link>
        </div>

        {/* Patient Info Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-gray-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Meus Dados</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="text-gray-400 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Nome Completo</p>
                  <p className="font-semibold text-gray-900">
                    {patient.firstName} {patient.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-gray-400 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{patient.email}</p>
                </div>
              </div>

              {patient.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Telefone</p>
                    <p className="font-semibold text-gray-900">{patient.phone}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {patient.dateOfBirth && (
                <div className="flex items-start gap-3">
                  <Calendar className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Data de Nascimento</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(patient.dateOfBirth)}
                    </p>
                  </div>
                </div>
              )}

              {patient.nif && (
                <div className="flex items-start gap-3">
                  <FileText className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">NIF</p>
                    <p className="font-semibold text-gray-900">{patient.nif}</p>
                  </div>
                </div>
              )}

              {patient.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Morada</p>
                    <p className="font-semibold text-gray-900">{patient.address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}