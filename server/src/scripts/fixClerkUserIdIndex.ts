import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function fixClerkUserIdIndex() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('✅ Conectado ao MongoDB');

    const db = mongoose.connection.db;
    
    if (!db) {
      throw new Error('Database connection not established');
    }

    const usersCollection = db.collection('users');

    // 1. Dropar índice antigo
    try {
      await usersCollection.dropIndex('clerkUserId_1');
      console.log('✅ Índice antigo removido');
    } catch (error) {
      console.log('⚠️ Índice não existia ou já foi removido');
    }

    // 2. Criar novo índice com sparse: true
    await usersCollection.createIndex(
      { clerkUserId: 1 },
      { unique: true, sparse: true }
    );
    console.log('✅ Novo índice criado com sparse: true');

    console.log('🎉 Índice corrigido com sucesso!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

fixClerkUserIdIndex();