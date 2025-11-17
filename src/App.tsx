import { Routes, Route, Navigate } from 'react-router';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/home';
import SignInPage from './pages/sign-in';
import TreatmentPage from './pages/TreatmentPage';
import CorpoClinicoPage from './pages/CorpoClinicoPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import PatientsPage from './pages/admin/PatientsPage';
import DoctorsPage from './pages/admin/DoctorsPage';
import TreatmentsPage from './pages/admin/TreatmentsPage';
import PatientDetail from './pages/admin/PatientDetail';
import UsersManagement from './pages/admin/UsersManagement';
import PatientIDVerification from './pages/PatientIDVerification';

// Patient Pages
import PatientPortal from './pages/patient/PatientPortal';
import MyExams from './pages/patient/MyExams';
import MyTreatments from './pages/patient/MyTreatments';
import MyInvoices from './pages/patient/MyInvoices';

// Redirect Pages
import RedirectPage from './pages/RedirectPage';

// ============================================
// COMPONENTE PARA PROTEGER ROTAS ADMIN
// ============================================
const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

// ============================================
// COMPONENTE PARA PROTEGER ROTAS PATIENT
// ============================================
const PatientRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn, isPatient } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!isPatient) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default function App() {
  return (
    <Routes>
      {/* ==================== ROTAS PÚBLICAS ==================== */}
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      
      {/* ==================== ROTA DE TRATAMENTOS ==================== */}
      <Route path="/tratamentos/:slug" element={<TreatmentPage />} />
      
      {/* ==================== ROTA CORPO CLÍNICO ==================== */}
      <Route path="/corpo-clinico" element={<CorpoClinicoPage />} />
      
      {/* ==================== ADMIN LOGIN ==================== */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* ==================== REDIRECT (PARA PATIENTS CLERK) ==================== */}
      <Route path="/redirect" element={<RedirectPage />} />

      <Route path="/verify-patient-id" element={<PatientIDVerification />} />

      {/* ==================== ROTAS ADMIN (PROTEGIDAS) ==================== */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/patients"
        element={
          <ProtectedAdminRoute>
            <PatientsPage />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/patients/:id"
        element={
          <ProtectedAdminRoute>
            <PatientDetail />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/doctors"
        element={
          <ProtectedAdminRoute>
            <DoctorsPage />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/treatments"
        element={
          <ProtectedAdminRoute>
            <TreatmentsPage />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedAdminRoute>
            <UsersManagement />
          </ProtectedAdminRoute>
        }
      />

      {/* ==================== ROTAS PATIENT (PROTEGIDAS) ==================== */}
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

      {/* ==================== 404 ==================== */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}