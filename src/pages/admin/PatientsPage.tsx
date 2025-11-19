import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import AdminLayout from '../../components/admin/AdminLayout';
import PatientForm from '../../components/admin/PatientForm';
import SearchFilter from '../../components/admin/SearchFilter';
import { useAdminData } from '../../hooks/useAdminData';
import { patientService } from '../../services/patientService';
import { Users, Plus, Copy, Eye } from 'lucide-react';
import type { CreatePatientData } from '../../types/patient';

export default function PatientsPage() {
  const { patients, isLoading, refetch } = useAdminData();
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreatePatient = async (data: CreatePatientData) => {
    try {
      await patientService.create(data);
      alert('Paciente criado com sucesso!');
      setShowForm(false);
      refetch.patients();
    } catch (error) {
      alert('Erro ao criar paciente: ' + error);
    }
  };

  const copyPatientId = (patientId: string) => {
    navigator.clipboard.writeText(patientId);
    alert('ID copiado!');
  };

  // Filtrar pacientes baseado na busca
  const filteredPatients = useMemo(() => {
    if (!searchTerm) return patients;
    
    const search = searchTerm.toLowerCase();
    return patients.filter(patient => {
      return (
        patient.firstName?.toLowerCase().includes(search) ||
        patient.lastName?.toLowerCase().includes(search) ||
        patient.email?.toLowerCase().includes(search) ||
        patient.phone?.includes(search) ||
        patient.nif?.includes(search) ||
        patient.patientId?.toLowerCase().includes(search)
      );
    });
  }, [patients, searchTerm]);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Carregando pacientes...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="text-blue-600" size={32} />
              Gestão de Pacientes
            </h1>
            <p className="text-gray-600 mt-2">
              {searchTerm 
                ? `${filteredPatients.length} resultados encontrados`
                : `Total de ${patients.length} pacientes cadastrados`
              }
            </p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
          >
            <Plus size={20} />
            Novo Paciente
          </button>
        </div>

        {/* Busca com SearchFilter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <SearchFilter
            placeholder="Pesquisar por nome, email, telefone, NIF ou Patient ID..."
            onChange={setSearchTerm}
            value={searchTerm}
          />
        </div>

        {/* Tabela Responsiva */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {filteredPatients.length === 0 ? (
            <div className="text-center py-12">
              <Users className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">
                {searchTerm 
                  ? 'Nenhum paciente encontrado com estes critérios'
                  : 'Nenhum paciente cadastrado ainda'
                }
              </p>
              {!searchTerm && (
                <button 
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Cadastrar Primeiro Paciente
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Versão Desktop */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Nome
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Patient ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Telefone
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        NIF
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredPatients.map((patient) => (
                      <tr key={patient._id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {patient.firstName} {patient.lastName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                              {patient.patientId || 'N/A'}
                            </span>
                            {patient.patientId && (
                              <button
                                onClick={() => copyPatientId(patient.patientId!)}
                                className="text-gray-400 hover:text-blue-600 transition p-1"
                                title="Copiar ID"
                              >
                                <Copy size={16} />
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          {patient.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          {patient.phone || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          {patient.nif || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            to={`/admin/patients/${patient._id}`}
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Eye size={16} />
                            Detalhes
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Versão Mobile - Cards */}
              <div className="md:hidden p-4 space-y-4">
                {filteredPatients.map((patient) => (
                  <div key={patient._id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {patient.firstName} {patient.lastName}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{patient.email}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {patient.patientId || 'N/A'}
                        </span>
                        {patient.patientId && (
                          <button
                            onClick={() => copyPatientId(patient.patientId!)}
                            className="text-gray-400 hover:text-blue-600 transition p-1"
                          >
                            <Copy size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      {patient.phone && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Tel:</span>
                          <span className="text-gray-900">{patient.phone}</span>
                        </div>
                      )}
                      {patient.nif && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">NIF:</span>
                          <span className="text-gray-900">{patient.nif}</span>
                        </div>
                      )}
                    </div>
                    
                    <Link
                      to={`/admin/patients/${patient._id}`}
                      className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {showForm && (
        <PatientForm
          onClose={() => setShowForm(false)}
          onSave={handleCreatePatient}
        />
      )}
    </AdminLayout>
  );
}