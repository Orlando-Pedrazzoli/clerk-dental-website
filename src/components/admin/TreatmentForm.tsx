import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import MaskedInput from './MaskedInput';
import Autocomplete from './Autocomplete';
import type { Treatment, CreateTreatmentData } from '../../types/treatment';
import type { Patient } from '../../types/patient';
import type { Doctor } from '../../types/doctor';
import { TREATMENT_TYPES } from '../../utils/constants';

interface TreatmentFormProps {
  treatment?: Treatment;
  patients: Patient[];
  doctors: Doctor[];
  onClose: () => void;
  onSave: (data: CreateTreatmentData) => void;
}

export default function TreatmentForm({ treatment, patients, doctors, onClose, onSave }: TreatmentFormProps) {
  // Extract IDs safely
  const getPatientId = () => {
    if (!treatment?.patientId) return '';
    return typeof treatment.patientId === 'object' ? treatment.patientId._id : treatment.patientId;
  };

  const getDoctorId = () => {
    if (!treatment?.doctorId) return '';
    return typeof treatment.doctorId === 'object' ? treatment.doctorId._id : treatment.doctorId;
  };

  const [formData, setFormData] = useState<CreateTreatmentData>({
    patientId: getPatientId(),
    doctorId: getDoctorId(),
    treatmentType: treatment?.treatmentType || '',
    description: treatment?.description || '',
    startDate: treatment?.startDate || '',
    endDate: treatment?.endDate || '',
    status: treatment?.status || 'scheduled',
    cost: treatment?.cost || 0,
    notes: treatment?.notes || '',
  });

  // Preparar opções para autocomplete
  const patientOptions = useMemo(() => 
    patients.map(p => ({
      id: p._id,
      label: `${p.firstName} ${p.lastName}`,
      secondary: p.email || p.phone
    })), [patients]
  );

  const doctorOptions = useMemo(() => 
    doctors.map(d => ({
      id: d._id,
      label: d.name,
      secondary: d.specialty
    })), [doctors]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMaskedChange = (name: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {treatment ? 'Editar Tratamento' : 'Novo Tratamento'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Patient & Doctor Selection com Autocomplete */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Autocomplete
              options={patientOptions}
              value={formData.patientId}
              onChange={(value) => setFormData(prev => ({ ...prev, patientId: value }))}
              label="Paciente"
              placeholder="Digite para buscar paciente..."
              required
            />

            <Autocomplete
              options={doctorOptions}
              value={formData.doctorId}
              onChange={(value) => setFormData(prev => ({ ...prev, doctorId: value }))}
              label="Médico"
              placeholder="Digite para buscar médico..."
              required
            />
          </div>

          {/* Treatment Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Tratamento *
            </label>
            <select
              name="treatmentType"
              value={formData.treatmentType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Selecione o tipo</option>
              {TREATMENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descrição *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Descreva o tratamento em detalhes..."
            />
          </div>

          {/* Dates & Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data Início *
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data Término
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="scheduled">Agendado</option>
                <option value="in_progress">Em Progresso</option>
                <option value="completed">Concluído</option>
                <option value="cancelled">Cancelado</option>
              </select>
            </div>
          </div>

          {/* Cost com MaskedInput - CORRIGIDO */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Custo (€)
            </label>
            <MaskedInput
              mask="currency"
              name="cost"
              value={formData.cost || 0}
              onChange={(value) => handleMaskedChange('cost', value)}
              placeholder="0,00 €"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Observações
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Observações adicionais sobre o tratamento..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              {treatment ? 'Atualizar' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}