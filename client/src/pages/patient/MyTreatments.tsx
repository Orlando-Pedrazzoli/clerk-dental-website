import { Link } from 'react-router';
import { usePatientData } from '../../hooks/usePatientData';
import PatientUserMenu from '../../components/PatientUserMenu';
import { ArrowLeft, ClipboardList, Calendar, User, DollarSign, FileText } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/constants';

export default function MyTreatments() {
  const { treatments, isLoading } = usePatientData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando seus tratamentos...</div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'in_progress':
        return 'Em Progresso';
      case 'scheduled':
        return 'Agendado';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

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
              <h1 className="text-xl font-bold text-gray-900">Meus Tratamentos</h1>
              <p className="text-sm text-gray-600">Centro Dentário Colombo</p>
            </div>
          </div>
          <PatientUserMenu />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/patient/portal"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          Voltar ao Portal
        </Link>

        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Meus Tratamentos</h2>
          </div>
          <p className="text-gray-600">
            Acompanhe todos os seus tratamentos e histórico médico
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
              <ClipboardList className="text-blue-600" size={20} />
              <span className="text-blue-800 font-semibold">
                {treatments.length} tratamento{treatments.length !== 1 ? 's' : ''} total
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
              <span className="text-green-800 font-semibold">
                {treatments.filter(t => t.status === 'in_progress' || t.status === 'scheduled').length} ativo{treatments.filter(t => t.status === 'in_progress' || t.status === 'scheduled').length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Treatments Timeline */}
        {treatments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <ClipboardList className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum tratamento registrado
            </h3>
            <p className="text-gray-600">
              Seus tratamentos dentários aparecerão aqui quando forem iniciados
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {treatments.map((treatment, index) => {
              const doctorName = typeof treatment.doctorId === 'object' 
                ? treatment.doctorId.name 
                : 'Médico';
              
              const doctorSpecialty = typeof treatment.doctorId === 'object' 
                ? treatment.doctorId.specialty 
                : '';

              return (
                <div key={treatment._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Treatment Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                            #{treatments.length - index}
                          </span>
                          <h3 className="text-2xl font-bold">{treatment.treatmentType}</h3>
                        </div>
                        <p className="text-blue-100">{treatment.description}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-lg border-2 font-semibold ${getStatusColor(treatment.status)}`}>
                        {getStatusLabel(treatment.status)}
                      </span>
                    </div>
                  </div>

                  {/* Treatment Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <User className="text-gray-400 mt-1" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Médico</p>
                          <p className="font-semibold text-gray-900">{doctorName}</p>
                          {doctorSpecialty && (
                            <p className="text-sm text-gray-500">{doctorSpecialty}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="text-gray-400 mt-1" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">Data Início</p>
                          <p className="font-semibold text-gray-900">
                            {formatDate(treatment.startDate)}
                          </p>
                        </div>
                      </div>

                      {treatment.endDate && (
                        <div className="flex items-start gap-3">
                          <Calendar className="text-gray-400 mt-1" size={20} />
                          <div>
                            <p className="text-sm text-gray-600">Data Término</p>
                            <p className="font-semibold text-gray-900">
                              {formatDate(treatment.endDate)}
                            </p>
                          </div>
                        </div>
                      )}

                      {treatment.cost && (
                        <div className="flex items-start gap-3">
                          <DollarSign className="text-gray-400 mt-1" size={20} />
                          <div>
                            <p className="text-sm text-gray-600">Custo</p>
                            <p className="font-semibold text-gray-900">
                              {formatCurrency(treatment.cost)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Notes */}
                    {treatment.notes && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <FileText className="text-blue-600 mt-1" size={18} />
                          <div>
                            <p className="text-sm font-semibold text-blue-900 mb-1">
                              Observações:
                            </p>
                            <p className="text-blue-800">{treatment.notes}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}