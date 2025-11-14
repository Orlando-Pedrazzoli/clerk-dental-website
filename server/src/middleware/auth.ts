import { Request, Response, NextFunction } from 'express';
import { clerkClient } from '@clerk/express';

// Estender a interface Request para incluir userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userRole?: string;
    }
  }
}

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Pegar o token do header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ 
        error: 'Token de autenticação não fornecido' 
      });
      return;
    }

    const token = authHeader.split(' ')[1];

    // Verificar token com Clerk
    const session = await clerkClient.sessions.verifySession(token);

    if (!session) {
      res.status(401).json({ 
        error: 'Token inválido ou expirado' 
      });
      return;
    }

    // Buscar informações do usuário
    const user = await clerkClient.users.getUser(session.userId);

    // Adicionar userId e role ao request
    req.userId = user.id;
    req.userRole = user.publicMetadata?.role as string || 'patient';

    next();
  } catch (error) {
    console.error('Erro na autenticação:', error);
    res.status(401).json({ 
      error: 'Falha na autenticação' 
    });
  }
};