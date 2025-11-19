import { useState, useMemo } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import DoctorForm from '../../components/admin/DoctorForm';
import SearchFilter from '../../components/admin/SearchFilter';
import { useAdminData } from '../../hooks/useAdminData';
import { doctorService } from '../../services/doctorService';
import { Stethoscope, Plus, Edit, Phone, Mail } from 'lucide-react';
import type { CreateDoctorData } from '../../types/doctor';

export default function DoctorsPage() {
  const { doctors, isLoading, refetch } = useAdminData();
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filtrar médicos baseado na busca
  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    const search = searchTerm.toLowerCase();
    return doctors.filter(doctor => {
      return (
        doctor.name?.toLowerCase().includes(search) ||
        doctor.specialty?.toLowerCase().includes(search) ||
        doctor.email?.toLowerCase().includes(search) ||
        doctor.phone?.includes(search) ||
        doctor.licenseNumber?.toLowerCase().includes(search)
      );
    });
  }, [doctors, searchTerm]);

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
              {searchTerm 
                ? `${filteredDoctors.length} resultados encontrados`
                : `Total de ${doctors.length} médicos cadastrados`
              }
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

        {/* Busca com SearchFilter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <SearchFilter
            placeholder="Pesquisar por nome, especialidade, email ou licença..."
            onChange={setSearchTerm}
            value={searchTerm}
          />
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Stethoscope className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500 text-lg">
              {searchTerm 
                ? 'Nenhum médico encontrado com estes critérios'
                : 'Nenhum médico cadastrado ainda'
              }
            </p>
            {!searchTerm && (
              <button 
                onClick={() => setShowForm(true)}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Cadastrar Primeiro Médico
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Versão Desktop - Grid de Cards */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
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
                    <div className="flex-1">
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
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={14} />
                        <span className="truncate">{doctor.email}</span>
                      </div>
                    )}
                    {doctor.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={14} />
                        <span>{doctor.phone}</span>
                      </div>
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
                    <button className="text-green-600 hover:text-green-800 p-2 hover:bg-green-50 rounded-lg transition">
                      <Edit size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Versão Mobile - Lista de Cards */}
            <div className="md:hidden space-y-4">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="bg-white rounded-xl shadow-md p-4"
                >
                  <div className="flex items-center gap-4 mb-3">
                    {doctor.photoUrl ? (
                      <img
                        src={doctor.photoUrl}
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Stethoscope className="text-green-600" size={20} />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-green-600">{doctor.specialty}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        doctor.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {doctor.isActive ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    {doctor.licenseNumber && (
                      <p className="text-gray-600">
                        <span className="font-semibold">Licença:</span> {doctor.licenseNumber}
                      </p>
                    )}
                    {doctor.email && (
                      <p className="text-gray-600 truncate">{doctor.email}</p>
                    )}
                    {doctor.phone && (
                      <p className="text-gray-600">{doctor.phone}</p>
                    )}
                  </div>

                  <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Editar
                  </button>
                </div>
              ))}
            </div>
          </>
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