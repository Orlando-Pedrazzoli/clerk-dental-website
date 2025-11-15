import express, { Request, Response } from 'express';
import User from '../models/User';
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

// ⚠️ ROTAS ESPECÍFICAS VÊM ANTES DAS ROTAS COM PARÂMETROS
// GET /api/patients/by-patient-id/:patientId - Buscar por Patient ID
router.get('/by-patient-id/:patientId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId } = req.params;

    const patient = await User.findOne({ 
      patientId: patientId.trim().toUpperCase(),
      role: 'patient' 
    });

    if (!patient) {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    res.json(patient);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

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
      patientId: patientId.trim().toUpperCase(),
      role: 'patient'
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

// POST /api/patients/link-clerk - Vincular conta Clerk ao Patient ID
router.post('/link-clerk', async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId, clerkUserId, email } = req.body;

    if (!patientId || !clerkUserId) {
      res.status(400).json({ error: 'Patient ID e Clerk User ID são obrigatórios' });
      return;
    }

    // Buscar paciente pelo patientId
    const patient = await User.findOne({ 
      patientId: patientId.trim().toUpperCase(),
      role: 'patient'
    });

    if (!patient) {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    // Verificar se já está vinculado a outro Clerk User
    if (patient.clerkUserId && patient.clerkUserId !== clerkUserId) {
      res.status(400).json({ error: 'Este paciente já está vinculado a outra conta' });
      return;
    }

    // Vincular Clerk User ID
    patient.clerkUserId = clerkUserId;
    if (email && !patient.email) {
      patient.email = email;
    }
    await patient.save();

    res.json({ 
      success: true,
      message: 'Conta vinculada com sucesso',
      patient: {
        id: patient._id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        patientId: patient.patientId,
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ROTAS COM PARÂMETROS VÊM POR ÚLTIMO
router.get('/clerk/:clerkUserId', getPatientByClerkId);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;