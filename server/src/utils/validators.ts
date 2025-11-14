import { body, param, ValidationChain } from 'express-validator';

// ========================
// VALIDATORS - PATIENT
// ========================

export const validateCreatePatient: ValidationChain[] = [
  body('clerkUserId')
    .notEmpty()
    .withMessage('Clerk User ID é obrigatório')
    .isString()
    .withMessage('Clerk User ID deve ser uma string'),
  
  body('email')
    .notEmpty()
    .withMessage('Email é obrigatório')
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),
  
  body('firstName')
    .notEmpty()
    .withMessage('Nome é obrigatório')
    .isString()
    .withMessage('Nome deve ser uma string')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Nome deve ter entre 2 e 50 caracteres'),
  
  body('lastName')
    .notEmpty()
    .withMessage('Sobrenome é obrigatório')
    .isString()
    .withMessage('Sobrenome deve ser uma string')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Sobrenome deve ter entre 2 e 50 caracteres'),
  
  body('phone')
    .optional()
    .isString()
    .withMessage('Telefone deve ser uma string')
    .trim(),
  
  body('dateOfBirth')
    .optional()
    .isISO8601()
    .withMessage('Data de nascimento inválida'),
  
  body('nif')
    .optional()
    .isString()
    .withMessage('NIF deve ser uma string')
    .trim(),
];

export const validateUpdatePatient: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID do paciente inválido'),
  
  body('email')
    .optional()
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),
  
  body('firstName')
    .optional()
    .isString()
    .withMessage('Nome deve ser uma string')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Nome deve ter entre 2 e 50 caracteres'),
  
  body('lastName')
    .optional()
    .isString()
    .withMessage('Sobrenome deve ser uma string')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Sobrenome deve ter entre 2 e 50 caracteres'),
];

// ========================
// VALIDATORS - DOCTOR
// ========================

export const validateCreateDoctor: ValidationChain[] = [
  body('name')
    .notEmpty()
    .withMessage('Nome do médico é obrigatório')
    .isString()
    .withMessage('Nome deve ser uma string')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres'),
  
  body('specialty')
    .notEmpty()
    .withMessage('Especialidade é obrigatória')
    .isString()
    .withMessage('Especialidade deve ser uma string')
    .trim(),
  
  body('licenseNumber')
    .notEmpty()
    .withMessage('Número de licença é obrigatório')
    .isString()
    .withMessage('Número de licença deve ser uma string')
    .trim(),
  
  body('email')
    .optional()
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .isString()
    .withMessage('Telefone deve ser uma string')
    .trim(),
];

export const validateUpdateDoctor: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID do médico inválido'),
  
  body('name')
    .optional()
    .isString()
    .withMessage('Nome deve ser uma string')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres'),
  
  body('specialty')
    .optional()
    .isString()
    .withMessage('Especialidade deve ser uma string')
    .trim(),
  
  body('email')
    .optional()
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),
];

// ========================
// VALIDATORS - TREATMENT
// ========================

export const validateCreateTreatment: ValidationChain[] = [
  body('patientId')
    .notEmpty()
    .withMessage('ID do paciente é obrigatório')
    .isMongoId()
    .withMessage('ID do paciente inválido'),
  
  body('doctorId')
    .notEmpty()
    .withMessage('ID do médico é obrigatório')
    .isMongoId()
    .withMessage('ID do médico inválido'),
  
  body('treatmentType')
    .notEmpty()
    .withMessage('Tipo de tratamento é obrigatório')
    .isString()
    .withMessage('Tipo de tratamento deve ser uma string')
    .trim(),
  
  body('description')
    .notEmpty()
    .withMessage('Descrição é obrigatória')
    .isString()
    .withMessage('Descrição deve ser uma string')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['scheduled', 'in_progress', 'completed', 'cancelled'])
    .withMessage('Status inválido'),
  
  body('startDate')
    .notEmpty()
    .withMessage('Data de início é obrigatória')
    .isISO8601()
    .withMessage('Data de início inválida'),
  
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('Data de término inválida'),
  
  body('cost')
    .optional()
    .isNumeric()
    .withMessage('Custo deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Custo deve ser maior ou igual a 0'),
];

export const validateUpdateTreatment: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID do tratamento inválido'),
  
  body('status')
    .optional()
    .isIn(['scheduled', 'in_progress', 'completed', 'cancelled'])
    .withMessage('Status inválido'),
  
  body('cost')
    .optional()
    .isNumeric()
    .withMessage('Custo deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Custo deve ser maior ou igual a 0'),
];

// ========================
// VALIDATORS - EXAM
// ========================

