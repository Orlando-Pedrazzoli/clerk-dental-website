import express from 'express';
import {
  createDoctor,
  getAllDoctors,
  getActiveDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  toggleDoctorStatus,
} from '../controllers/doctorController';

const router = express.Router();

// Rotas públicas
router.post('/', createDoctor);
router.get('/', getAllDoctors);
router.get('/active', getActiveDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);
router.patch('/:id/toggle-status', toggleDoctorStatus);

export default router;