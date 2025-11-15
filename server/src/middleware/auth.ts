import { Request, Response, NextFunction } from 'express';
import { clerkClient } from '@clerk/express';

// Estender Request para incluir userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userRole?: string;
    }
  }
}

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ error: 'Token não fornecido' });
      return;
    }

    // Verificar token do Clerk
    const session = await clerkClient.sessions.verifySession(token, token);

    if (!session) {
      res.status(401).json({ error: 'Token inválido' });
      return;
    }

    // Adicionar userId ao request
    req.userId = session.userId;

    // Buscar role do usuário (se tiver no metadata)
    const user = await clerkClient.users.getUser(session.userId);
    req.userRole = user.publicMetadata?.role as string;

    next();
  } catch (error) {
    console.error('Erro na autenticação:', error);
    res.status(401).json({ error: 'Não autorizado' });
  }
};

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.userRole || !roles.includes(req.userRole)) {
      res.status(403).json({ error: 'Acesso negado' });
      return;
    }
    next();
  };
};