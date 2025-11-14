import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';
import { UploadApiResponse } from 'cloudinary';

// Upload de imagem única
export const uploadSingleImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      return;
    }

    // Upload para Cloudinary usando buffer
    const uploadResult: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'centro-dentario-colombo',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        }
      );

      uploadStream.end(req.file!.buffer);
    });

    res.status(200).json({
      message: 'Imagem enviada com sucesso',
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    res.status(500).json({ error: 'Erro ao fazer upload da imagem' });
  }
};

// Upload de múltiplas imagens
export const uploadMultipleImages = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      return;
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise<{ imageUrl: string; publicId: string }>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'centro-dentario-colombo',
            resource_type: 'auto',
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve({
                imageUrl: result!.secure_url,
                publicId: result!.public_id,
              });
            }
          }
        );

        uploadStream.end(file.buffer);
      });
    });

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      message: `${results.length} imagens enviadas com sucesso`,
      images: results,
    });
  } catch (error) {
    console.error('Erro ao fazer upload das imagens:', error);
    res.status(500).json({ error: 'Erro ao fazer upload das imagens' });
  }
};

// Deletar imagem do Cloudinary
export const deleteImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { publicId } = req.body;

    if (!publicId) {
      res.status(400).json({ error: 'Public ID da imagem não fornecido' });
      return;
    }

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === 'ok') {
      res.status(200).json({
        message: 'Imagem deletada com sucesso',
        result,
      });
    } else {
      res.status(404).json({
        error: 'Imagem não encontrada ou já foi deletada',
      });
    }
  } catch (error) {
    console.error('Erro ao deletar imagem:', error);
    res.status(500).json({ error: 'Erro ao deletar imagem' });
  }
};

// Deletar múltiplas imagens do Cloudinary
export const deleteMultipleImages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { publicIds } = req.body;

    if (!publicIds || !Array.isArray(publicIds) || publicIds.length === 0) {
      res.status(400).json({ error: 'Lista de Public IDs não fornecida' });
      return;
    }

    const deletePromises = publicIds.map((publicId) =>
      cloudinary.uploader.destroy(publicId)
    );

    const results = await Promise.all(deletePromises);

    const successCount = results.filter((r) => r.result === 'ok').length;

    res.status(200).json({
      message: `${successCount} de ${publicIds.length} imagens deletadas com sucesso`,
      results,
    });
  } catch (error) {
    console.error('Erro ao deletar imagens:', error);
    res.status(500).json({ error: 'Erro ao deletar imagens' });
  }
};

// Upload de imagem de exame
export const uploadExamImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      return;
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise<{ imageUrl: string; publicId: string }>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'centro-dentario-colombo/exams',
            resource_type: 'auto',
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve({
                imageUrl: result!.secure_url,
                publicId: result!.public_id,
              });
            }
          }
        );

        uploadStream.end(file.buffer);
      });
    });

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      message: 'Imagens de exame enviadas com sucesso',
      images: results,
    });
  } catch (error) {
    console.error('Erro ao fazer upload das imagens de exame:', error);
    res.status(500).json({ error: 'Erro ao fazer upload das imagens de exame' });
  }
};

// Upload de imagem de recibo/fatura
export const uploadInvoiceReceipt = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      return;
    }

    const uploadResult: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'centro-dentario-colombo/receipts',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        }
      );

      uploadStream.end(req.file!.buffer);
    });

    res.status(200).json({
      message: 'Recibo enviado com sucesso',
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.error('Erro ao fazer upload do recibo:', error);
    res.status(500).json({ error: 'Erro ao fazer upload do recibo' });
  }
};

// Upload de foto do médico
export const uploadDoctorPhoto = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      return;
    }

    const uploadResult: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'centro-dentario-colombo/doctors',
          resource_type: 'image',
          transformation: [
            { width: 500, height: 500, crop: 'fill', gravity: 'face' },
            { quality: 'auto' },
          ],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        }
      );

      uploadStream.end(req.file!.buffer);
    });

    res.status(200).json({
      message: 'Foto do médico enviada com sucesso',
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.error('Erro ao fazer upload da foto do médico:', error);
    res.status(500).json({ error: 'Erro ao fazer upload da foto do médico' });
  }
};