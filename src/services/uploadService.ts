import api from './api';

interface UploadResponse {
  imageUrl: string;
  publicId: string;
}

interface MultipleUploadResponse {
  images: UploadResponse[];
}

export const uploadService = {
  // Upload de imagem única
  uploadSingle: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post('/upload/single', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      imageUrl: response.data.imageUrl,
      publicId: response.data.publicId,
    };
  },

  // Upload de múltiplas imagens
  uploadMultiple: async (files: File[]): Promise<MultipleUploadResponse> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    const response = await api.post('/upload/multiple', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // Upload de imagens de exame
  uploadExamImages: async (files: File[]): Promise<MultipleUploadResponse> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    const response = await api.post('/upload/exam', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // Upload de recibo
  uploadReceipt: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('receipt', file);

    const response = await api.post('/upload/receipt', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      imageUrl: response.data.imageUrl,
      publicId: response.data.publicId,
    };
  },

  // Upload de foto de médico
  uploadDoctorPhoto: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('photo', file);

    const response = await api.post('/upload/doctor-photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      imageUrl: response.data.imageUrl,
      publicId: response.data.publicId,
    };
  },

  // Deletar imagem
  deleteImage: async (publicId: string): Promise<void> => {
    await api.delete('/upload/delete', {
      data: { publicId },
    });
  },

  // Deletar múltiplas imagens
  deleteMultipleImages: async (publicIds: string[]): Promise<void> => {
    await api.delete('/upload/delete-multiple', {
      data: { publicIds },
    });
  },
};