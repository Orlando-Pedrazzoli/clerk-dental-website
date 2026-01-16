import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/home';
import TreatmentPage from './pages/TreatmentPage';
import CorpoClinicoPage from './pages/CorpoClinicoPage';
import FAQPage from './pages/FAQPage';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidadePage';
import PoliticaCookiesPage from './pages/PoliticaCookiesPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import PatientsPage from './pages/admin/PatientsPage';
import DoctorsPage from './pages/admin/DoctorsPage';
import TreatmentsPage from './pages/admin/TreatmentsPage';
import PatientDetail from './pages/admin/PatientDetail';
import UsersManagement from './pages/admin/UsersManagement';

// Patient Pages
import PatientPortal from './pages/patient/PatientPortal';
import MyExams from './pages/patient/MyExams';
import MyTreatments from './pages/patient/MyTreatments';
import MyInvoices from './pages/patient/MyInvoices';

// Components
import PatientProtectedRoute from './components/PatientProtectedRoute';
import CookieConsent from './components/cookies/CookieConsent';

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

export default function App() {
  return (
    <>
      <Routes>
        {/* ==================== ROTAS PUBLICAS ==================== */}
        <Route path="/" element={<HomePage />} />
        
        {/* ==================== ROTA DE TRATAMENTOS ==================== */}
        <Route path="/tratamentos/:slug" element={<TreatmentPage />} />
        
        {/* ==================== ROTA CORPO CLINICO ==================== */}
        <Route path="/corpo-clinico" element={<CorpoClinicoPage />} />

        {/* ==================== ROTA FAQ ==================== */}
        <Route path="/faq" element={<FAQPage />} />

        {/* ==================== ROTAS POLÍTICAS ==================== */}
        <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
        <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
        
        {/* ==================== ADMIN LOGIN ==================== */}
        <Route path="/admin/login" element={<AdminLogin />} />

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
            <PatientProtectedRoute>
              <PatientPortal />
            </PatientProtectedRoute>
          }
        />
        <Route
          path="/patient/exams"
          element={
            <PatientProtectedRoute>
              <MyExams />
            </PatientProtectedRoute>
          }
        />
        <Route
          path="/patient/treatments"
          element={
            <PatientProtectedRoute>
              <MyTreatments />
            </PatientProtectedRoute>
          }
        />
        <Route
          path="/patient/invoices"
          element={
            <PatientProtectedRoute>
              <MyInvoices />
            </PatientProtectedRoute>
          }
        />

        {/* ==================== 404 ==================== */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* ==================== COOKIE CONSENT ==================== */}
      <CookieConsent />
    </>
  );
}