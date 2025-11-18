import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Estender Request para incluir patientData
declare global {
  namespace Express {
    interface Request {
      patientId?: string;
      patientData?: any;
    }
  }
}

export const verifyPatientToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      res.status(401).json({ error: 'Token não fornecido' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    
    req.patientId = decoded.patientId;
    req.patientData = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};