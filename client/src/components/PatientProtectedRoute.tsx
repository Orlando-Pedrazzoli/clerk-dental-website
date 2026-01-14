import { Navigate } from 'react-router';
import { usePatientAuth } from '../hooks/usePatientAuth';

interface PatientProtectedRouteProps {
  children: React.ReactNode;
}

export default function PatientProtectedRoute({ children }: PatientProtectedRouteProps) {
  const { isAuthenticated, isLoading } = usePatientAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}