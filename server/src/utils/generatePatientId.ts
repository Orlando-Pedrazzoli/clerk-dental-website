import Counter from '../models/Counter';

export async function generateUniquePatientId(): Promise<string> {
  try {
    // Incrementar contador atomicamente
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'patientId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const year = new Date().getFullYear();
    const sequenceNumber = counter.seq.toString().padStart(4, '0');
    
    return `CDC-${year}-${sequenceNumber}`;
  } catch (error) {
    console.error('Erro ao gerar Patient ID:', error);
    throw new Error('Erro ao gerar ID do paciente');
  }
}