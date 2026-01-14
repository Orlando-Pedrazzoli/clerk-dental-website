import { useUser } from '@clerk/clerk-react';

export const useAuth = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  // Verificar se o usuário é admin
  const isAdmin = user?.publicMetadata?.role === 'admin';

  // Verificar se o usuário é paciente
  const isPatient = user?.publicMetadata?.role === 'patient' || !user?.publicMetadata?.role;

  // Pegar o role do usuário
  const userRole = (user?.publicMetadata?.role as string) || 'patient';

  return {
    isSignedIn,
    isLoaded,
    user,
    isAdmin,
    isPatient,
    userRole,
    clerkUserId: user?.id,
    email: user?.primaryEmailAddress?.emailAddress,
    firstName: user?.firstName,
    lastName: user?.lastName,
  };
};