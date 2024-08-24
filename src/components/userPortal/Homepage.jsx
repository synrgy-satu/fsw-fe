import {
  FaMoneyCheckDollar,
  FaMoneyBillTrendUp,
  FaCircleInfo,
  FaArrowsRotate,
} from "react-icons/fa6";

import { DonutChart } from "@tremor/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  percentageFormatter,
  valueFormatter,
} from "../../utils/homepage/homepageUtils";

import AssetCard from "./homepage/AssetCard";
import HomeLineChart from "./homepage/HomeLineChart";
import HomeNotification from "./homepage/HomeNotification";
import TimeSelectOption from "./homepage/TimeSelectOptions";
import { CURRENCIES, donut, DUMMY_DATA } from "../../utils/homepage/dummies";
import { aggregateData } from "../../utils/homepage/homepageUtils";
import DummyData, { filterFewMonths } from "../../utils/homepage/aggregateData";
import { useAuth } from "../../context/AuthContext";

const totalBalance =
  aggregateData(DUMMY_DATA, "debit") +
  aggregateData(DUMMY_DATA, "deposit") +
  aggregateData(DUMMY_DATA, "invest");

const ASSETS = ["debit", "deposit", "invest"];

export default function Homepage() {
  const [currency, setCurrency] = useState(CURRENCIES);
  const [activeCurrency, setActiveCurrency] = useState(0);
  const [notification, setNotification] = useState(true);

  const [selectOptionBalance, setSelectOptionBalance] = useState(false);
  const [isClickedTimeOptionBalance, setIsClickedTimeOptionBalance] =
    useState(false);

  const [selectOptionGraph, setSelectOptionGraph] = useState(false);
  const [isClickedTimeOptionGraph, setIsClickedTimeOptionGraph] =
    useState(false);

  const balanceDropdownRef = useRef(null);
  const graphDropdownRef = useRef(null);

  const [graphData, setGraphData] = useState([]);
  const [totalDebit, setTotalDebit] = useState();
  const [totalCredit, setTotalCredit] = useState();

  const { userMutation, isLoadingChart } = useAuth();
  const [mutation, setMutation] = useState([]);

  useEffect(() => {
    if (userMutation) {
      setMutation(userMutation);
    }
  }, [userMutation]);

  useEffect(() => {
    const graphData = DummyData.getPeriodiclyTransaction(
      selectOptionGraph === false ? 0 : selectOptionGraph,
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
  }, [selectOptionGraph]);

  useEffect(() => {
    const graphData = DummyData.getPeriodiclyTransaction(
      selectOptionGraph === false ? 0 : selectOptionGraph,
      mutation
    );
    setGraphData(graphData);
  }, [mutation]);

  useEffect(() => {
    const isAlertClosed = localStorage.getItem("isAlertClosed");
    if (isAlertClosed === "true") {
      setNotification(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleisClickedOptionBalance = () => {
    setIsClickedTimeOptionBalance(!isClickedTimeOptionBalance);
  };

  const handleisClickedOptionGraph = () => {
    setIsClickedTimeOptionGraph(!isClickedTimeOptionGraph);
  };

  const handleSelectOptionBalance = (option) => {
    setSelectOptionBalance(option);
  };

  const handleSelectOptionGraph = (option) => {
    setSelectOptionGraph(option);
  };

  const handleClickOutside = (event) => {
    if (
      balanceDropdownRef.current &&
      !balanceDropdownRef.current.contains(event.target)
    ) {
      setIsClickedTimeOptionBalance(false);
    }
    if (
      graphDropdownRef.current &&
      !graphDropdownRef.current.contains(event.target)
    ) {
      setIsClickedTimeOptionGraph(false);
    }
  };

  const handleActive = (position) => {
    setActiveCurrency(position);
  };

  const handleCloseNotification = () => {
    setNotification(false);
    localStorage.setItem("isAlertClosed", "true");
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
        <HomeNotification handleClick={handleCloseNotification} />
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
                py-2 items-center gap-2 cursor-pointer hover:bg-indigo-50 justify-center"
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
                <div className="py-1 grid grid-cols-12">
                  <div className="col-span-7">
                    <p className="font-bold text-xl">Saldo Total</p>
                    <p className="text-2xl text-primary font-bold">
                      <span className="me-3">
                        {currency[activeCurrency]?.symbol}
                      </span>
                      {valueFormatter(
                        totalBalance,
                        currency[activeCurrency]?.convert,
                        currency[activeCurrency]?.locale
                      )}
                    </p>
                  </div>
                  <div ref={balanceDropdownRef} className="col-span-5">
                    <TimeSelectOption
                      selected={selectOptionBalance}
                      handleSelect={handleSelectOptionBalance}
                      handleClickWindow={handleisClickedOptionBalance}
                      isClicked={isClickedTimeOptionBalance}
                    />
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
                    data={filterFewMonths(DUMMY_DATA, selectOptionBalance)}
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
            <div ref={graphDropdownRef} className="col-span-4">
              <TimeSelectOption
                selected={selectOptionGraph}
                handleSelect={handleSelectOptionGraph}
                handleClickWindow={handleisClickedOptionGraph}
                isClicked={isClickedTimeOptionGraph}
              />
            </div>
          </div>
          <HomeLineChart
            data={graphData}
            xDataKey={"period"}
            line1DataKey={"Debit"}
            line2DataKey={"Kredit"}
            height={175}
            dot={false}
            isLoading={isLoadingChart}
          />
        </div>
        <div className="col-span-4 bg-primary-background p-6 rounded-[30px] text-xl flex align-middle items-center">
          <div className="">
            <div>
              <div className="flex text-primary font-bold gap-3 items-center">
                <FaMoneyCheckDollar />
                <p className=" ">Pemasukan</p>
              </div>
              <div className="my-3 me-2 py-1 ps-4 pe-6 rounded-md bg-white text-blue-900 font-bold block">
                <p className="block min-w-44">
                  <span className="font-normal pe-6">IDR</span>
                  {valueFormatter(totalDebit)}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex text-red-800 font-bold gap-3 items-center">
                <FaMoneyBillTrendUp />
                <p className=" ">Pengeluaran</p>
              </div>
              <p className="my-3 me-2 py-1 ps-4 pe-6 rounded-md bg-white text-blue-900 font-bold">
                <p className="block min-w-44">
                  <span className="font-normal pe-6">IDR</span>
                  {valueFormatter(totalCredit)}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
