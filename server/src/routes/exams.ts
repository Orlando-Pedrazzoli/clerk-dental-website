import express from 'express';
import {
  createExam,
  getAllExams,
  getExamsByPatient,
  getExamById,
  updateExam,
  deleteExam,
} from '../controllers/examController';

const router = express.Router();

// Rotas públicas
router.post('/', createExam);
router.get('/', getAllExams);
router.get('/patient/:patientId', getExamsByPatient);
router.get('/:id', getExamById);
router.put('/:id', updateExam);
router.delete('/:id', deleteExam);

export default router;