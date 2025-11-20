import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, X, AlertCircle } from 'lucide-react';
import { usePatientAuth } from '../hooks/usePatientAuth';
import api from '../services/api';

interface PatientIDModalProps {
  onClose: () => void;
}

export default function PatientIDModal({ onClose }: PatientIDModalProps) {
  const navigate = useNavigate();
  const { login } = usePatientAuth();
  const [email, setEmail] = useState('');
  const [patientId, setPatientId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Fazer login com email + patientId
      const response = await api.post('/patients/login', {
        email: email.toLowerCase().trim(),
        patientId: patientId.trim().toUpperCase(),
      });

      if (response.data.success) {
        // Salvar token e dados do paciente
        login(response.data.token, response.data.patient);
        
        // Redirecionar para portal
        navigate('/patient/portal');
      }
    } catch (err: any) {
      setError(
        err.response?.data?.error || 
        'Email ou ID inválidos. Verifique os dados e tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Função para fechar ao clicar no backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
        {/* Botão Fechar - Corrigido */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition z-10"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Shield className="text-blue-600" size={48} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Portal do Paciente
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Acesse com seu email e ID de paciente
        </p>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu.email@exemplo.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              autoComplete="email"
            />
          </div>

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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono tracking-wider transition"
              autoComplete="off"
            />
            <p className="text-xs text-gray-500 mt-1">
              Este ID foi fornecido pela clínica no momento do cadastro
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !email.trim() || !patientId.trim()}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {loading ? 'Validando...' : 'Acessar Portal'}
          </button>
        </form>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 mb-2">
            <strong>Não tem seus dados de acesso?</strong>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Entre em contacto com a clínica:
          </p>
          <a
            href="tel:+351216041355"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1 hover:underline"
          >
            📞 +351 21 604 13 55
          </a>
        </div>
      </div>
    </div>
  );
}