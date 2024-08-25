import {
  FaMoneyCheckDollar,
  FaMoneyBillTrendUp,
  FaAngleRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import { valueFormatter } from "../../utils/homepage/homepageUtils";
import { useState, useContext } from "react";
import HomeLineChart from "./homepage/HomeLineChart";
import InfoItem from "./savings/InfoItem";
import ToggleTransaction from "./savings/ToggleTransaction";
import TransactionLimiter from "./savings/TransactionLimiter";
import SavingsList from "./savings/SavingsList";
import TimeSelectOption from "./homepage/TimeSelectOptions";
import { HomePageContext } from "../../context/HomePageContext";

export default function Savings() {
  const homePageContext = useContext(HomePageContext);

  const {
    tunai,
    debit,
    antarRekening,
    antarBank,
    isCheckedMBanking,
    setIsCheckedMBanking,
    isCheckedDomestic,
    setIsCheckedDomestic,
    isClickedSavings,
    isClickedTimeOption,
    selectedSavings,
    accounts,
    selectOption,
    graphData,
    totalDebit,
    totalCredit,
    setTunai,
    setDebit,
    setAntarRekening,
    setAntarBank,
    isLoadingChart,
    handleIsClickedTimeOption,
    handleSelectOption,
    handleIsClickedSavings,
    handleSelectedSavings,
  } = homePageContext;


  const handleTunai = (value) => {
    setTunai(value);
  };

  const handleDebit = (value) => {
    setDebit(value);
  };

  const handleAntarRekening = (value) => {
    setAntarRekening(value);
  };

  const handleAntarBank = (value) => {
    setAntarBank(value);
  };

  const handleToggleDomestic = () => {
    setIsCheckedDomestic(!isCheckedDomestic);
  };

  const handleToggleMBanking = () => {
    setIsCheckedMBanking(!isCheckedMBanking);
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
        <div className="relative select-none z-50">
          <SavingsList
            account={selectedSavings}
            handleClick={handleIsClickedSavings}
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
                      handleClick={handleIsClickedSavings}
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
          <div className="grid gap-6">
            <div className="w-full">
              <div className="relative">
                <img
                  src={`/images/${selectedSavings["accountType"]}-card.png`}
                  draggable={false}
                  alt="Savings Card"
                  className="object-contain"
                />
                <p className="absolute top-[52%] left-8 text-xl text-white select-none tracking-[0.23rem] font-bold">
                  {selectedSavings.replaceCardNumber}
                </p>
                <p className="absolute bottom-[6%] left-9 text-white select-none text-sm">
                  {selectedSavings.fullName}
                </p>
              </div>
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
              <div className="col-span-5">
                <TimeSelectOption
                  selected={selectOption}
                  handleSelect={handleSelectOption}
                  handleClickWindow={handleIsClickedTimeOption}
                  isClicked={isClickedTimeOption}
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
                  {valueFormatter(totalCredit)}
                </p>
              </div>
            </div>
            <div className="-mb-3">
              <HomeLineChart
                data={graphData}
                xDataKey={"period"}
                line1DataKey={"Debit"}
                line2DataKey={"Kredit"}
                height={200}
                dot={false}
                isLoading={isLoadingChart}
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
                  value={+tunai}
                />
                <TransactionLimiter
                  label="Transaksi Debit"
                  handleChange={handleDebit}
                  value={+debit}
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
