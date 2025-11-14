import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import DoctorForm from '../../components/admin/DoctorForm';
import { useAdminData } from '../../hooks/useAdminData';
import { doctorService } from '../../services/doctorService';
import { Stethoscope, Plus, Search } from 'lucide-react';
import type { CreateDoctorData } from '../../types/doctor';

export default function DoctorsPage() {
  const { doctors, isLoading, refetch } = useAdminData();
  const [showForm, setShowForm] = useState(false);

  const handleCreateDoctor = async (data: CreateDoctorData) => {
    try {
      await doctorService.create(data);
      alert('Médico criado com sucesso!');
      setShowForm(false);
      refetch.doctors();
    } catch (error) {
      alert('Erro ao criar médico: ' + error);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Carregando médicos...</div>
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
              <Stethoscope className="text-green-600" size={32} />
              Gestão de Médicos
            </h1>
            <p className="text-gray-600 mt-2">
              Total de {doctors.length} médicos cadastrados
            </p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2 shadow-md"
          >
            <Plus size={20} />
            Novo Médico
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Pesquisar médico por nome ou especialidade..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {doctors.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Stethoscope className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500 text-lg">Nenhum médico cadastrado ainda</p>
            <button 
              onClick={() => setShowForm(true)}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Cadastrar Primeiro Médico
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  {doctor.photoUrl ? (
                    <img
                      src={doctor.photoUrl}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Stethoscope className="text-green-600" size={24} />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
                    <p className="text-sm text-green-600 font-medium">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {doctor.licenseNumber && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Licença:</span> {doctor.licenseNumber}
                    </p>
                  )}
                  {doctor.email && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Email:</span> {doctor.email}
                    </p>
                  )}
                  {doctor.phone && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Telefone:</span> {doctor.phone}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doctor.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {doctor.isActive ? 'Ativo' : 'Inativo'}
                  </span>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                    Editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <DoctorForm
          onClose={() => setShowForm(false)}
          onSave={handleCreateDoctor}
        />
      )}
    </AdminLayout>
  );
}