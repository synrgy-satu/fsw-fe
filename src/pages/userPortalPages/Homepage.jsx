import {
  FaMoneyCheckDollar,
  FaMoneyBillTrendUp,
  FaCircleInfo,
  FaArrowsRotate,
} from "react-icons/fa6";

import { DonutChart } from "@tremor/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  percentageFormatter,
  valueFormatter,
} from "../../utils/homepage/valueFormatter";

import AssetCard from "../../components/userPortal/homepage/AssetCard";
import HomeLineChart from "../../components/userPortal/homepage/HomeLineChart";
import HomeNotification from "../../components/userPortal/homepage/HomeNotification";
import { useCard } from "../../context/cardContext";

export const DUMMY_DATA = [
  { month: "Jan", debit: 5000000, deposit: 7000000, invest: 3000000 },
  { month: "Feb", debit: 4000000, deposit: 8000000, invest: 3500000 },
  { month: "Mar", debit: 6000000, deposit: 7500000, invest: 4000000 },
  { month: "Apr", debit: 7000000, deposit: 9000000, invest: 4500000 },
  { month: "May", debit: 6500000, deposit: 8500000, invest: 5000000 },
  { month: "Jun", debit: 6000000, deposit: 9500000, invest: 5500000 },
  { month: "Jul", debit: 7000000, deposit: 10000000, invest: 6000000 },
  { month: "Aug", debit: 7500000, deposit: 10500000, invest: 6500000 },
  { month: "Sep", debit: 8000000, deposit: 11000000, invest: 7000000 },
  { month: "Oct", debit: 8500000, deposit: 11500000, invest: 7500000 },
  { month: "Nov", debit: 9000000, deposit: 12000000, invest: 8000000 },
  { month: "Dec", debit: 9500000, deposit: 12500000, invest: 8500000 },
];

const aggregateData = (data, key) =>
  data.reduce((acc, curr) => acc + curr[key], 0);

const totalBalance =
  aggregateData(DUMMY_DATA, "debit") +
  aggregateData(DUMMY_DATA, "deposit") +
  aggregateData(DUMMY_DATA, "invest");

const ASSETS = ["debit", "deposit", "invest"];

const donut = [
  {
    name: "Debit",
    value: aggregateData(DUMMY_DATA, "debit"),
  },
  {
    name: "Deposito",
    value: aggregateData(DUMMY_DATA, "deposit"),
  },
  {
    name: "Investasi",
    value: aggregateData(DUMMY_DATA, "invest"),
  },
];

export const CURRENCIES = [
  {
    name: "IDR",
    convert: 1,
    symbol: "IDR",
    locale: "id",
  },
  {
    name: "USD",
    convert: 16240,
    symbol: "$",
    locale: "us",
  },
];

