import { useState, useMemo } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import TreatmentForm from '../../components/admin/TreatmentForm';
import ExamUpload from '../../components/admin/ExamUpload';
import InvoiceForm from '../../components/admin/InvoiceForm';
import SearchFilter from '../../components/admin/SearchFilter';
import { useAdminData } from '../../hooks/useAdminData';
import { treatmentService } from '../../services/treatmentService';
import { examService } from '../../services/examService';
import { invoiceService } from '../../services/invoiceService';
import { ClipboardList, Plus, Microscope, FileText, Calendar, User, Stethoscope } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';
import type { CreateTreatmentData } from '../../types/treatment';
import type { CreateExamData } from '../../types/exam';
import type { CreateInvoiceData } from '../../types/invoice';

export default function TreatmentsPage() {
  const { treatments, patients, doctors, isLoading, refetch } = useAdminData();
  const [showTreatmentForm, setShowTreatmentForm] = useState(false);
  const [showExamUpload, setShowExamUpload] = useState(false);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateTreatment = async (data: CreateTreatmentData) => {
    try {
      await treatmentService.create(data);
      alert('Tratamento criado com sucesso!');
      setShowTreatmentForm(false);
      refetch.treatments();
    } catch (error) {
      alert('Erro ao criar tratamento: ' + error);
    }
  };

  const handleCreateExam = async (data: CreateExamData) => {
    try {
      await examService.create(data);
      alert('Exame criado com sucesso!');
      setShowExamUpload(false);
      refetch.exams();
    } catch (error) {
      alert('Erro ao criar exame: ' + error);
    }
  };

  const handleCreateInvoice = async (data: CreateInvoiceData) => {
    try {
      await invoiceService.create(data);
      alert('Fatura criada com sucesso!');
      setShowInvoiceForm(false);
      refetch.invoices();
    } catch (error) {
      alert('Erro ao criar fatura: ' + error);
    }
  };

  // Filtrar tratamentos baseado na busca
  const filteredTreatments = useMemo(() => {
    if (!searchTerm) return treatments;
    
    const search = searchTerm.toLowerCase();
    return treatments.filter(treatment => {
      const patientName = typeof treatment.patientId === 'object'
        ? `${treatment.patientId.firstName} ${treatment.patientId.lastName}`
        : '';
      const doctorName = typeof treatment.doctorId === 'object'
        ? treatment.doctorId.name
        : '';
      
      return (
        treatment.treatmentType?.toLowerCase().includes(search) ||
        treatment.description?.toLowerCase().includes(search) ||
        patientName.toLowerCase().includes(search) ||
        doctorName.toLowerCase().includes(search) ||
        treatment.status?.toLowerCase().includes(search)
      );
    });
  }, [treatments, searchTerm]);

  const getStatusBadge = (status: string) => {
    let statusLabel = 'Cancelado';
    let statusColor = 'bg-gray-100 text-gray-800';
    
    if (status === 'completed') {
      statusLabel = 'Concluído';
      statusColor = 'bg-green-100 text-green-800';
    } else if (status === 'in_progress') {
      statusLabel = 'Em Progresso';
      statusColor = 'bg-blue-100 text-blue-800';
    } else if (status === 'scheduled') {
      statusLabel = 'Agendado';
      statusColor = 'bg-yellow-100 text-yellow-800';
    }

    return { statusLabel, statusColor };
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Carregando tratamentos...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ClipboardList className="text-purple-600" size={32} />
              Gestão de Tratamentos
            </h1>
            <p className="text-gray-600 mt-2">
              {searchTerm 
                ? `${filteredTreatments.length} resultados encontrados`
                : `Total de ${treatments.length} tratamentos registrados`
              }
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setShowTreatmentForm(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2 shadow-md"
            >
              <Plus size={20} />
              <span className="hidden sm:inline">Novo Tratamento</span>
              <span className="sm:hidden">Tratamento</span>
            </button>
            <button 
              onClick={() => setShowExamUpload(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 shadow-md"
            >
              <Microscope size={20} />
              <span className="hidden sm:inline">Adicionar Exame</span>
              <span className="sm:hidden">Exame</span>
            </button>
            <button 
              onClick={() => setShowInvoiceForm(true)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition flex items-center gap-2 shadow-md"
            >
              <FileText size={20} />
              <span className="hidden sm:inline">Nova Fatura</span>
              <span className="sm:hidden">Fatura</span>
            </button>
          </div>
        </div>

        {/* Busca com SearchFilter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <SearchFilter
            placeholder="Pesquisar por tipo, paciente, médico ou status..."
            onChange={setSearchTerm}
            value={searchTerm}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {filteredTreatments.length === 0 ? (
            <div className="text-center py-12">
              <ClipboardList className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">
                {searchTerm 
                  ? 'Nenhum tratamento encontrado com estes critérios'
                  : 'Nenhum tratamento registrado ainda'
                }
              </p>
              {!searchTerm && (
                <button 
                  onClick={() => setShowTreatmentForm(true)}
                  className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Cadastrar Primeiro Tratamento
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Versão Desktop - Tabela */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Tipo
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Paciente
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Médico
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Data Início
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredTreatments.map((treatment) => {
                      const patientName = typeof treatment.patientId === 'object'
                        ? `${treatment.patientId.firstName} ${treatment.patientId.lastName}`
                        : 'Paciente';
                      
                      const doctorName = typeof treatment.doctorId === 'object'
                        ? treatment.doctorId.name
                        : 'Médico';

                      const { statusLabel, statusColor } = getStatusBadge(treatment.status);

                      return (
                        <tr key={treatment._id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">
                              {treatment.treatmentType}
                            </div>
                            <div className="text-sm text-gray-500">
                              {treatment.description}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {patientName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {doctorName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {formatDate(treatment.startDate)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                              {statusLabel}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-purple-600 hover:text-purple-800 font-medium">
                              Ver Detalhes
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Versão Mobile - Cards */}
              <div className="lg:hidden p-4 space-y-4">
                {filteredTreatments.map((treatment) => {
                  const patientName = typeof treatment.patientId === 'object'
                    ? `${treatment.patientId.firstName} ${treatment.patientId.lastName}`
                    : 'Paciente';
                  
                  const doctorName = typeof treatment.doctorId === 'object'
                    ? treatment.doctorId.name
                    : 'Médico';

                  const { statusLabel, statusColor } = getStatusBadge(treatment.status);

                  return (
                    <div key={treatment._id} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">
                            {treatment.treatmentType}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {treatment.description}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                          {statusLabel}
                        </span>
                      </div>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-gray-400" />
                          <span className="text-gray-600">{patientName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Stethoscope size={14} className="text-gray-400" />
                          <span className="text-gray-600">{doctorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-gray-600">{formatDate(treatment.startDate)}</span>
                        </div>
                      </div>

                      <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        Ver Detalhes
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {showTreatmentForm && (
        <TreatmentForm
          patients={patients}
          doctors={doctors}
          onClose={() => setShowTreatmentForm(false)}
          onSave={handleCreateTreatment}
        />
      )}

      {showExamUpload && (
        <ExamUpload
          patients={patients}
          doctors={doctors}
          onClose={() => setShowExamUpload(false)}
          onSave={handleCreateExam}
        />
      )}

      {showInvoiceForm && (
        <InvoiceForm
          patients={patients}
          treatments={treatments}
          onClose={() => setShowInvoiceForm(false)}
          onSave={handleCreateInvoice}
        />
      )}
    </AdminLayout>
  );
}