export const validateCreateExam: ValidationChain[] = [
  body('patientId')
    .notEmpty()
    .withMessage('ID do paciente é obrigatório')
    .isMongoId()
    .withMessage('ID do paciente inválido'),
  
  body('doctorId')
    .notEmpty()
    .withMessage('ID do médico é obrigatório')
    .isMongoId()
    .withMessage('ID do médico inválido'),
  
  body('treatmentId')
    .optional()
    .isMongoId()
    .withMessage('ID do tratamento inválido'),
  
  body('examType')
    .notEmpty()
    .withMessage('Tipo de exame é obrigatório')
    .isString()
    .withMessage('Tipo de exame deve ser uma string')
    .trim(),
  
  body('examDate')
    .notEmpty()
    .withMessage('Data do exame é obrigatória')
    .isISO8601()
    .withMessage('Data do exame inválida'),
  
  body('imageUrls')
    .optional()
    .isArray()
    .withMessage('URLs das imagens devem ser um array'),
  
  body('cloudinaryPublicIds')
    .optional()
    .isArray()
    .withMessage('IDs públicos devem ser um array'),
];

export const validateUpdateExam: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID do exame inválido'),
  
  body('examType')
    .optional()
    .isString()
    .withMessage('Tipo de exame deve ser uma string')
    .trim(),
  
  body('examDate')
    .optional()
    .isISO8601()
    .withMessage('Data do exame inválida'),
];

// ========================
// VALIDATORS - INVOICE
// ========================

export const validateCreateInvoice: ValidationChain[] = [
  body('patientId')
    .notEmpty()
    .withMessage('ID do paciente é obrigatório')
    .isMongoId()
    .withMessage('ID do paciente inválido'),
  
  body('treatmentId')
    .optional()
    .isMongoId()
    .withMessage('ID do tratamento inválido'),
  
  body('invoiceNumber')
    .notEmpty()
    .withMessage('Número da fatura é obrigatório')
    .isString()
    .withMessage('Número da fatura deve ser uma string')
    .trim(),
  
  body('issueDate')
    .notEmpty()
    .withMessage('Data de emissão é obrigatória')
    .isISO8601()
    .withMessage('Data de emissão inválida'),
  
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Data de vencimento inválida'),
  
  body('amount')
    .notEmpty()
    .withMessage('Valor é obrigatório')
    .isNumeric()
    .withMessage('Valor deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Valor deve ser maior ou igual a 0'),
  
  body('paidAmount')
    .optional()
    .isNumeric()
    .withMessage('Valor pago deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Valor pago deve ser maior ou igual a 0'),
  
  body('status')
    .optional()
    .isIn(['pending', 'partial', 'paid', 'overdue', 'cancelled'])
    .withMessage('Status inválido'),
  
  body('description')
    .notEmpty()
    .withMessage('Descrição é obrigatória')
    .isString()
    .withMessage('Descrição deve ser uma string')
    .trim(),
];

export const validateUpdateInvoice: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID da fatura inválido'),
  
  body('status')
    .optional()
    .isIn(['pending', 'partial', 'paid', 'overdue', 'cancelled'])
    .withMessage('Status inválido'),
  
  body('amount')
    .optional()
    .isNumeric()
    .withMessage('Valor deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Valor deve ser maior ou igual a 0'),
  
  body('paidAmount')
    .optional()
    .isNumeric()
    .withMessage('Valor pago deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Valor pago deve ser maior ou igual a 0'),
];

export const validatePaymentStatus: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID da fatura inválido'),
  
  body('paidAmount')
    .notEmpty()
    .withMessage('Valor pago é obrigatório')
    .isNumeric()
    .withMessage('Valor pago deve ser um número')
    .isFloat({ min: 0 })
    .withMessage('Valor pago deve ser maior ou igual a 0'),
  
  body('status')
    .notEmpty()
    .withMessage('Status é obrigatório')
    .isIn(['pending', 'partial', 'paid', 'overdue', 'cancelled'])
    .withMessage('Status inválido'),
  
  body('paymentDate')
    .optional()
    .isISO8601()
    .withMessage('Data de pagamento inválida'),
];

// ========================
// VALIDATORS - UPLOAD
// ========================

export const validateDeleteImage: ValidationChain[] = [
  body('publicId')
    .notEmpty()
    .withMessage('Public ID da imagem é obrigatório')
    .isString()
    .withMessage('Public ID deve ser uma string'),
];

export const validateDeleteMultipleImages: ValidationChain[] = [
  body('publicIds')
    .notEmpty()
    .withMessage('Lista de Public IDs é obrigatória')
    .isArray()
    .withMessage('Public IDs devem ser um array')
    .isArray({ min: 1 })
    .withMessage('Pelo menos um Public ID deve ser fornecido'),
];

// ========================
// VALIDATORS - COMMON
// ========================

export const validateMongoId: ValidationChain[] = [
  param('id')
    .isMongoId()
    .withMessage('ID inválido'),
];

export const validateClerkUserId: ValidationChain[] = [
  param('clerkUserId')
    .notEmpty()
    .withMessage('Clerk User ID é obrigatório')
    .isString()
    .withMessage('Clerk User ID deve ser uma string'),
];