import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchFilterProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SearchFilter({ 
  placeholder = "Pesquisar...", 
  value: externalValue = '',
  onChange,
  className = ''
}: SearchFilterProps) {
  const [internalValue, setInternalValue] = useState(externalValue);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChange(internalValue);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [internalValue]);

  const handleClear = () => {
    setInternalValue('');
    onChange('');
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {internalValue && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}