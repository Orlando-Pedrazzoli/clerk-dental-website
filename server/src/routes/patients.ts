import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from '../controllers/patientController';
import { verifyPatientToken } from '../middleware/patientAuth';

const router = express.Router();

// ===== ROTAS PÚBLICAS =====

// POST /api/patients/login - Login do paciente com email + patientId
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, patientId } = req.body;
    
    if (!email || !patientId) {
      res.status(400).json({ error: 'Email e ID do paciente são obrigatórios' });
      return;
    }
    
    // Buscar paciente pelo email E patientId
    const patient = await User.findOne({ 
      email: email.toLowerCase().trim(),
      patientId: patientId.trim().toUpperCase(),
      role: 'patient'
    });
    
    if (!patient) {
      res.status(401).json({ error: 'Email ou ID do paciente inválidos' });
      return;
    }
    
    // Gerar token JWT
    const token = jwt.sign(
      { 
        id: patient._id,
        patientId: patient.patientId,
        email: patient.email,
        firstName: patient.firstName,
        lastName: patient.lastName,
        role: patient.role
      },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );
    
    res.json({ 
      success: true,
      token,
      patient: {
        id: patient._id,
        patientId: patient.patientId,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        phone: patient.phone,
        dateOfBirth: patient.dateOfBirth,
        address: patient.address,
      }
    });
  } catch (error: any) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

// POST /api/patients/validate - Validar token do paciente
router.post('/validate', verifyPatientToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const patient = await User.findOne({ 
      patientId: req.patientId,
      role: 'patient'
    });
    
    if (!patient) {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }
    
    res.json({ 
      valid: true,
      patient: {
        id: patient._id,
        patientId: patient.patientId,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        phone: patient.phone,
        dateOfBirth: patient.dateOfBirth,
        address: patient.address,
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Erro ao validar token' });
  }
});

// ===== ROTAS PROTEGIDAS (PACIENTE AUTENTICADO) =====

// GET /api/patients/me - Obter dados do paciente autenticado
router.get('/me', verifyPatientToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const patient = await User.findOne({ 
      patientId: req.patientId,
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

// ===== ROTAS ADMINISTRATIVAS (SEM AUTH POR ENQUANTO) =====

router.post('/', createPatient);
router.get('/', getAllPatients);

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

// Rotas com parâmetros
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;