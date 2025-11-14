import express from 'express';
import {
  createTreatment,
  getAllTreatments,
  getTreatmentsByPatient,
  getTreatmentById,
  updateTreatment,
  deleteTreatment,
} from '../controllers/treatmentController';

const router = express.Router();

// Rotas públicas
router.post('/', createTreatment);
router.get('/', getAllTreatments);
router.get('/patient/:patientId', getTreatmentsByPatient);
router.get('/:id', getTreatmentById);
router.put('/:id', updateTreatment);
router.delete('/:id', deleteTreatment);

export default router;