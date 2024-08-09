import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "./authContext";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : null;
  });
  const { authState } = useAuth(); // Access the auth state

  const handleCard = async () => {
    try {
      const response = await axios.get(
        "https://satu.cekrek.shop/api/v1/action/checkbalance",
        {
          headers: { Authorization: `Bearer ${authState?.accessToken}` },
        }
      );
      setData(response.data.data);
      localStorage.setItem("data", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <CardContext.Provider value={{ data, handleCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
