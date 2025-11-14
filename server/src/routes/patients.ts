import express from 'express';
import {
  createPatient,
  getAllPatients,
  getPatientById,
  getPatientByClerkId,
  updatePatient,
  deletePatient,
} from '../controllers/patientController';

const router = express.Router();

// Rotas públicas (sem autenticação por enquanto)
router.post('/', createPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.get('/clerk/:clerkUserId', getPatientByClerkId);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;