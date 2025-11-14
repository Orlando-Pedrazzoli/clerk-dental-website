import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/clerk', async (req, res) => {
  try {
    const { type, data } = req.body;

    console.log('📥 Webhook recebido:', type);

    if (type === 'user.created') {
      // Verificar se é o primeiro usuário
      const userCount = await User.countDocuments();
      
      const role = userCount === 0 ? 'admin' : 'patient';
      
      const newUser = await User.create({
        clerkUserId: data.id,
        email: data.email_addresses[0].email_address,
        firstName: data.first_name || '',
        lastName: data.last_name || '',
        role: role,
      });

      console.log(`✅ Usuário criado automaticamente como ${role.toUpperCase()}:`, newUser.email);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    res.status(500).json({ error: 'Webhook failed' });
  }
});

export default router;