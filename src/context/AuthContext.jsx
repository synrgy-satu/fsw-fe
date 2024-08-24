import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
  // const [userMutation, setUserMutation] = useState(null);
  // const [isLoadingChart, setIsLoadingChart] = useState(true);
  const location = useLocation();

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

  const fetchMutation = async () => {
    let data = [];
    for (let i = 0; i < 12; i++) {
      try {
        const now = new Date();
        const date = new Date(now.getFullYear(), (now.getMonth() - i), 1).toLocaleString('id', { month: 'long', year: 'numeric' });
        const [month, year] = date.split(" ");
          const cardNumber = userInfo?.rekenings[0].cardNumber;
          const mutationUrl = `https://satu.cekrek.shop/api/v1/mutasi?cardNumber=${cardNumber}&periodeMutasi=${month}%20${year}&jenisTransaksi=SEMUA`
          const response = await axios.get(mutationUrl,
            {
              headers: { Authorization: `Bearer ${authState?.accessToken}` },
            }
          );
  
          if (response.status === 200) {
            const mutation = response.data.data;
            if (mutation.length > 0) { 
              const formattedMutation = mutation.map((transaction) => {
                const [day, month, year] = transaction.createdDate.split("-");
                const newDate = `${month}-${day}-${year}`;
                return {
                  referenceNumber: transaction.referenceNumber,
                  jenisTransaksi:
                    transaction.jenisTransaksi === "TRANSAKSI_MASUK"
                      ? "Debit"
                      : "Kredit",
                  createdDate: new Date(newDate),
                  balance: transaction.balance,
                  amount: transaction.amount,
                  note: transaction.note,
                };
              });
              const sortedByDateMutation = formattedMutation.sort(
                (a, b) => a.createdDate - b.createdDate
              );
              data = [...data, ...sortedByDateMutation]
            }
          } else {
            throw new Error(`Unexpected response status: ${response.status}`);
          }
      } catch (error) {
        console.error(
          "Failed to fetch mutation",
          error.response?.data || error.message
        );
      }
    }
    setUserMutation(data);
    setIsLoadingChart(false);
  };

  const logout = () => {
    localStorage.removeItem("authState");
    setAuthState(null);
    setUserMutation(null);
  };

  useEffect(() => { 
    fetchUserInfo();
  }, [location])

  // useEffect(() => {
  //     fetchUserInfo();
  // }, [userInfo?.rekenings[0]?.balance]);

  useEffect(() => {
    if (authState && authState.accessToken) {
      fetchUserInfo(); // Fetch user info on login
    }
  }, [authState]);

  // useEffect(() => {
  //   if (userInfo) {
  //     fetchMutation();
  //   }
  // }, [userInfo]);

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
        // isLoadingChart,
        setIsResetPassword,
        forgotPassword,
        userInfo,
        // userMutation,
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
