import express, { Request, Response } from 'express';
import User from '../models/User'; // ← MUDOU AQUI
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

// POST /api/patients/validate-id - Validar ID do paciente
router.post('/validate-id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId } = req.body;

    if (!patientId) {
      res.status(400).json({ error: 'ID de paciente é obrigatório' });
      return;
    }

    // Buscar usuário pelo patientId
    const user = await User.findOne({ 
      patientId: patientId.trim(),
      role: 'patient' // ← Garantir que é paciente
    });

    if (!user) {
      res.json({ valid: false });
      return;
    }

    res.json({ 
      valid: true, 
      patientData: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;