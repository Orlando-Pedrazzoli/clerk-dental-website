import { useState, useRef, useEffect } from 'react';
import { User, LogOut, FileText, Microscope, ClipboardList } from 'lucide-react';
import { Link } from 'react-router';
import { usePatientAuth } from '../hooks/usePatientAuth';

export default function PatientUserMenu() {
  const { patientData, logout } = usePatientAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!patientData) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {patientData.firstName[0]}{patientData.lastName[0]}
          </span>
        </div>
        <span className="text-sm font-medium text-gray-700">
          {patientData.firstName}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="font-semibold text-gray-900">
              {patientData.firstName} {patientData.lastName}
            </p>
            <p className="text-sm text-gray-600">{patientData.email}</p>
            <p className="text-xs text-blue-600 mt-1">ID: {patientData.patientId}</p>
          </div>

          <Link
            to="/patient/portal"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
          >
            <User size={18} className="text-gray-600" />
            <span className="text-sm text-gray-700">Meu Painel</span>
          </Link>

          <Link
            to="/patient/treatments"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
          >
            <ClipboardList size={18} className="text-gray-600" />
            <span className="text-sm text-gray-700">Tratamentos</span>
          </Link>

          <Link
            to="/patient/exams"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
          >
            <Microscope size={18} className="text-gray-600" />
            <span className="text-sm text-gray-700">Exames</span>
          </Link>

          <Link
            to="/patient/invoices"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
          >
            <FileText size={18} className="text-gray-600" />
            <span className="text-sm text-gray-700">Faturas</span>
          </Link>

          <div className="border-t border-gray-100 mt-2 pt-2">
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition w-full"
            >
              <LogOut size={18} className="text-red-600" />
              <span className="text-sm text-red-600">Sair</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}