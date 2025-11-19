import { useState, useMemo } from 'react';
import { X, Upload, Trash2 } from 'lucide-react';
import MaskedInput from './MaskedInput';
import Autocomplete from './Autocomplete';
import FileUpload from './FileUpload';
import type { CreateInvoiceData } from '../../types/invoice';
import type { Patient } from '../../types/patient';
import type { Treatment } from '../../types/treatment';

interface InvoiceFormProps {
  patients: Patient[];
  treatments: Treatment[];
  onClose: () => void;
  onSave: (data: CreateInvoiceData) => void;
}

export default function InvoiceForm({ patients, treatments, onClose, onSave }: InvoiceFormProps) {
  const [formData, setFormData] = useState<CreateInvoiceData>({
    patientId: '',
    treatmentId: '',
    invoiceNumber: '',
    amount: 0,
    paidAmount: 0,
    issueDate: '',
    dueDate: '',
    status: 'pending',
    description: '',
    paymentMethod: '',
    paymentDate: '',
    receiptImageUrl: '',
    notes: '',
  });

  
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');

  // Preparar opções para autocomplete
  const patientOptions = useMemo(() => 
    patients.map(p => ({
      id: p._id,
      label: `${p.firstName} ${p.lastName}`,
      secondary: p.email
    })), [patients]
  );

  // Filtrar tratamentos baseado no paciente selecionado
  const treatmentOptions = useMemo(() => {
    if (!formData.patientId) return [];
    
    const filtered = treatments.filter(t => {
      const treatmentPatientId = typeof t.patientId === 'object' ? t.patientId._id : t.patientId;
      return treatmentPatientId === formData.patientId;
    });

    return filtered.map(t => ({
      id: t._id,
      label: t.treatmentType,
      secondary: t.description
    }));
  }, [treatments, formData.patientId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePatientChange = (patientId: string) => {
    setFormData(prev => ({ 
      ...prev, 
      patientId,
      treatmentId: '' // Reset treatment when patient changes
    }));
  };

  const handleMaskedChange = (name: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Upload do recibo para o servidor
  const handleReceiptUpload = async (files: File[]) => {
    if (files.length === 0) return;

    const file = files[0];
    setIsUploading(true);
    setUploadError('');

    try {
      const formDataUpload = new FormData();
      formDataUpload.append('receipt', file);

      const response = await fetch('http://localhost:5000/api/upload/receipt', {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload do recibo');
      }

      const data = await response.json();
      
      setFormData(prev => ({ 
        ...prev, 
        receiptImageUrl: data.imageUrl,
        receiptCloudinaryPublicId: data.publicId 
      }));

    } catch (error) {
      console.error('Erro no upload:', error);
      setUploadError('Erro ao fazer upload do recibo. Tente novamente.');
    } finally {
      setIsUploading(false);
    }
  };

  // Remover recibo
  const handleRemoveReceipt = async () => {
    if (formData.receiptCloudinaryPublicId) {
      try {
        await fetch('http://localhost:5000/api/upload/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ publicId: formData.receiptCloudinaryPublicId }),
        });
      } catch (error) {
        console.error('Erro ao deletar recibo:', error);
      }
    }

    setFormData(prev => ({ 
      ...prev, 
      receiptImageUrl: '',
      receiptCloudinaryPublicId: undefined 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Nova Fatura</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Patient & Treatment com Autocomplete */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Autocomplete
              options={patientOptions}
              value={formData.patientId}
              onChange={handlePatientChange}
              label="Paciente"
              placeholder="Digite para buscar paciente..."
              required
            />

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tratamento
              </label>
              {formData.patientId ? (
                <Autocomplete
                  options={treatmentOptions}
                  value={formData.treatmentId}
                  onChange={(value) => setFormData(prev => ({ ...prev, treatmentId: value }))}
                  placeholder="Selecione um tratamento..."
                />
              ) : (
                <div className="px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  Selecione um paciente primeiro
                </div>
              )}
            </div>
          </div>

          {/* Invoice Number & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Número da Fatura *
              </label>
              <input
                type="text"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="INV-2024-001"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="pending">Pendente</option>
                <option value="partial">Pagamento Parcial</option>
                <option value="paid">Pago</option>
                <option value="overdue">Vencido</option>
                <option value="cancelled">Cancelado</option>
              </select>
            </div>
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
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Descrição dos serviços faturados..."
            />
          </div>

          {/* Amounts com MaskedInput */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Valor Total (€) *
              </label>
              <MaskedInput
                mask="currency"
                name="amount"
                value={formData.amount || 0}
                onChange={(value) => handleMaskedChange('amount', value)}
                placeholder="0,00 €"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Valor Pago (€)
              </label>
              <MaskedInput
                mask="currency"
                name="paidAmount"
                value={formData.paidAmount || 0}
                onChange={(value) => handleMaskedChange('paidAmount', value)}
                placeholder="0,00 €"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data de Emissão *
              </label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data de Vencimento
              </label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Método de Pagamento
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Selecione</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="MB Way">MB Way</option>
                <option value="Transferência Bancária">Transferência Bancária</option>
                <option value="Multibanco">Multibanco</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Data de Pagamento
              </label>
              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Upload de Recibo/Fatura */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload do Recibo/Fatura da Empresa
            </label>
            
            {!formData.receiptImageUrl ? (
              <>
                <FileUpload
                  accept="image/*,application/pdf"
                  multiple={false}
                  maxSize={10}
                  onFilesSelected={handleReceiptUpload}
                />
                <p className="text-xs text-gray-500 mt-2">
                  Faça upload da fatura gerada pelo sistema da empresa (PDF, JPG ou PNG). Máximo 10MB.
                </p>
              </>
            ) : (
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Upload className="text-green-500" size={24} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Recibo enviado com sucesso
                      </p>
                      <a 
                        href={formData.receiptImageUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Ver arquivo
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveReceipt}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Preview se for imagem */}
                {formData.receiptImageUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i) && (
                  <div className="mt-3">
                    <img
                      src={formData.receiptImageUrl}
                      alt="Preview do recibo"
                      className="max-w-xs rounded-lg border-2 border-gray-200"
                    />
                  </div>
                )}
              </div>
            )}

            {isUploading && (
              <div className="mt-2 text-sm text-blue-600">
                Enviando arquivo...
              </div>
            )}

            {uploadError && (
              <div className="mt-2 text-sm text-red-600">
                {uploadError}
              </div>
            )}
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
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Observações adicionais..."
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
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Enviando...' : 'Criar Fatura'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}