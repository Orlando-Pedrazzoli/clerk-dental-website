import { Routes, Route, Navigate } from 'react-router';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/home';
import SignInPage from './pages/sign-in';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import PatientsPage from './pages/admin/PatientsPage';
import DoctorsPage from './pages/admin/DoctorsPage';
import TreatmentsPage from './pages/admin/TreatmentsPage';
import PatientDetail from './pages/admin/PatientDetail';

// Patient Pages
import PatientPortal from './pages/patient/PatientPortal';
import MyExams from './pages/patient/MyExams';
import MyTreatments from './pages/patient/MyTreatments';
import MyInvoices from './pages/patient/MyInvoices';

// Componente para proteger rotas de Admin
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn, isAdmin } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Carregando...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/patient/portal" replace />;
  }

  return <>{children}</>;
};

// Componente para proteger rotas de Patient
const PatientRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn, isPatient } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Carregando...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!isPatient) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
};

// Rota para redirecionar após login
const DashboardRedirect = () => {
  const { isAdmin } = useAuth();
  
  if (isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  return <Navigate to="/patient/portal" replace />;
};

export default function App() {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      
      {/* Redirect após login */}
      <Route path="/dashboard" element={<DashboardRedirect />} />

      {/* Rotas Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/patients"
        element={
          <AdminRoute>
            <PatientsPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/patients/:id"
        element={
          <AdminRoute>
            <PatientDetail />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/doctors"
        element={
          <AdminRoute>
            <DoctorsPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/treatments"
        element={
          <AdminRoute>
            <TreatmentsPage />
          </AdminRoute>
        }
      />

      {/* Rotas Patient */}
      <Route
        path="/patient/portal"
        element={
          <PatientRoute>
            <PatientPortal />
          </PatientRoute>
        }
      />
      <Route
        path="/patient/exams"
        element={
          <PatientRoute>
            <MyExams />
          </PatientRoute>
        }
      />
      <Route
        path="/patient/treatments"
        element={
          <PatientRoute>
            <MyTreatments />
          </PatientRoute>
        }
      />
      <Route
        path="/patient/invoices"
        element={
          <PatientRoute>
            <MyInvoices />
          </PatientRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}