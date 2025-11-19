import { useState, useRef } from 'react';
import type { DragEvent } from 'react';
import { Upload, X, FileText, Image as ImageIcon, File } from 'lucide-react';

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // em MB
  onFilesSelected: (files: File[]) => void;
  className?: string;
}

export default function FileUpload({
  accept = '*',
  multiple = false,
  maxSize = 10,
  onFilesSelected,
  className = ''
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = (selectedFiles: File[]) => {
    const validFiles: File[] = [];
    const newErrors: string[] = [];

    selectedFiles.forEach(file => {
      // Verificar tamanho
      if (file.size > maxSize * 1024 * 1024) {
        newErrors.push(`${file.name} excede o tamanho máximo de ${maxSize}MB`);
        return;
      }

      // Verificar tipo se especificado
      if (accept !== '*' && !file.type.match(accept.replace('*', '.*'))) {
        newErrors.push(`${file.name} não é um tipo de arquivo permitido`);
        return;
      }

      validFiles.push(file);
    });

    setErrors(newErrors);

    if (!multiple && validFiles.length > 0) {
      setFiles([validFiles[0]]);
      onFilesSelected([validFiles[0]]);
    } else {
      setFiles(prev => [...prev, ...validFiles]);
      onFilesSelected([...files, ...validFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFilesSelected(newFiles);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <ImageIcon size={20} />;
    if (file.type.includes('pdf')) return <FileText size={20} className="text-red-500" />;
    return <File size={20} />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={className}>
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all
          ${isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }
        `}
      >
        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
        
        <p className="text-lg font-medium text-gray-700 mb-2">
          {isDragging ? 'Solte os arquivos aqui' : 'Arraste arquivos ou clique para selecionar'}
        </p>
        
        <p className="text-sm text-gray-500">
          {accept === '*' ? 'Todos os tipos de arquivo' : `Apenas ${accept}`}
          {' • '}
          Máximo {maxSize}MB por arquivo
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Erros */}
      {errors.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          {errors.map((error, index) => (
            <p key={index} className="text-sm text-red-600">{error}</p>
          ))}
        </div>
      )}

      {/* Arquivos selecionados */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-semibold text-gray-700">Arquivos selecionados:</p>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                {getFileIcon(file)}
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="text-red-500 hover:text-red-700"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}