import AdminLayout from '../../components/admin/AdminLayout';
import { useAdminData } from '../../hooks/useAdminData';
import { Users, Stethoscope, ClipboardList, FileText } from 'lucide-react';
import { Link } from 'react-router';

export default function AdminDashboard() {
  const { patients, doctors, treatments, invoices, isLoading } = useAdminData();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Carregando dados...</div>
        </div>
      </AdminLayout>
    );
  }

  const stats = [
    {
      name: 'Total de Pacientes',
      value: patients.length,
      icon: Users,
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Médicos Ativos',
      value: doctors.filter(d => d.isActive).length,
      icon: Stethoscope,
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Tratamentos Ativos',
      value: treatments.filter(t => t.status === 'in_progress' || t.status === 'scheduled').length,
      icon: ClipboardList,
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Faturas Pendentes',
      value: invoices.filter(i => i.status === 'pending' || i.status === 'overdue').length,
      icon: FileText,
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Administrativo</h1>
          <p className="text-gray-600 mt-2">
            Bem-vindo ao painel de gestão do Centro Dentário Colombo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{stat.name}</p>
                    <p className={`text-3xl font-bold mt-2 ${stat.textColor}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={stat.textColor} size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ações Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/admin/patients"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <Users className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900">Gerir Pacientes</p>
                <p className="text-sm text-gray-600">Adicionar ou editar pacientes</p>
              </div>
            </Link>

            <Link
              to="/admin/doctors"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition"
            >
              <Stethoscope className="text-green-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900">Gerir Médicos</p>
                <p className="text-sm text-gray-600">Adicionar ou editar médicos</p>
              </div>
            </Link>

            <Link
              to="/admin/treatments"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
            >
              <ClipboardList className="text-purple-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900">Gerir Tratamentos</p>
                <p className="text-sm text-gray-600">Ver e criar tratamentos</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Atividade Recente</h2>
          {treatments.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Nenhum tratamento registrado ainda
            </p>
          ) : (
            <div className="space-y-4">
              {treatments.slice(0, 5).map((treatment) => {
                const patientName = typeof treatment.patientId === 'object' 
                  ? `${treatment.patientId.firstName} ${treatment.patientId.lastName}`
                  : 'Paciente';
                
                let statusLabel = 'Cancelado';
                let statusColor = 'bg-gray-100 text-gray-800';
                
                if (treatment.status === 'completed') {
                  statusLabel = 'Concluído';
                  statusColor = 'bg-green-100 text-green-800';
                } else if (treatment.status === 'in_progress') {
                  statusLabel = 'Em Progresso';
                  statusColor = 'bg-blue-100 text-blue-800';
                } else if (treatment.status === 'scheduled') {
                  statusLabel = 'Agendado';
                  statusColor = 'bg-yellow-100 text-yellow-800';
                }
                
                return (
                  <div key={treatment._id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{treatment.treatmentType}</p>
                      <p className="text-sm text-gray-600">Paciente: {patientName}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                      {statusLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}