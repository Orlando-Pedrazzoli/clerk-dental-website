import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { NoIndexSEO } from '../components/NoIndexSEO';

export default function RedirectPage() {
  const navigate = useNavigate();
  const { user, userRole, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && user) {
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (userRole === 'patient') {
        const validatedId = localStorage.getItem('validatedPatientId');
        if (validatedId) {
          navigate('/patient/portal');
        } else {
          navigate('/verify-patient-id');
        }
      } else {
        navigate('/');
      }
    } else if (isLoaded && !user) {
      navigate('/sign-in');
    }
  }, [user, userRole, isLoaded, navigate]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <NoIndexSEO title="Redirecionamento" />
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  return <NoIndexSEO title="Redirecionamento" />;
}