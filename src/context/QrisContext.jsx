import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QrisContext = createContext();

export const QrisProvider = ({ children }) => {
  const [isTransaksiOpen, setIsTransaksiOpen] = useState(false);
  const [qrisList, setQrisList] = useState([]);
  const [selectedQris, setSelectedQris] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem("authState")
    ? JSON.parse(localStorage.getItem("authState")).accessToken
    : null;

  useEffect(() => {
    // Fetch the QRIS list
    const fetchQrisList = async () => {
      try {
        const response = await axios.get(
          "https://satu.cekrek.shop/api/v1/qris/list",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        if (response.data.status && response.data.code === 200) {
          setQrisList(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchQrisList();
    } else {
      setLoading(false);
      setError("No access token found");
    }
  }, [accessToken]);

  const fetchQrisDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://satu.cekrek.shop/api/v1/qris/${id}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (response.data.status && response.data.code === 200) {
        setSelectedQris(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleQrisStatusChange = async (id, activate) => {
    try {
      const response = await axios.get(
        `https://satu.cekrek.shop/api/v1/qris/activate/${id}/${activate}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { id },
        }
      );

      if (response.data.status && response.data.code === 200) {
        setQrisList((prevList) =>
          prevList.map((qris) =>
            qris.id === id ? { ...qris, active: activate === "true" } : qris
          )
        );
        if (selectedQris && selectedQris.id === id) {
          setSelectedQris((prevSelectedQris) => ({
            ...prevSelectedQris,
            active: activate === "true",
          }));
        }
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <QrisContext.Provider
      value={{
        handleQrisStatusChange,
        qrisList,
        loading,
        error,
        isTransaksiOpen,
        setIsTransaksiOpen,
        selectedQris,
        setSelectedQris,
        fetchQrisDetails,
      }}
    >
      {children}
    </QrisContext.Provider>
  );
};
