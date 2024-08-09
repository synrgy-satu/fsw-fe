import {
  FaMoneyCheckDollar,
  FaMoneyBillTrendUp,
  FaAngleRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import { valueFormatter } from "../../utils/homepage/valueFormatter";
import { useState, useEffect } from "react";
import HomeLineChart from "../../components/userPortal/homepage/HomeLineChart";
import { DUMMY_DATA } from "./Homepage";
import InfoItem from "../../components/userPortal/savings/InfoItem";
import ToggleTransaction from "../../components/userPortal/savings/ToggleTransaction";
import TransactionLimiter from "../../components/userPortal/savings/TransactionLimiter";
import { useCard } from "../../context/cardContext";
import { useAuth } from "../../context/authContext";

const aggregateData = (data, key) =>
  data.reduce((acc, curr) => acc + curr[key], 0);

const savingsInfo = {
  jenisKartu: "Debit",
  jenisTabungan: "Saver",
  nomorKartu: "1021-1232-1231-1213",
  nomorRekening: "2321341341",
  masaBerlaku: "10/25",
  status: true,
};

export default function Savings() {
  const [tunai, setTunai] = useState(10000);
  const [debit, setDebit] = useState(10000);
  const [antarRekening, setAntarRekening] = useState(10000);
  const [antarBank, setAntarBank] = useState(10000);
  const [isCheckedDomestic, setIsCheckedDomestic] = useState(false);
  const [isCheckedMBanking, setIsCheckedMBanking] = useState(false);
  const { data, handleCard } = useCard();
  const { authState } = useAuth(); // Akses authState


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

  useEffect(() => {
    if (authState?.accessToken) {
      handleCard();
    }
  }, [authState, handleCard]);
  
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
        <div className="relative">
          <select
            className="py-2 ps-5 pe-24 text-slate-500 rounded-lg border border-primary"
            // disabled={true}
          >
            <option>12991213145 (Karina Atifah Hana)</option>
          </select>
          <img
            src="/images/saver.png"
            alt="Savings Icon"
            style={{ height: "12px" }}
            className="absolute top-4 right-8"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 rounded-xl">
          <div className="grid gap-6">
            <img
              src="/images/saver-card.png"
              alt="Savings Card"
              // style={{ height: "230px" }}
              className="object-contain"
            />
            <div className="bg-white rounded-xl p-5 font-bold">
              <p>Saldo Akhir</p>
              <p className="flex items-start py-1">
                IDR{" "}
                <span className="ps-2 font-extrabold text-3xl">
                  {new Intl.NumberFormat("id").format(data[0].balance)},00
                </span>
              </p>
            </div>
            <div className="ps-5 py-5 pe-1 bg-white rounded-xl">
              <p className="font-bold mb-5 text-lg">Informasi Tabungan</p>
              <div className="grid gap-4 text-sm">
                <InfoItem label="Jenis Kartu" value={savingsInfo.jenisKartu} />
                <InfoItem
                  label="Jenis Tabungan"
                  value={savingsInfo.jenisTabungan}
                  isSaving
                  savingType={"saver"}
                />
                <InfoItem label="Nomor Kartu" value={savingsInfo.nomorKartu} />
                <InfoItem
                  label="Nomor Rekening"
                  value={savingsInfo.nomorRekening}
                />
                <InfoItem
                  label="Masa Berlaku"
                  value={savingsInfo.masaBerlaku}
                />
                <InfoItem label="Status" value={savingsInfo.status} isStatus />
                <Link
                  className="flex items-center gap-2 text-sm text-primary"
                  to={"#"}
                >
                  Informasi lain <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 rounded-xl">
          <div className="bg-white rounded-xl p-5">
            <div className="grid grid-cols-12 items-center">
              <p className="col-span-8 font-bold text-xl">
                Pemasukan dan Pengeluaran
              </p>
              <select
                className="col-span-4 py-2 px-3 bg-primary text-white rounded-xl cursor-pointer
                      hover:bg-indigo-950"
              >
                <option className="bg-white text-primary font-bold">
                  1 Tahun Terakhir
                </option>
                <option className="bg-white text-primary font-bold">
                  6 Bulan Terakhir
                </option>
                <option className="bg-white text-primary font-bold">
                  3 Bulan Terakhir
                </option>
                <option className="bg-white text-primary font-bold">
                  1 Bulan Terakhir
                </option>
              </select>
            </div>
            <div className="text-xl grid grid-cols-2 items-center py-3">
              <div className="">
                <div className="pt-2 ps-10 flex text-primary font-bold gap-3 items-center">
                  <FaMoneyCheckDollar />
                  <p className=" ">Pemasukan</p>
                </div>
                <div className="my-3 mx-4 py-2 px-6 rounded-md bg-primary-background text-blue-900 font-bold">
                  <span className="font-normal pe-6">IDR</span>
                  {valueFormatter(aggregateData(DUMMY_DATA, "deposit"))}
                </div>
              </div>
              <div>
                <div className="pt-2 ps-10 flex text-red-800 font-bold gap-3 items-center">
                  <FaMoneyBillTrendUp />
                  <p className=" ">Pengeluaran</p>
                </div>
                <p className="my-3 mx-4 py-2 px-6 rounded-md bg-primary-background text-blue-900 font-bold">
                  <span className="font-normal pe-6">IDR</span>
                  {valueFormatter(aggregateData(DUMMY_DATA, "debit"))}
                </p>
              </div>
            </div>
            <div className="">
              <HomeLineChart
                data={DUMMY_DATA}
                xDataKey={"month"}
                line1DataKey={"deposit"}
                line2DataKey={"debit"}
                height={175}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 mt-5">
            <p className="font-bold text-xl mb-4 mt-2">Kelola Tabungan</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 bg-primary-background rounded-xl p-5">
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
              <div className="col-span-4 grid gap-3 items-center">
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
                <div className="px-4 py-2">
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
                  className="p-4 bg-red-700 text-white font-bold text-md rounded-xl"
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
