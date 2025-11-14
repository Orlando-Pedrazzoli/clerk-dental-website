import express from 'express';
import {
  createInvoice,
  getAllInvoices,
  getInvoicesByPatient,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
  updatePaymentStatus,
} from '../controllers/invoiceController';

const router = express.Router();

// Rotas públicas
router.post('/', createInvoice);
router.get('/', getAllInvoices);
router.get('/patient/:patientId', getInvoicesByPatient);
router.get('/:id', getInvoiceById);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);
router.patch('/:id/payment', updatePaymentStatus);

export default router;