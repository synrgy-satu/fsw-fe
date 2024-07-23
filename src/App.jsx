import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/landingPage/Onboarding";
import NotFound from "./pages/NotFound";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import './assets/css/style.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
