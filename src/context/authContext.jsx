import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const storedState = localStorage.getItem("authState");
    return storedState ? JSON.parse(storedState) : null;
  });

  const [error, setError] = useState(null);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(false);

  const login = async (emailAddress, password) => {
    try {
      const response = await axios.post(
        "https://satu.cekrek.shop/api/v1/auth/login",
        { emailAddress, password }
      );

      if (response.status === 200) {
        const { data } = response;
        const authData = {
          accessToken: data.data.accessToken,
          expiresIn: data.data.expiresIn,
          scope: data.data.scope,
          user: { emailAddress },
        };

        localStorage.setItem("authState", JSON.stringify(authData));
        setAuthState(authData);
        setError(null); // Clear any previous errors
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
        { emailAddress }
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

  const fetchUserInfo = async () => {
    try {
      const { accessToken } = authState;
      if (!accessToken) return;

      const response = await axios.get("https://satu.cekrek.shop/api/v1/auth", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.status === 200) {
        setUserInfo(response.data.data);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("authState");
        window.location.href = "/login";
      }
      console.error(
        "Failed to fetch user info",
        error.response?.data || error.message
      );
      setUserInfo(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("authState");
    setAuthState(null);
    setUserInfo(null);
  };

  useEffect(() => {
    if (authState && authState.accessToken) {
      fetchUserInfo(); // Fetch user info on login
    }
  }, [authState]);

  useEffect(() => {
    if (!authState || !authState.expiresIn) return;

    const expirationTime = authState.expiresIn * 1000;
    const expirationTimestamp = Date.now() + expirationTime;

    const warningTime = expirationTimestamp - Date.now() - 30000; // 30 seconds before expiration

    const timer = setTimeout(() => {
      setShowWarningPopup(true); // Show warning popup 30 seconds before expiration
    }, warningTime);

    const expirationTimer = setTimeout(() => {
      console.warn("Session expired. Please log in again.");
      logout();
      localStorage.removeItem("authState");
      window.location.href = "/login";
    }, expirationTimestamp - Date.now());

    return () => {
      clearTimeout(timer);
      clearTimeout(expirationTimer);
    };
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
        userInfo,
        showPopup,
        setShowPopup,
        showWarningPopup,
        setShowWarningPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
