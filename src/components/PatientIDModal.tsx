import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUser } from '@clerk/clerk-react';
import { Shield, X, AlertCircle } from 'lucide-react';
import api from '../services/api';

interface PatientIDModalProps {
  onClose: () => void;
}

export default function PatientIDModal({ onClose }: PatientIDModalProps) {
  const navigate = useNavigate();
  const { user } = useUser();
  const [patientId, setPatientId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Validar Patient ID
      const validateResponse = await api.post('/patients/validate-id', {
        patientId: patientId.trim().toUpperCase(),
      });

      if (!validateResponse.data.valid) {
        setError('ID de paciente inválido. Verifique com a clínica.');
        setLoading(false);
        return;
      }

      // 2. Vincular Clerk User ID ao paciente (se ainda não estiver vinculado)
      if (user?.id) {
        try {
          await api.post('/patients/link-clerk', {
            patientId: patientId.trim().toUpperCase(),
            clerkUserId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
          });
        } catch (linkError: any) {
          // Se já estiver vinculado, ignora o erro
          if (!linkError.response?.data?.error?.includes('já está vinculado')) {
            console.error('Erro ao vincular conta:', linkError);
          }
        }
      }

      // 3. Salvar Patient ID validado no localStorage
      localStorage.setItem('validatedPatientId', patientId.trim().toUpperCase());

      // 4. Redirecionar para portal do paciente
      navigate('/patient/portal');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao validar ID. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Shield className="text-blue-600" size={48} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Bem-vindo ao Portal do Paciente
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Digite o ID de paciente fornecido pela clínica
        </p>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ID de Paciente
            </label>
            <input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value.toUpperCase())}
              required
              placeholder="Ex: CDC-2025-0001"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono tracking-wider"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !patientId.trim()}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Validando...' : 'Validar ID'}
          </button>
        </form>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 mb-2">
            <strong>Não tem um ID?</strong> Entre em contacto com a clínica para obter o seu ID de paciente.
          </p>
          <a
            href="tel:+351216041355"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-block"
          >
            📞 +351 21 604 13 55
          </a>
        </div>
      </div>
    </div>
  );
}