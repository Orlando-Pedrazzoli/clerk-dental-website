import { Request, Response } from 'express';
import Invoice from '../models/Invoice';
import mongoose from 'mongoose';

// Criar nova fatura
export const createInvoice = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      patientId,
      treatmentId,
      invoiceNumber,
      issueDate,
      dueDate,
      amount,
      paidAmount,
      status,
      description,
      receiptImageUrl,
      receiptCloudinaryPublicId,
      paymentDate,
      paymentMethod,
      notes,
    } = req.body;

    // Verificar se número da fatura já existe
    const existingInvoice = await Invoice.findOne({ invoiceNumber });
    if (existingInvoice) {
      res.status(400).json({ error: 'Número de fatura já existe' });
      return;
    }

    const invoice = new Invoice({
      patientId,
      treatmentId,
      invoiceNumber,
      issueDate,
      dueDate,
      amount,
      paidAmount: paidAmount || 0,
      status,
      description,
      receiptImageUrl,
      receiptCloudinaryPublicId,
      paymentDate,
      paymentMethod,
      notes,
    });

    await invoice.save();

    await invoice.populate('patientId', 'firstName lastName email');
    if (treatmentId) {
      await invoice.populate('treatmentId', 'treatmentType description');
    }

    res.status(201).json({
      message: 'Fatura criada com sucesso',
      invoice,
    });
  } catch (error) {
    console.error('Erro ao criar fatura:', error);
    res.status(500).json({ error: 'Erro ao criar fatura' });
  }
};

// Listar todas as faturas
export const getAllInvoices = async (req: Request, res: Response): Promise<void> => {
  try {
    const invoices = await Invoice.find()
      .populate('patientId', 'firstName lastName email')
      .populate('treatmentId', 'treatmentType description')
      .sort({ issueDate: -1 });

    res.status(200).json({
      total: invoices.length,
      invoices,
    });
  } catch (error) {
    console.error('Erro ao listar faturas:', error);
    res.status(500).json({ error: 'Erro ao listar faturas' });
  }
};

// Buscar faturas por paciente
export const getInvoicesByPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { patientId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      res.status(400).json({ error: 'ID do paciente inválido' });
      return;
    }

    const invoices = await Invoice.find({ patientId })
      .populate('treatmentId', 'treatmentType description')
      .sort({ issueDate: -1 });

    res.status(200).json({
      total: invoices.length,
      invoices,
    });
  } catch (error) {
    console.error('Erro ao buscar faturas do paciente:', error);
    res.status(500).json({ error: 'Erro ao buscar faturas do paciente' });
  }
};

// Buscar fatura por ID
export const getInvoiceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const invoice = await Invoice.findById(id)
      .populate('patientId', 'firstName lastName email phone')
      .populate('treatmentId', 'treatmentType description doctorId');

    if (!invoice) {
      res.status(404).json({ error: 'Fatura não encontrada' });
      return;
    }

    res.status(200).json(invoice);
  } catch (error) {
    console.error('Erro ao buscar fatura:', error);
    res.status(500).json({ error: 'Erro ao buscar fatura' });
  }
};

// Atualizar fatura
export const updateInvoice = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const invoice = await Invoice.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .populate('patientId', 'firstName lastName email')
      .populate('treatmentId', 'treatmentType description');

    if (!invoice) {
      res.status(404).json({ error: 'Fatura não encontrada' });
      return;
    }

    res.status(200).json({
      message: 'Fatura atualizada com sucesso',
      invoice,
    });
  } catch (error) {
    console.error('Erro ao atualizar fatura:', error);
    res.status(500).json({ error: 'Erro ao atualizar fatura' });
  }
};

// Deletar fatura
export const deleteInvoice = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const invoice = await Invoice.findByIdAndDelete(id);

    if (!invoice) {
      res.status(404).json({ error: 'Fatura não encontrada' });
      return;
    }

    res.status(200).json({
      message: 'Fatura deletada com sucesso',
    });
  } catch (error) {
    console.error('Erro ao deletar fatura:', error);
    res.status(500).json({ error: 'Erro ao deletar fatura' });
  }
};

// Atualizar status de pagamento
export const updatePaymentStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { paidAmount, status, paymentDate, paymentMethod, receiptImageUrl, receiptCloudinaryPublicId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const invoice = await Invoice.findById(id);

    if (!invoice) {
      res.status(404).json({ error: 'Fatura não encontrada' });
      return;
    }

    // Atualizar campos de pagamento
    if (paidAmount !== undefined) invoice.paidAmount = paidAmount;
    if (status) invoice.status = status;
    if (paymentDate) invoice.paymentDate = paymentDate;
    if (paymentMethod) invoice.paymentMethod = paymentMethod;
    if (receiptImageUrl) invoice.receiptImageUrl = receiptImageUrl;
    if (receiptCloudinaryPublicId) invoice.receiptCloudinaryPublicId = receiptCloudinaryPublicId;

    await invoice.save();

    await invoice.populate('patientId', 'firstName lastName email');
    await invoice.populate('treatmentId', 'treatmentType description');

    res.status(200).json({
      message: 'Status de pagamento atualizado com sucesso',
      invoice,
    });
  } catch (error) {
    console.error('Erro ao atualizar status de pagamento:', error);
    res.status(500).json({ error: 'Erro ao atualizar status de pagamento' });
  }
};