import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    // Get token from localStorage on initialization
    const storedState = localStorage.getItem("authState");
    return storedState ? JSON.parse(storedState) : null;
  });

  const [error, setError] = useState(null);
  const [isResetPassword, setIsResetPassword] = useState(false); // New state for form toggle

  const login = async (emailAddress, password) => {
    try {
      const response = await axios.post(
        "https://satu.cekrek.shop/api/v1/auth/login",
        {
          emailAddress,
          password,
        }
      );

      if (response.status === 200) {
        const { data } = response;
        const authData = {
          accessToken: data.data.accessToken,
          expiresIn: data.data.expiresIn,
          scope: data.data.scope,
          user: { emailAddress },
        };

        // Save tokens and auth data in localStorage
        localStorage.setItem("authState", JSON.stringify(authData));
        setAuthState(authData);
        console.log("Login success", authData);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      setError(error.response?.data || { message: error.message });
    }
  };

  const forgotPassword = async (emailAddress) => {
    try {
      const response = await axios.post(
        "https://satu.cekrek.shop/api/v1/auth/password",
        {
          emailAddress,
        }
      );

      if (response.status === 200) {
        console.log("Forgot password success");
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error(
        "Forgot password failed",
        error.response?.data || error.message
      );
      setError(error.response?.data || { message: error.message });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authState");
    setAuthState(null);
  };

  // Handle token expiration and user session
  useEffect(() => {
    if (!authState || !authState.expiresIn) return;

    const expirationTime = authState.expiresIn * 1000; // Convert to milliseconds
    const expirationTimestamp = Date.now() + expirationTime;

    const timer = setTimeout(() => {
      // Notify user or redirect to login page when the token expires
      console.warn("Session expired. Please log in again.");
      logout();
      window.location.href = "/login";
    }, expirationTimestamp - Date.now());

    return () => clearTimeout(timer);
  }, [authState]);

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
        error,
        isResetPassword,
        setIsResetPassword,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
