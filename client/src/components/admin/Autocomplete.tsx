import { useState, useEffect, useRef } from 'react';
import { Search, X, Check } from 'lucide-react';

interface AutocompleteOption {
  id: string;
  label: string;
  secondary?: string;
}

interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export default function Autocomplete({
  options,
  value,
  onChange,
  placeholder = 'Digite para pesquisar...',
  label,
  required = false,
  className = ''
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState<AutocompleteOption | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<AutocompleteOption[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set initial selected option based on value
    if (value) {
      const option = options.find(opt => opt.id === value);
      if (option) {
        setSelectedOption(option);
        setSearchTerm(option.label);
      }
    }
  }, [value, options]);

  useEffect(() => {
    // Filter options based on search term
    if (searchTerm && !selectedOption) {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (option.secondary && option.secondary.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredOptions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredOptions(options);
    }
  }, [searchTerm, options, selectedOption]);

  useEffect(() => {
    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedOption(null);
    setHighlightedIndex(-1);
    
    if (!value) {
      onChange('');
    }
  };

  const handleSelectOption = (option: AutocompleteOption) => {
    setSelectedOption(option);
    setSearchTerm(option.label);
    onChange(option.id);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedOption(null);
    onChange('');
    setFilteredOptions(options);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
        
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleSelectOption(filteredOptions[highlightedIndex]);
        }
        break;
        
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div className={className} ref={containerRef}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            required={required}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>
        
        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
            {filteredOptions.map((option, index) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`
                  w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between
                  ${highlightedIndex === index ? 'bg-gray-50' : ''}
                  ${selectedOption?.id === option.id ? 'bg-blue-50' : ''}
                `}
              >
                <div>
                  <div className="font-medium text-gray-900">{option.label}</div>
                  {option.secondary && (
                    <div className="text-sm text-gray-500">{option.secondary}</div>
                  )}
                </div>
                
                {selectedOption?.id === option.id && (
                  <Check size={20} className="text-blue-600" />
                )}
              </button>
            ))}
          </div>
        )}
        
        {isOpen && searchTerm && filteredOptions.length === 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            <p className="text-gray-500 text-center">Nenhum resultado encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}