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
import Login from "./pages/authentication/Login";
import { AuthProvider } from "./context/authContext";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
