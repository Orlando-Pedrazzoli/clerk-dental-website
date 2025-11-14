import { Request, Response, NextFunction } from 'express';

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Verificar se o usuário está autenticado
    if (!req.userId) {
      res.status(401).json({ 
        error: 'Usuário não autenticado' 
      });
      return;
    }

    // Verificar se o usuário é admin
    if (req.userRole !== 'admin') {
      res.status(403).json({ 
        error: 'Acesso negado. Apenas administradores podem acessar este recurso.' 
      });
      return;
    }

    next();
  } catch (error) {
    console.error('Erro na verificação de admin:', error);
    res.status(500).json({ 
      error: 'Erro ao verificar permissões' 
    });
  }
};