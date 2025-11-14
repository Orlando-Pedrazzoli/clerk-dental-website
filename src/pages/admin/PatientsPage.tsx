import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PatientForm from '../../components/admin/PatientForm';
import { useAdminData } from '../../hooks/useAdminData';
import { patientService } from '../../services/patientService';
import { Users, Plus, Search } from 'lucide-react';
import type { CreatePatientData } from '../../types/patient';

export default function PatientsPage() {
  const { patients, isLoading, refetch } = useAdminData();
  const [showForm, setShowForm] = useState(false);

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
              Total de {patients.length} pacientes cadastrados
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

        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Pesquisar paciente por nome, email ou NIF..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {patients.length === 0 ? (
            <div className="text-center py-12">
              <Users className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">Nenhum paciente cadastrado ainda</p>
              <button 
                onClick={() => setShowForm(true)}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Cadastrar Primeiro Paciente
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Nome
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
                  {patients.map((patient) => (
                    <tr key={patient._id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {patient.firstName} {patient.lastName}
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
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          Ver Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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