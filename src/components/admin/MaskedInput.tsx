import { useState, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

interface MaskedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  mask: 'phone' | 'nif' | 'currency' | 'date' | 'postalCode';
  value: string | number;
  onChange: (value: string | number) => void;
}

export default function MaskedInput({ 
  mask, 
  value, 
  onChange, 
  className = '',
  placeholder,
  ...rest 
}: MaskedInputProps) {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (mask === 'currency') {
      // Para currency, se o valor é um número, converte para formato correto
      if (typeof value === 'number') {
        // Multiplica por 100 para converter para centavos
        const cents = Math.round(value * 100);
        setDisplayValue(formatValue(cents.toString()));
      } else {
        setDisplayValue(formatValue(String(value || '0')));
      }
    } else {
      setDisplayValue(formatValue(String(value || '')));
    }
  }, [value, mask]);

  const formatValue = (val: string): string => {
    const cleaned = val.replace(/\D/g, '');
    
    switch (mask) {
      case 'phone':
        // Formato: +351 XXX XXX XXX
        if (cleaned.startsWith('351')) {
          const phone = cleaned.slice(3);
          if (phone.length <= 3) return `+351 ${phone}`;
          if (phone.length <= 6) return `+351 ${phone.slice(0, 3)} ${phone.slice(3)}`;
          return `+351 ${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)}`;
        } else {
          if (cleaned.length <= 3) return cleaned;
          if (cleaned.length <= 6) return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
          return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)}`;
        }
        
      case 'nif':
        // Formato: XXX XXX XXX
        if (cleaned.length <= 3) return cleaned;
        if (cleaned.length <= 6) return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)}`;
        
      case 'currency':
        // Formato: X.XXX,XX €
        if (!val || val === '0' || val === '00') return '';
        
        // Remove tudo exceto números
        let numbers = val.replace(/\D/g, '');
        
        if (!numbers || numbers === '0') return '';
        
        // Garante pelo menos 2 dígitos para centavos
        if (numbers.length === 1) {
          numbers = '0' + numbers;
        }
        
        // Converte para número considerando centavos
        const cents = parseInt(numbers);
        
        // Se tem menos de 3 dígitos, são apenas centavos
        if (numbers.length <= 2) {
          return `0,${numbers.padStart(2, '0')} €`;
        }
        
        // Separa euros e centavos
        const euros = Math.floor(cents / 100);
        const centavos = cents % 100;
        
        // Formata com separador de milhares
        const eurosFormatted = euros.toLocaleString('pt-PT');
        
        return `${eurosFormatted},${centavos.toString().padStart(2, '0')} €`;
        
      case 'date':
        // Formato: DD/MM/AAAA
        if (cleaned.length <= 2) return cleaned;
        if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
        return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
        
      case 'postalCode':
        // Formato: XXXX-XXX
        if (cleaned.length <= 4) return cleaned;
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}`;
        
      default:
        return val;
    }
  };

  const unformatValue = (val: string): string | number => {
    switch (mask) {
      case 'phone':
      case 'nif':
        return val.replace(/\D/g, '');
        
      case 'currency':
        // Remove tudo exceto números
        const numbers = val.replace(/\D/g, '');
        // Converte para decimal (divide por 100 para centavos)
        return numbers ? parseInt(numbers) / 100 : 0;
        
      case 'date':
        // Retornar no formato YYYY-MM-DD para inputs date
        const parts = val.split('/');
        if (parts.length === 3) {
          return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        }
        return val;
        
      case 'postalCode':
        return val.replace(/\D/g, '');
        
      default:
        return val;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Para currency, permitir apenas números
    if (mask === 'currency') {
      // Remove tudo exceto números
      const numbers = inputValue.replace(/\D/g, '');
      
      if (!numbers) {
        setDisplayValue('');
        onChange(0);
        return;
      }
      
      // Limita a 10 dígitos (99.999.999,99)
      const limitedNumbers = numbers.slice(0, 10);
      
      // Converte para valor decimal (divide por 100 para considerar centavos)
      const numValue = parseInt(limitedNumbers) / 100;
      
      // Formata para display
      const formatted = formatValue(limitedNumbers);
      setDisplayValue(formatted);
      onChange(numValue);
      return;
    }
    
    const formatted = formatValue(inputValue);
    setDisplayValue(formatted);
    onChange(unformatValue(formatted));
  };

  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    switch (mask) {
      case 'phone': return '+351 XXX XXX XXX';
      case 'nif': return 'XXX XXX XXX';
      case 'currency': return '0,00 €';
      case 'date': return 'DD/MM/AAAA';
      case 'postalCode': return 'XXXX-XXX';
      default: return '';
    }
  };

  const getInputMode = () => {
    switch (mask) {
      case 'phone':
      case 'nif':
      case 'postalCode':
        return 'numeric';
      case 'currency':
        return 'decimal';
      default:
        return 'text';
    }
  };

  return (
    <input
      {...rest}
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder={getPlaceholder()}
      inputMode={getInputMode()}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );
}