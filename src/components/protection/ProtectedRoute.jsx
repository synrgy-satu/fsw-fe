import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();

  if (!authState) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
