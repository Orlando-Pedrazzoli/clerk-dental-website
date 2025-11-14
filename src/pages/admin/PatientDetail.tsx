import AdminLayout from '../../components/admin/AdminLayout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function PatientDetail() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/admin/patients"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          Voltar para Pacientes
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Detalhes do Paciente</h1>
          <p className="text-gray-600">Visualize e gerencie informações completas do paciente</p>
        </div>

        {/* Content Placeholder */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-500 text-center py-12">
            Conteúdo detalhado do paciente será implementado em breve...
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}