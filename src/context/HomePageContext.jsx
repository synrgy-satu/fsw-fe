import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import GraphData from "../utils/homepage/aggregateData";

export const HomePageContext = createContext();

// eslint-disable-next-line react/prop-types
export const HomePageProvider = ({ children }) => {
  const [notification, setNotification] = useState(true);
  const [tunai, setTunai] = useState(localStorage.getItem("tunai") ?? 10000);
  const [debit, setDebit] = useState(localStorage.getItem("debit") ?? 10000);
  const [antarRekening, setAntarRekening] = useState(
    localStorage.getItem("antar-rekening") ?? 10000
  );
  const [antarBank, setAntarBank] = useState(
    localStorage.getItem("antar-bank") ?? 10000
  );
  const [isCheckedDomestic, setIsCheckedDomestic] = useState(
    localStorage.getItem("isCheckedDomestic") === "true"
  );
  const [isCheckedMBanking, setIsCheckedMBanking] = useState(
    localStorage.getItem("isCheckedMBanking") === "true"
  );

  const [isClickedSavings, setIsClickedSavings] = useState(false);
  const [isClickedTimeOption, setIsClickedTimeOption] = useState(false);
  const [isClickedTimeOptionBalance, setIsClickedTimeOptionBalance] =
    useState(false);
  const [selectedSavings, setSelectedSavings] = useState({});
  const [accounts, setAccounts] = useState([]);
  const { userInfo, authState } = useAuth();
  const [selectOption, setSelectOption] = useState(false);
  const [selectOptionBalance, setSelectOptionBalance] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const [totalDebit, setTotalDebit] = useState();
  const [totalCredit, setTotalCredit] = useState();
  const [mutation, setMutation] = useState([]);
  const [userMutation, setUserMutation] = useState(null);
  const [isLoadingChart, setIsLoadingChart] = useState(true);

  const fetchMutation = async () => {
    let data = [];
    for (let i = 11; i >= 0; i--) {
      try {
        const now = new Date();
        const date = new Date(
          now.getFullYear(),
          now.getMonth() - i,
          1
        ).toLocaleString("id", { month: "long", year: "numeric" });
        const [month, year] = date.split(" ");
        const cardNumber = userInfo?.rekenings[0].cardNumber;
        const mutationUrl = `https://satu.cekrek.shop/api/v1/mutasi?cardNumber=${cardNumber}&periodeMutasi=${month}%20${year}&jenisTransaksi=SEMUA`;
        const response = await axios.get(mutationUrl, {
          headers: { Authorization: `Bearer ${authState?.accessToken}` },
        });

        if (response.status === 200) {
          const monthlyMutation = response.data.data;
          if (monthlyMutation.length > 0) {
            const formattedMutation = monthlyMutation.map((transaction) => {
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
            data = [...data, ...sortedByDateMutation];
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

  const handleCloseNotification = () => {
    setNotification(false);
    localStorage.setItem("isAlertClosed", "true");
  };

  useEffect(() => {
    localStorage.setItem("tunai", tunai);
  }, [tunai]);

  useEffect(() => {
    localStorage.setItem("debit", debit);
  }, [debit]);

  useEffect(() => {
    localStorage.setItem("antar-rekening", antarRekening);
  }, [antarRekening]);

  useEffect(() => {
    localStorage.setItem("antar-bank", antarBank);
  }, [antarBank]);

  useEffect(() => {
    localStorage.setItem("isCheckedDomestic", isCheckedDomestic);
  }, [isCheckedDomestic]);

  useEffect(() => {
    localStorage.setItem("isCheckedMBanking", isCheckedMBanking);
  }, [isCheckedMBanking]);

  useEffect(() => {
    const isAlertClosed = localStorage.getItem("isAlertClosed");

    if (isAlertClosed === "true") {
      setNotification(false);
    }
  }, []);

  useEffect(() => {
    setIsClickedTimeOption(isClickedTimeOption);
  }, [isClickedTimeOption]);

  useEffect(() => {
    if (userInfo) {
      fetchMutation();
    }
  }, [userInfo]);

  useEffect(() => {
    if (userMutation) {
      setMutation(userMutation);
    }
  }, [userMutation]);

  useEffect(() => {
    const graphData = GraphData.getPeriodiclyTransaction(
      selectOption === false ? 0 : selectOption,
      mutation
    );
    setGraphData(graphData);
  }, [mutation]);

  useEffect(() => {
    const graphData = GraphData.getPeriodiclyTransaction(
      selectOption === false ? 0 : selectOption,
      mutation
    );
    setGraphData(graphData);

    const totalDebit = graphData.reduce((prev, curr) => {
      prev += curr.Debit;
      return prev;
    }, 0);

    const totalCredit = graphData.reduce((prev, curr) => {
      prev += curr.Kredit;
      return prev;
    }, 0);

    setTotalDebit(totalDebit);
    setTotalCredit(totalCredit);
  }, [selectOption]);

  useEffect(() => {
    if (userInfo) {
      const { fullName, rekenings } = userInfo;

      const newRekenings = rekenings.map((rekening) => {
        const {
          cardNumber,
          rekeningNumber,
          jenisRekening,
          expiredDateMonth,
          expiredDateYear,
          balance,
          name,
        } = rekening;

        const formatCardNumberToString = cardNumber.toString();
        const replaceCardNumber = formatCardNumberToString.replace(
          /(.{4})/g,
          "$1 "
        );

        return {
          accountType: jenisRekening.toLowerCase(),
          fullName,
          balance,
          replaceCardNumber,
          cardNumber,
          name,
          accountNumber: rekeningNumber,
          expirationDate: `${expiredDateMonth}/${expiredDateYear}`,
          status: true,
        };
      });

      setAccounts(newRekenings);
      console.log(newRekenings);
      setSelectedSavings(newRekenings[0]);
    }
  }, [userInfo]);

  const handleIsClickedSavings = () => {
    setIsClickedSavings(!isClickedSavings);
  };

  const handleSelectedSavings = (selectedSavings) => {
    setSelectedSavings(selectedSavings);
  };

  const handleIsClickedTimeOption = (isClicked) => {
    setIsClickedTimeOption(isClicked);
  };

  const handleSelectOption = (option) => {
    setSelectOption(option);
  };

  const handleIsClickedTimeOptionBalance = (isClicked) => {
    setIsClickedTimeOptionBalance(isClicked);
  };

  const handleSelectOptionBalance = (option) => {
    setSelectOptionBalance(option);
  };

  return (
    <HomePageContext.Provider
      value={{
        notification,
        tunai,
        setTunai,
        debit,
        setDebit,
        antarRekening,
        setAntarRekening,
        antarBank,
        setAntarBank,
        isCheckedDomestic,
        setIsCheckedDomestic,
        isCheckedMBanking,
        setIsCheckedMBanking,
        isClickedSavings,
        setIsClickedSavings,
        isClickedTimeOption,
        isClickedTimeOptionBalance,
        setIsClickedTimeOption,
        setIsClickedTimeOptionBalance,
        selectedSavings,
        setSelectedSavings,
        accounts,
        selectOption,
        selectOptionBalance,
        setSelectOption,
        setSelectOptionBalance,
        graphData,
        totalDebit,
        totalCredit,
        isLoadingChart,
        userMutation,
        handleIsClickedTimeOption,
        handleSelectOption,
        handleIsClickedSavings,
        handleSelectedSavings,
        handleIsClickedTimeOptionBalance,
        handleSelectOptionBalance,
        handleCloseNotification,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