export default function Homepage() {
  const [currency, setCurrency] = useState([]);
  const [activeCurrency, setActiveCurrency] = useState(0);
  const [notification, setNotification] = useState(true);
  const { data, handleCard } = useCard();

  useEffect(() => {
    setCurrency(CURRENCIES);
    handleCard();
  }, []);

  const handleActive = (position) => {
    setActiveCurrency(position);
  };

  const handleNotification = (isOpen) => {
    setNotification(isOpen);
  };

  return (
    <div className="box-border p-2">
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to="#" className="inline-flex items-center text-primary">
              Beranda
            </Link>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-primary mb-6"></div>

      {notification && (
        <HomeNotification
          handleNotification={handleNotification}
          notification={notification}
        />
      )}
      <div className="bg-white rounded-xl mb-8 ps-3">
        <div className="p-5 grid grid-cols-12 gap-6">
          <div className="col-span-7">
            <div className="grid grid-cols-12 justify-between mb-2">
              <p className="col-span-9 font-extrabold text-2xl">
                Aset dan Liabilitas
              </p>
              <div
                className="col-span-3 group flex text-primary border-primary border-2 rounded-lg 
                p-2 items-center gap-2 cursor-pointer hover:bg-indigo-50"
              >
                <FaArrowsRotate className="group-hover:rotate-[360deg] transition-transform duration-500 ease-in" />
                Refresh
              </div>
            </div>
            <div className="grid grid-cols-12 border-b-2 border-primary my-3">
              {currency.map((cur, index) => (
                <span
                  className={`col-span-2 hover:cursor-pointer hover:bg-indigo-50 hover:rounded-xl border-primary 
                              px-5 py-2 text-primary text-center ${
                                activeCurrency === index
                                  ? "font-bold border-b-[3px]"
                                  : ""
                              }`}
                  onClick={() => handleActive(index)}
                >
                  {cur?.name}
                </span>
              ))}
              <span
                className="col-span-1 hover:cursor-pointer hover:bg-indigo-50 hover:rounded-xl border-primary 
                px-5 py-2 text-primary font-bold text-center"
              >
                +
              </span>
            </div>
            <div className="bg-primary-background p-5 rounded-xl">
              <div className="">
                <div className="py-1 flex content-between justify-between">
                  <div>
                    <p className="font-bold text-xl">Saldo Total</p>
                    <p className="text-2xl text-primary font-bold">
                      <span className="me-3">
                        {currency[activeCurrency]?.symbol}
                      </span>
                      {/* {new Intl.NumberFormat("id").format(data[0].balance)},00 */}
                      {valueFormatter(
                        totalBalance,
                        currency[activeCurrency]?.convert,
                        currency[activeCurrency]?.locale
                      )}
                    </p>
                  </div>
                  <div>
                    <select
                      className="py-2 px-4 bg-primary text-white rounded-xl cursor-pointer
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
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3">
                {ASSETS.map((asset) => (
                  <AssetCard
                    asset={asset}
                    key={asset}
                    currency={currency}
                    activeCurrency={activeCurrency}
                    data={DUMMY_DATA}
                    aggregateData={aggregateData}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-5 bg-primary-background rounded-3xl p-4">
            <p className="font-bold text-lg">Statistik Saldo</p>
            <p className="text-sm">
              Statistik saldo dihitung berdasarkan kepemilikan tabungan aktif
              Debit, Deposito, dan Investasi pada Layanan Perbankan SATU
            </p>
            <div>
              <div className="py-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 space-y-3 -ms-2">
                    <div className="flex justify-center relative items-center w-44 h-44">
                      <DonutChart
                        className="text-white text-opacity-0 h-full w-full"
                        colors={["#9FA3DF", "#666CCC", "#333999"]}
                        data={donut}
                        variant="donut"
                        valueFormatter={valueFormatter}
                        showTooltip={false}
                      />
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-primary-background px-14 bg-no-repeat bg-contain bg-center z-0"
                        style={{
                          width: "55px",
                          height: "55px",
                          backgroundImage: "url('/images/satu-logo.png')",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="bg-white rounded-3xl p-3 flex flex-col gap-4">
                      <div>
                        <div className="grid grid-cols-12 items-center gap-x-7">
                          <div className="col-span-1 bg-[#333999] h-4 w-4 me-4"></div>
                          <div>
                            <div className="flex justify-between content-between gap-10">
                              <p className="">Debit</p>
                              <p className="">
                                {percentageFormatter(
                                  (aggregateData(DUMMY_DATA, "debit") /
                                    totalBalance) *
                                    100
                                )}
                              </p>
                            </div>
                            <p className="text-md text-[#333999] font-extrabold">
                              {currency[activeCurrency]?.locale === "us" && (
                                <span className="me-2">
                                  {currency[activeCurrency]?.symbol}
                                </span>
                              )}
                              {valueFormatter(
                                aggregateData(DUMMY_DATA, "debit"),
                                currency[activeCurrency]?.convert,
                                currency[activeCurrency]?.locale
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-12 items-center gap-x-7">
                          <div className="col-span-1 bg-[#666CCC] h-4 w-4 me-4"></div>
                          <div>
                            <div className="flex justify-between gap-6">
                              <p className="">Deposit</p>
                              <p className="">
                                {percentageFormatter(
                                  (aggregateData(DUMMY_DATA, "deposit") /
                                    totalBalance) *
                                    100
                                )}
                              </p>
                            </div>
                            <p className="text-md text-[#666CCC] font-extrabold">
                              {currency[activeCurrency]?.locale === "us" && (
                                <span className="me-2">
                                  {currency[activeCurrency]?.symbol}
                                </span>
                              )}
                              {valueFormatter(
                                aggregateData(DUMMY_DATA, "deposit"),
                                currency[activeCurrency]?.convert,
                                currency[activeCurrency]?.locale
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-12 items-center gap-x-7">
                          <div className="col-span-1 bg-[#9FA3DF] h-4 w-4 me-4"></div>
                          <div>
                            <div className="flex content-between gap-4">
                              <p className="">Investasi</p>
                              <p className="">
                                {percentageFormatter(
                                  (aggregateData(DUMMY_DATA, "invest") /
                                    totalBalance) *
                                    100
                                )}
                              </p>
                            </div>
                            <p className="text-md text-[#9FA3DF] font-extrabold">
                              {currency[activeCurrency]?.locale === "us" && (
                                <span className="me-2">
                                  {currency[activeCurrency]?.symbol}
                                </span>
                              )}
                              {valueFormatter(
                                aggregateData(DUMMY_DATA, "invest"),
                                currency[activeCurrency]?.convert,
                                currency[activeCurrency]?.locale
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl flex items-center justify-center px-2 py-2">
              <div className="flex items-center gap-1 text-sm">
                <FaCircleInfo color="#666CCC" />
                <p>Tingkat Resiko Rendah</p>
                <Link to="/coba" className="text-[#666CCC]">
                  Pelajari selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10 p-4 bg-white rounded-xl">
        <div className="col-span-8">
          <div className="py-6 ms-4 grid grid-cols-12 mb-4">
            <p className="col-span-8 font-extrabold text-2xl">
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
            </select>
          </div>
          <HomeLineChart
            data={DUMMY_DATA}
            xDataKey={"month"}
            line1DataKey={"deposit"}
            line2DataKey={"debit"}
            height={175}
          />
        </div>
        <div className="col-span-4 bg-primary-background p-6 rounded-[30px] text-xl flex align-middle items-center">
          <div className="">
            <div>
              <div className="flex text-primary font-bold gap-3 items-center">
                <FaMoneyCheckDollar />
                <p className=" ">Pemasukan</p>
              </div>
              <div className="my-3 me-2 py-1 ps-4 pe-10 rounded-md bg-white text-blue-900 font-bold">
                <span className="font-normal pe-6">IDR</span>
                {valueFormatter(aggregateData(DUMMY_DATA, "deposit"))}
              </div>
            </div>
            <div className="mt-6">
              <div className="flex text-red-800 font-bold gap-3 items-center">
                <FaMoneyBillTrendUp />
                <p className=" ">Pengeluaran</p>
              </div>
              <p className="my-3 me-2 py-1 ps-4 pe-10 rounded-md bg-white text-blue-900 font-bold">
                <span className="font-normal pe-6">IDR</span>
                {valueFormatter(aggregateData(DUMMY_DATA, "debit"))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
