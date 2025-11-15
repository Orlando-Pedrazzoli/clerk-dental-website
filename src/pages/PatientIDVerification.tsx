import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import PatientIDModal from '../components/PatientIDModal';

export default function PatientIDVerification() {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        navigate('/sign-in');
      } else {
        const validatedId = localStorage.getItem('validatedPatientId');
        if (validatedId) {
          navigate('/patient/portal');
        } else {
          setShowModal(true);
        }
      }
    }
  }, [isLoaded, isSignedIn, navigate]);

  const handleCloseModal = () => {
    navigate('/');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {showModal && <PatientIDModal onClose={handleCloseModal} />}
    </div>
  );
}