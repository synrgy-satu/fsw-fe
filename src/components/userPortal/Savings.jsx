import {
  FaMoneyCheckDollar,
  FaMoneyBillTrendUp,
  FaAngleRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import { valueFormatter } from "../../utils/homepage/homepageUtils";
import { useState, useEffect, useRef } from "react";
import HomeLineChart from "./homepage/HomeLineChart";
import InfoItem from "./savings/InfoItem";
import ToggleTransaction from "./savings/ToggleTransaction";
import TransactionLimiter from "./savings/TransactionLimiter";
import SavingsList from "./savings/SavingsList";
import { useAuth } from "../../context/authContext";
import TimeSelectOption from "./homepage/TimeSelectOptions";
import DummyData from "../../utils/homepage/dummyData";

export default function Savings() {
  const [tunai, setTunai] = useState(10000);
  const [debit, setDebit] = useState(10000);
  const [antarRekening, setAntarRekening] = useState(10000);
  const [antarBank, setAntarBank] = useState(10000);
  const [isCheckedDomestic, setIsCheckedDomestic] = useState(false);
  const [isCheckedMBanking, setIsCheckedMBanking] = useState(false);
  const [isClickedSavings, setIsClickedSavings] = useState(false);
  const [isClickedTimeOption, setIsClickedTimeOption] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedSavings, setSelectedSavings] = useState({});
  const [accounts, setAccounts] = useState([]);
  const { userInfo, userMutation } = useAuth();
  const [selectOption, setSelectOption] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const [totalDebit, setTotalDebit] = useState();
  const [totalCredit, setTotalCredit] = useState();
  const [mutation, setMutation] = useState([]);

  useEffect(() => {
    if (userMutation) { 
      console.log(userMutation);
      setMutation(userMutation);
    }
  }, [userMutation]);

  useEffect(() => { 
    const graphData = DummyData.getPeriodiclyTransaction(
      selectOption === false ? 0 : selectOption,
      mutation
    );
    setGraphData(graphData);
  }, [mutation]);

  useEffect(() => {
    const graphData = DummyData.getPeriodiclyTransaction(
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
      const {
        username: userName,
        rekenings: [
          {
            cardNumber,
            rekeningNumber,
            jenisRekening,
            expiredDateMonth,
            expiredDateYear,
            balance,
            name,
          },
        ],
      } = userInfo;

      const formatCardNumberToString = cardNumber.toString();
      const replaceCardNumber = formatCardNumberToString.replace(
        /(.{4})/g,
        "$1 "
      );

      const newRekening = {
        accountType: jenisRekening.toLowerCase(),
        userName,
        balance,
        replaceCardNumber,
        cardNumber,
        name,
        accountNumber: rekeningNumber,
        expirationDate: `${expiredDateMonth}/${expiredDateYear}`,
        status: true,
      };

      setAccounts([newRekening]);
      setSelectedSavings(newRekening);
    }
  }, [userInfo]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleisClickedSavings = () => {
    setIsClickedSavings(!isClickedSavings);
  };

  const handleisClickedTimeOption = () => {
    setIsClickedTimeOption(!isClickedTimeOption);
  };

  const handleSelectedSavings = (selectedSavings) => {
    setSelectedSavings(selectedSavings);
  };

  const handleToggleDomestic = () => {
    setIsCheckedDomestic(!isCheckedDomestic);
  };

  const handleToggleMBanking = () => {
    setIsCheckedMBanking(!isCheckedMBanking);
  };

  const handleTunai = (e) => {
    setTunai(e.target.value);
  };

  const handleDebit = (e) => {
    setDebit(e.target.value);
  };

  const handleAntarRekening = (e) => {
    setAntarRekening(e.target.value);
  };

  const handleAntarBank = (e) => {
    setAntarBank(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsClickedSavings(false);
      setIsClickedTimeOption(false);
    }
  };

  const handleSelectOption = (option) => {
    setSelectOption(option);
  };

  return (
    <div className="box-border p-2">
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to="#" className="inline-flex items-center text-primary">
              Tabungan
            </Link>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-primary mb-6"></div>

      <div className="flex gap-6 items-center mb-6">
        <p className="font-extrabold">Tabungan</p>
        <div className="relative select-none" ref={dropdownRef}>
          <SavingsList
            account={selectedSavings}
            handleClick={handleisClickedSavings}
            isClicked={isClickedSavings}
            handleSelected={handleSelectedSavings}
            isActive
          />
          {isClickedSavings && (
            <ul
              className={`absolute bg-white left-0 right-0 border border-primary rounded-lg
            ${accounts.length <= 1 ? "" : ""} `}
            >
              {accounts.map((account) => {
                return (
                  <li>
                    <SavingsList
                      handleClick={handleisClickedSavings}
                      isClicked={isClickedSavings}
                      account={account}
                      handleSelected={handleSelectedSavings}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 rounded-xl">
          <div className="grid gap-6 -mt-6">
            <div className="w-full">
              <p className="relative top-[62%] left-10 text-xl text-white">
                {selectedSavings.replaceCardNumber}
              </p>
              <p className="relative top-[73%] left-10 text-xl text-white ">
                {selectedSavings.name}
              </p>
              <img
                src={`/images/${selectedSavings["accountType"]}-card.png`}
                alt="Savings Card"
                className="object-contain"
              />
            </div>
            <div className="bg-white rounded-xl p-5 font-bold">
              <p className="py-3">Saldo Akhir</p>
              <p className="flex items-start py-1">
                IDR{" "}
                <span className="ps-2 font-extrabold text-3xl">
                  {valueFormatter(selectedSavings.balance)}
                </span>
              </p>
            </div>
            <div className="ps-5 py-5 pe-1 bg-white rounded-xl">
              <p className="font-bold mb-5 text-lg">Informasi Tabungan</p>
              <div className="grid gap-4 text-sm">
                <InfoItem
                  label="Jenis Kartu"
                  value={selectedSavings.cardType ?? "Debit"}
                />
                <InfoItem
                  label="Jenis Tabungan"
                  value={selectedSavings["accountType"]}
                  isSaving
                  savingType={selectedSavings["accountType"]}
                />
                <InfoItem
                  label="Nomor Kartu"
                  value={selectedSavings.cardNumber}
                />
                <InfoItem
                  label="Nomor Rekening"
                  value={selectedSavings.accountNumber}
                />
                <InfoItem
                  label="Masa Berlaku"
                  value={selectedSavings.expirationDate}
                />
                <InfoItem
                  label="Status"
                  value={selectedSavings.status}
                  isStatus
                />
              </div>
              <Link
                className="flex items-center gap-2 text-sm text-primary mt-5"
                to={"#"}
              >
                Informasi lain <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 rounded-xl">
          <div className="bg-white rounded-xl p-5">
            <div className="grid grid-cols-12 items-center">
              <p className="col-span-7 font-bold text-xl">
                Pemasukan dan Pengeluaran
              </p>
              <div className="col-span-5" ref={dropdownRef}>
                <TimeSelectOption
                  selected={selectOption}
                  handleSelect={handleSelectOption}
                  handleClickWindow={handleisClickedTimeOption}
                  isClicked={isClickedTimeOption}
                  // handleclick={handleisClickedTimeOption}
                />
              </div>
            </div>
            <div className="text-xl grid grid-cols-2 items-center">
              <div className="mb-2">
                <div className="pt-2 ps-10 flex text-primary font-bold gap-3 items-center">
                  <FaMoneyCheckDollar />
                  <p className=" ">Pemasukan</p>
                </div>
                <div className="my-1 mx-4 py-1 px-6 rounded-md bg-primary-background text-blue-900 font-bold">
                  <span className="font-normal pe-6">IDR</span>
                  {/* {valueFormatter(aggregateData(DUMMY_DATA, "deposit"))} */}
                  {valueFormatter(totalDebit)}
                </div>
              </div>
              <div className="mb-2">
                <div className="pt-2 ps-10 flex text-red-800 font-bold gap-3 items-center">
                  <FaMoneyBillTrendUp />
                  <p className=" ">Pengeluaran</p>
                </div>
                <p className="my-1 mx-4 py-1 px-6 rounded-md bg-primary-background text-blue-900 font-bold">
                  <span className="font-normal pe-6">IDR</span>
                  {/* {valueFormatter(aggregateData(DUMMY_DATA, "debit"))} */}
                  {valueFormatter(totalCredit)}
                </p>
              </div>
            </div>
            <div className="-mb-3">
              <HomeLineChart
                // data={filterLastMonths(DUMMY_DATA, monthsFilter)}
                // data={getDummyData(selectOption)}
                data={graphData}
                // xDataKey={"month"}
                xDataKey={"period"}
                line1DataKey={"Kredit"}
                line2DataKey={"Debit"}
                height={200}
                dot={false}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 mt-5">
            <p className="font-bold text-xl mb-3">Kelola Tabungan</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 bg-primary-background rounded-xl p-4">
                <p className="font-bold mb-3">Atur Limit Transaksi</p>
                <TransactionLimiter
                  label="Tarikan Tunai"
                  handleChange={handleTunai}
                  value={tunai}
                />
                <TransactionLimiter
                  label="Transaksi Debit"
                  handleChange={handleDebit}
                  value={debit}
                />
                <TransactionLimiter
                  label="Transaksi Antar Rekening SATU"
                  handleChange={handleAntarRekening}
                  value={antarRekening}
                />
                <TransactionLimiter
                  label="Transaksi Antar Bank"
                  handleChange={handleAntarBank}
                  value={antarBank}
                />
              </div>
              <div className="col-span-4 grid gap-2 items-center">
                <div className="bg-primary-background rounded-xl p-4">
                  <p className="font-bold text-lg mb-2">Kontrol Transaksi</p>
                  <div className="grid gap-3">
                    <ToggleTransaction
                      label="Transaksi Domestik"
                      isChecked={isCheckedDomestic}
                      handleToggle={handleToggleDomestic}
                    />
                    <ToggleTransaction
                      label="Transaksi M-Banking"
                      isChecked={isCheckedMBanking}
                      handleToggle={handleToggleMBanking}
                    />
                  </div>
                </div>
                <div className="px-4">
                  <p className="font-bold text-lg">Blokir Kartu</p>
                  <Link
                    className="flex items-center gap-1 text-[.8rem] text-primary"
                    to={"#"}
                  >
                    Informasi Selengkapnya <FaAngleRight />
                  </Link>
                </div>
                <Link
                  to={"#"}
                  className="px-4 py-2 bg-red-700 text-white font-bold text-md rounded-lg"
                >
                  Ajukan blokir Kartu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
