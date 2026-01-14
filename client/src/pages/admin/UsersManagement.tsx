import { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { userService } from '../../services/userService';
import { Shield, User as UserIcon, Search } from 'lucide-react';
import { NoIndexSEO } from '../../components/NoIndexSEO';

interface User {
  _id: string;
  clerkUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'patient';
}

export default function UsersManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const response = await userService.getAll();
      setUsers(response);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handlePromoteToAdmin = async (userId: string) => {
    if (!confirm('Tem certeza que deseja promover este usuário a Administrador?')) return;
    
    try {
      await userService.update(userId, { role: 'admin' });
      alert('Usuário promovido a Administrador com sucesso!');
      loadUsers();
    } catch (error) {
      alert('Erro ao promover usuário');
    }
  };

  const handleDemoteToPatient = async (userId: string) => {
    if (!confirm('Tem certeza que deseja remover privilégios de Administrador?')) return;
    
    try {
      await userService.update(userId, { role: 'patient' });
      alert('Privilégios de Administrador removidos!');
      loadUsers();
    } catch (error) {
      alert('Erro ao alterar role');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <NoIndexSEO title="Gestão de Utilizadores" />
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Carregando utilizadores...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <NoIndexSEO title="Gestão de Utilizadores" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Shield className="text-purple-600" size={32} />
            Gestão de Utilizadores
          </h1>
          <p className="text-gray-600 mt-2">
            Gerir roles e permissões dos utilizadores do sistema
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Pesquisar utilizador..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {users.length === 0 ? (
            <div className="text-center py-12">
              <Shield className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">Nenhum utilizador encontrado</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Utilizador
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {user.role === 'admin' ? (
                            <div className="bg-purple-100 p-2 rounded-full">
                              <Shield className="text-purple-600" size={20} />
                            </div>
                          ) : (
                            <div className="bg-gray-100 p-2 rounded-full">
                              <UserIcon className="text-gray-600" size={20} />
                            </div>
                          )}
                          <span className="font-medium text-gray-900">
                            {user.firstName} {user.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === 'admin'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {user.role === 'admin' ? 'Administrador' : 'Paciente'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.role === 'patient' ? (
                          <button
                            onClick={() => handlePromoteToAdmin(user._id)}
                            className="text-purple-600 hover:text-purple-800 font-medium transition"
                          >
                            Promover a Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDemoteToPatient(user._id)}
                            className="text-red-600 hover:text-red-800 font-medium transition"
                          >
                            Remover Admin
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Shield size={20} />
            Informação sobre Roles
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• <strong>Administrador:</strong> Acesso completo ao sistema (gestão de pacientes, médicos, tratamentos, etc)</li>
            <li>• <strong>Paciente:</strong> Acesso apenas ao portal do paciente (visualizar seus tratamentos, exames e faturas)</li>
            <li>• O primeiro utilizador registado no sistema torna-se automaticamente Administrador</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}