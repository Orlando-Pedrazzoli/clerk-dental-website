import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// POST /api/auth/admin-login
router.post('/admin-login', (req: Request, res: Response): void => {
  try {
    const { username, password } = req.body;

    // Validar credenciais
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Gerar token JWT
      const token = jwt.sign(
        { role: 'admin', username },
        process.env.JWT_SECRET as string,
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        token,
        user: { username, role: 'admin' },
      });
      return;
    }

    res.status(401).json({
      success: false,
      error: 'Credenciais inválidas',
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;