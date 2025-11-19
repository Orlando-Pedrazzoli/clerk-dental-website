import { useState, useMemo } from 'react';
import { X, Trash2 } from 'lucide-react';
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
    cloudinaryPublicIds: [],
    notes: '',
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');

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

  // Upload de múltiplas imagens para o servidor
  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadError('');

    try {
      const formDataUpload = new FormData();
      files.forEach(file => {
        formDataUpload.append('images', file);
      });

      const response = await fetch('http://localhost:5000/api/upload/exam', {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload das imagens');
      }

      const data = await response.json();
      
      // Adicionar URLs e publicIds aos arrays existentes
      const newImageUrls = data.images.map((img: any) => img.imageUrl);
      const newPublicIds = data.images.map((img: any) => img.publicId);

      setFormData(prev => ({ 
        ...prev, 
        imageUrls: [...(prev.imageUrls || []), ...newImageUrls],
        cloudinaryPublicIds: [...(prev.cloudinaryPublicIds || []), ...newPublicIds]
      }));

    } catch (error) {
      console.error('Erro no upload:', error);
      setUploadError('Erro ao fazer upload das imagens. Tente novamente.');
    } finally {
      setIsUploading(false);
    }
  };

  // Remover uma imagem específica
  const handleRemoveImage = async (index: number) => {
    const publicIdToDelete = formData.cloudinaryPublicIds?.[index];

    if (publicIdToDelete) {
      try {
        await fetch('http://localhost:5000/api/upload/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ publicId: publicIdToDelete }),
        });
      } catch (error) {
        console.error('Erro ao deletar imagem:', error);
      }
    }

    setFormData(prev => ({
      ...prev,
      imageUrls: (prev.imageUrls || []).filter((_, i) => i !== index),
      cloudinaryPublicIds: (prev.cloudinaryPublicIds || []).filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

            {isUploading && (
              <div className="mt-2 text-sm text-blue-600">
                Enviando imagens...
              </div>
            )}

            {uploadError && (
              <div className="mt-2 text-sm text-red-600">
                {uploadError}
              </div>
            )}
          </div>

          {/* Preview das imagens já enviadas */}
          {formData.imageUrls && formData.imageUrls.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Arquivos Enviados ({formData.imageUrls.length})
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formData.imageUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    {url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                      <img
                        src={url}
                        alt={`Exame ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                      />
                    ) : (
                      <div className="w-full h-32 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">PDF</span>
                      </div>
                    )}
                    
                    {/* Botão de remover */}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={16} />
                    </button>

                    <a 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline block mt-1 truncate"
                    >
                      Ver arquivo
                    </a>
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
              disabled={isUploading}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Enviando...' : 'Salvar Exame'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}