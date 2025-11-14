import express from 'express';
import { upload } from '../utils/uploadToCloudinary';
import {
  uploadSingleImage,
  uploadMultipleImages,
  deleteImage,
  deleteMultipleImages,
  uploadExamImage,
  uploadInvoiceReceipt,
  uploadDoctorPhoto,
} from '../controllers/uploadController';

const router = express.Router();

// Upload de imagem única
router.post('/single', upload.single('image'), uploadSingleImage);

// Upload de múltiplas imagens
router.post('/multiple', upload.array('images', 10), uploadMultipleImages);

// Upload específico para exames
router.post('/exam', upload.array('images', 10), uploadExamImage);

// Upload específico para recibo/fatura
router.post('/receipt', upload.single('receipt'), uploadInvoiceReceipt);

// Upload específico para foto de médico
router.post('/doctor-photo', upload.single('photo'), uploadDoctorPhoto);

// Deletar imagem
router.delete('/delete', deleteImage);

// Deletar múltiplas imagens
router.delete('/delete-multiple', deleteMultipleImages);

export default router;