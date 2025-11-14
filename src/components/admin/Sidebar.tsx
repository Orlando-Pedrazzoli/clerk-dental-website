import { Link, useLocation } from 'react-router';
import { UserButton } from '@clerk/clerk-react';
import { 
  LayoutDashboard, 
  Users, 
  Stethoscope, 
  ClipboardList, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Pacientes',
    path: '/admin/patients',
    icon: Users,
  },
  {
    name: 'Médicos',
    path: '/admin/doctors',
    icon: Stethoscope,
  },
  {
    name: 'Tratamentos',
    path: '/admin/treatments',
    icon: ClipboardList,
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
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
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                      ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UserButton />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Admin</p>
                <p className="text-gray-500 text-xs">Administrador</p>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="mt-4 flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <LogOut size={18} />
            <span className="text-sm">Voltar ao Site</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
}