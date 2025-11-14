import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function RoleBasedRedirect() {
  const navigate = useNavigate();
  const { user, userRole, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && user) {
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (userRole === 'patient') {
        navigate('/patient/portal');
      } else {
        // Se não tiver role definido, vai para home
        navigate('/');
      }
    } else if (isLoaded && !user) {
      // Se não estiver logado, redireciona para sign-in
      navigate('/sign-in');
    }
  }, [user, userRole, isLoaded, navigate]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  return null;
}