import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

// Importar rotas
import patientRoutes from './routes/patients';
import doctorRoutes from './routes/doctors';
import treatmentRoutes from './routes/treatments';
import examRoutes from './routes/exams';
import invoiceRoutes from './routes/invoices';
import uploadRoutes from './routes/upload';

// Carregar variáveis de ambiente
dotenv.config();

// Criar app Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'Centro Dentário Colombo API está funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Rotas da API
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/treatments', treatmentRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/upload', uploadRoutes);

// Rota 404 - CORRIGIDA PARA EXPRESS 5
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    error: 'Rota não encontrada',
    path: req.originalUrl,
    method: req.method
  });
});

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('❌ Erro:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor',
  });
});

// Conectar ao banco de dados e iniciar servidor
const startServer = async () => {
  try {
    await connectDatabase();
    
    app.listen(PORT, () => {
      console.log(`\n🚀 Servidor rodando na porta ${PORT}`);
      console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
      console.log(`\n📚 Rotas disponíveis:`);
      console.log(`\n   🏥 HEALTH:`);
      console.log(`   GET    /api/health`);
      console.log(`\n   👤 PATIENTS:`);
      console.log(`   POST   /api/patients`);
      console.log(`   GET    /api/patients`);
      console.log(`   GET    /api/patients/:id`);
      console.log(`   GET    /api/patients/clerk/:clerkUserId`);
      console.log(`   PUT    /api/patients/:id`);
      console.log(`   DELETE /api/patients/:id`);
      console.log(`\n   👨‍⚕️ DOCTORS:`);
      console.log(`   POST   /api/doctors`);
      console.log(`   GET    /api/doctors`);
      console.log(`   GET    /api/doctors/active`);
      console.log(`   GET    /api/doctors/:id`);
      console.log(`   PUT    /api/doctors/:id`);
      console.log(`   DELETE /api/doctors/:id`);
      console.log(`   PATCH  /api/doctors/:id/toggle-status`);
      console.log(`\n   💊 TREATMENTS:`);
      console.log(`   POST   /api/treatments`);
      console.log(`   GET    /api/treatments`);
      console.log(`   GET    /api/treatments/patient/:patientId`);
      console.log(`   GET    /api/treatments/:id`);
      console.log(`   PUT    /api/treatments/:id`);
      console.log(`   DELETE /api/treatments/:id`);
      console.log(`\n   🔬 EXAMS:`);
      console.log(`   POST   /api/exams`);
      console.log(`   GET    /api/exams`);
      console.log(`   GET    /api/exams/patient/:patientId`);
      console.log(`   GET    /api/exams/:id`);
      console.log(`   PUT    /api/exams/:id`);
      console.log(`   DELETE /api/exams/:id`);
      console.log(`\n   💰 INVOICES:`);
      console.log(`   POST   /api/invoices`);
      console.log(`   GET    /api/invoices`);
      console.log(`   GET    /api/invoices/patient/:patientId`);
      console.log(`   GET    /api/invoices/:id`);
      console.log(`   PUT    /api/invoices/:id`);
      console.log(`   DELETE /api/invoices/:id`);
      console.log(`   PATCH  /api/invoices/:id/payment`);
      console.log(`\n   📤 UPLOAD:`);
      console.log(`   POST   /api/upload/single`);
      console.log(`   POST   /api/upload/multiple`);
      console.log(`   POST   /api/upload/exam`);
      console.log(`   POST   /api/upload/receipt`);
      console.log(`   POST   /api/upload/doctor-photo`);
      console.log(`   DELETE /api/upload/delete`);
      console.log(`   DELETE /api/upload/delete-multiple`);
      console.log(`\n✅ Servidor pronto para receber requisições!\n`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();