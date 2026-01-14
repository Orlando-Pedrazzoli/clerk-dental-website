// Status de tratamento
export const TREATMENT_STATUS = {
  SCHEDULED: 'scheduled',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const TREATMENT_STATUS_LABELS = {
  scheduled: 'Agendado',
  in_progress: 'Em Progresso',
  completed: 'Concluído',
  cancelled: 'Cancelado',
} as const;

export const TREATMENT_STATUS_COLORS = {
  scheduled: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
} as const;

// Status de fatura
export const INVOICE_STATUS = {
  PENDING: 'pending',
  PARTIAL: 'partial',
  PAID: 'paid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
} as const;

export const INVOICE_STATUS_LABELS = {
  pending: 'Pendente',
  partial: 'Parcial',
  paid: 'Pago',
  overdue: 'Vencido',
  cancelled: 'Cancelado',
} as const;

export const INVOICE_STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-800',
  partial: 'bg-blue-100 text-blue-800',
  paid: 'bg-green-100 text-green-800',
  overdue: 'bg-red-100 text-red-800',
  cancelled: 'bg-gray-100 text-gray-800',
} as const;

// Tipos de exames comuns
export const EXAM_TYPES = [
  'Raio-X Panorâmico',
  'Raio-X Periapical',
  'Tomografia Computorizada (TAC)',
  'Fotografias Intraorais',
  'Modelo de Estudo',
  'Análise de Mordida',
  'Outro',
] as const;

// Tipos de tratamentos comuns
export const TREATMENT_TYPES = [
  'Implante Dentário',
  'Branqueamento Dentário',
  'Limpeza Dentária',
  'Alinhamento Invisível',
  'Extração Dentária',
  'Canal Radicular',
  'Coroa Dentária',
  'Ponte Dentária',
  'Prótese Dentária',
  'Periodontia',
  'Odontopediatria',
  'Check-up Dentário',
  'Outro',
] as const;

// Especialidades médicas
export const SPECIALTIES = [
  'Implantologia',
  'Ortodontia',
  'Periodontia',
  'Endodontia',
  'Prostodontia',
  'Cirurgia Oral',
  'Odontopediatria',
  'Dentística',
  'Clínica Geral',
  'Outro',
] as const;

// Métodos de pagamento
export const PAYMENT_METHODS = [
  'Dinheiro',
  'Multibanco',
  'MB Way',
  'Cartão de Crédito',
  'Cartão de Débito',
  'Transferência Bancária',
  'Outro',
] as const;

// Roles de usuário
export const USER_ROLES = {
  ADMIN: 'admin',
  PATIENT: 'patient',
} as const;

// Formato de moeda EUR
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};

// Validar NIF português
export const isValidNIF = (nif: string): boolean => {
  if (!/^\d{9}$/.test(nif)) return false;
  
  const checkDigit = parseInt(nif.charAt(8));
  let sum = 0;
  
  for (let i = 0; i < 8; i++) {
    sum += parseInt(nif.charAt(i)) * (9 - i);
  }
  
  const mod = sum % 11;
  const calculatedCheckDigit = mod < 2 ? 0 : 11 - mod;
  
  return checkDigit === calculatedCheckDigit;
};

// Validar email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar telefone português
export const isValidPhone = (phone: string): boolean => {
  // Remove espaços e caracteres especiais
  const cleanPhone = phone.replace(/\s+/g, '').replace(/[-()+]/g, '');
  
  // Telefone português: 9 dígitos começando com 2, 3, 9
  // Ou com código internacional: +351 seguido de 9 dígitos
  const phoneRegex = /^(\+351)?[239]\d{8}$/;
  
  return phoneRegex.test(cleanPhone);
};