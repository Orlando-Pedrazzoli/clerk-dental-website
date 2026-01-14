import { Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Users, 
  Stethoscope, 
  ClipboardList, 
  LogOut,
  Menu,
  X,
  User
} from 'lucide-react';
import { useState, useEffect } from 'react';

const menuItems = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: LayoutDashboard,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600',
  },
  {
    name: 'Pacientes',
    path: '/admin/patients',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600',
  },
  {
    name: 'Médicos',
    path: '/admin/doctors',
    icon: Stethoscope,
    color: 'text-green-600',
    bgColor: 'bg-green-600',
  },
  {
    name: 'Tratamentos',
    path: '/admin/treatments',
    icon: ClipboardList,
    color: 'text-purple-600',
    bgColor: 'bg-purple-600',
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevenir scroll quando menu estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  return (
    <>
      {/* Mobile Menu Button - Melhorado */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all active:scale-95"
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 w-64
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <img 
              src="/logo-colombo-nav.png" 
              alt="Centro Dentário Colombo" 
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-600 mt-2">Painel Administrativo</p>
        </div>

        {/* Menu Items */}
        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                      ${
                        isActive
                          ? `${item.bgColor} text-white shadow-md`
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section - Melhorado */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Admin</p>
                <p className="text-gray-500 text-xs">Administrador</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-white rounded-lg transition"
            >
              <LogOut size={18} />
              <span className="text-sm">Voltar ao Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Sair do Admin</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile - Melhorado com fade */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 animate-fade-in"
        />
      )}

      {/* Adicionar espaçamento no mobile quando menu estiver fechado */}
      <div className="lg:hidden h-16" />
    </>
  );
}