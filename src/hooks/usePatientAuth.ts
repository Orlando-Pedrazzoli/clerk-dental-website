import { useState, useEffect } from 'react';

interface PatientData {
  id: string;
  patientId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
}

export const usePatientAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('patientToken');
    const storedData = localStorage.getItem('patientData');
    
    if (token && storedData) {
      try {
        const data = JSON.parse(storedData);
        setPatientData(data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing patient data:', error);
        logout();
      }
    }
    
    setIsLoading(false);
  };

  const login = (token: string, data: PatientData) => {
    localStorage.setItem('patientToken', token);
    localStorage.setItem('patientData', JSON.stringify(data));
    setPatientData(data);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('patientToken');
    localStorage.removeItem('patientData');
    localStorage.removeItem('validatedPatientId');
    setPatientData(null);
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return {
    isAuthenticated,
    patientData,
    isLoading,
    login,
    logout,
    checkAuth
  };
};