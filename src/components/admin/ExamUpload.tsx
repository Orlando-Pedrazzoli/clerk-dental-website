import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import Autocomplete from './Autocomplete';
import FileUpload from './FileUpload';
import type { CreateExamData } from '../../types/exam';
import type { Patient } from '../../types/patient';
import type { Doctor } from '../../types/doctor';
import { EXAM_TYPES } from '../../utils/constants';

interface ExamUploadProps {
  patients: Patient[];
  doctors: Doctor[];
  onClose: () => void;
  onSave: (data: CreateExamData) => void;
}

export default function ExamUpload({ patients, doctors, onClose, onSave }: ExamUploadProps) {
  const [formData, setFormData] = useState<CreateExamData>({
    patientId: '',
    doctorId: '',
    examType: '',
    examDate: '',
    description: '',
    imageUrls: [],
    notes: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

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

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
    
    // Simular upload e obter URLs (em produção, isso enviaria para o servidor)
    // Por enquanto, vamos criar URLs temporárias
    const urls = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, imageUrls: urls }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Em produção, você faria o upload real dos arquivos aqui
    // Por enquanto, vamos usar as URLs temporárias
    
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Adicionar Exame</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Patient & Doctor com Autocomplete */}
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

          {/* Exam Type & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo de Exame *
              </label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione o tipo</option>
                {EXAM_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data do Exame *
              </label>
              <input
                type="date"
                name="examDate"
                value={formData.examDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Descrição do exame..."
            />
          </div>

          {/* File Upload com Drag & Drop */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Imagens do Exame
            </label>
            <FileUpload
              accept="image/*,application/pdf"
              multiple={true}
              maxSize={10} // 10MB por arquivo
              onFilesSelected={handleFilesSelected}
            />
            <p className="text-xs text-gray-500 mt-2">
              Você pode arrastar e soltar arquivos ou clicar para selecionar. 
              Aceita imagens (JPG, PNG) e PDFs. Máximo 10MB por arquivo.
            </p>
          </div>

          {/* Preview das imagens (se forem imagens) */}
          {uploadedFiles.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Arquivos Selecionados
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    {file.type.startsWith('image/') ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Exame ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                      />
                    ) : (
                      <div className="w-full h-32 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">PDF</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Observações sobre o exame..."
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
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Salvar Exame
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}