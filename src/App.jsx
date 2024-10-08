import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/landingPage/Onboarding";
import NotFound from "./pages/NotFound";
import RegisterNumberCard from "./pages/authentication/register/RegisterNumberCard";
import RegisterEmailNumber from "./pages/authentication/register/RegisterEmailNumber";
import RegisterPassword from "./pages/authentication/register/RegisterPassword";
import RegisterPIN from "./pages/authentication/register/RegisterPIN";
import RegisterSuccess from "./pages/authentication/register/RegisterSuccess";
import VerifNumberCardPage from "./pages/authentication/register/verif/VerifNumberCardPage";
import NotVerifNumberCardPage from "./pages/authentication/register/verif/NotVerifNumberCardPage";
import UserPortal from "./pages/userPortalPages/UserPortal";
import Notification from "./pages/notification/Notification";
import Login from "./pages/authentication/Login";
import { AuthProvider } from "./context/AuthContext";
import Mutation from "./pages/Mutation";
import ProtectedRoute from "./components/protection/ProtectedRoute";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            {/* Register Pages */}
            <Route path="/register" element={<RegisterNumberCard />} />
            <Route path="/register/email" element={<RegisterEmailNumber />} />
            <Route path="/register/password" element={<RegisterPassword />} />
            <Route path="/register/pin" element={<RegisterPIN />} />
            <Route path="/register/success" element={<RegisterSuccess />} />
            <Route
              path="/register/verifnumber"
              element={<VerifNumberCardPage />}
            />
            <Route
              path="/register/notverifnumber"
              element={<NotVerifNumberCardPage />}
            />
            {/* End Register Pages */}
            <Route
              path="/portal/*"
              element={
                <ProtectedRoute>
                  <UserPortal />
                </ProtectedRoute>
              }
            />
            <Route path="/mutation" element={<Mutation />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
