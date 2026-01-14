import { format, parseISO, formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

// Formatar data para exibição (ex: 14/11/2025)
export const formatDate = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'dd/MM/yyyy', { locale: pt });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return 'Data inválida';
  }
};

// Formatar data e hora (ex: 14/11/2025 às 14:30)
export const formatDateTime = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, "dd/MM/yyyy 'às' HH:mm", { locale: pt });
  } catch (error) {
    console.error('Erro ao formatar data e hora:', error);
    return 'Data inválida';
  }
};

// Formatar para input date (ex: 2025-11-14)
export const formatDateForInput = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'yyyy-MM-dd');
  } catch (error) {
    console.error('Erro ao formatar data para input:', error);
    return '';
  }
};

// Calcular tempo relativo (ex: "há 2 dias")
export const formatRelativeTime = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return formatDistanceToNow(dateObj, { addSuffix: true, locale: pt });
  } catch (error) {
    console.error('Erro ao calcular tempo relativo:', error);
    return 'Data inválida';
  }
};

// Formatar apenas hora (ex: 14:30)
export const formatTime = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'HH:mm', { locale: pt });
  } catch (error) {
    console.error('Erro ao formatar hora:', error);
    return 'Hora inválida';
  }
};

// Calcular idade a partir da data de nascimento
export const calculateAge = (birthDate: string | Date): number => {
  try {
    const birthDateObj = typeof birthDate === 'string' ? parseISO(birthDate) : birthDate;
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    return age;
  } catch (error) {
    console.error('Erro ao calcular idade:', error);
    return 0;
  }
};