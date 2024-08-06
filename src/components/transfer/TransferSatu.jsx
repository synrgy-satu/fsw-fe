import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const TransferSatu = () => {
  const [data, setData] = useState("");
  const { accessToken } = useAuth().authState;
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedBalance, setselectedBalance] = useState("");
  const [getDataAccount, setGetDataAccount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [selectedDestinationAccount, setSelectedDestinationAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [typeAccount, setTypeAccount] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("");
  const navigate = useNavigate();

  const handleCard = async () => {
    try {
      const response = await axios.get(
        "https://satu.cekrek.shop/api/v1/action/checkbalance",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleCheckCard = async () => {
    try {
      const response = await axios.get("https://satu.cekrek.shop/api/v1/card", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setGetDataAccount(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleChange = (event) => {
    // compare selected Card
    const selectId = event.target.value;
    const getBalance = data.find((item) => item.rekeningNumber == selectId);
    setSelectedAccount(selectId);
    // get Balance
    setselectedBalance(getBalance);
    setTypeAccount(getBalance);
  };

  const handleCheckDestinationCard = (event) => {
    // compare destination card
    const getInputDestinationCard = event.target.value;
    setDestinationAccount(getInputDestinationCard);
    const getDestinationCard = getDataAccount.find(
      (item) => item.rekeningNumber == getInputDestinationCard
    );
    // console.log(getDestinationCard)
    setSelectedDestinationAccount(getDestinationCard)
  };

  const handleSubmit = async (e) => {
    navigate("./detail-tf", {
      state: {
        selectedAccount: selectedAccount,
        destinationAccount: destinationAccount,
        amount: amount,
        note: note,
        typeTransaction: typeTransaction,
        typeAccount: typeAccount.jenisRekening,
      },
    });
  };

  useEffect(() => {
    handleCard();
    handleCheckCard();
  }, []);

  const styleOption = {
    padding: "28px",
    backgroundColor: "white",
    color: "#333",
  };
  return (
    <>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Transaksi
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-[#1A1A1A] mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 font-bold text-[#333999] hover:text-blue-600 md:ms-2"
              >
                Transfer
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#8C91D9]"></div>

      <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Transfer</h2>
        <p className="mb-8 text-base font-normal text-[#4D4D4D]">
          Pilih salah satu kategori di bawah ini untuk melanjutkan transaksi
          Anda.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label
                for="sumber-rekening"
                className="block font-bold text-lg mb-1"
              >
                Sumber Rekening
              </label>
              <p>Pilih sumber rekening untuk transaksi ini</p>
            </div>
            <div className="col-span-1">
              {data.length > 0 ? (
                <select
                  id="sumber-rekening"
                  className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                  value={selectedAccount}
                  onChange={handleChange}
                >
                  <option value="">Pilih nomor rekening</option>
                  {data.map((item, index) => (
                    <option key={index} value={item.rekeningNumber}>
                      {item.rekeningNumber}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  id="sumber-rekening"
                  className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                  value={selectedAccount}
                  onChange={handleChange}
                >
                  <option>Loading ...</option>
                </select>
              )}
            </div>
            <p className="text-lg font-bold">
              {selectedAccount && (
                <div>
                  <p>
                    IDR{" "}
                    {new Intl.NumberFormat("id").format(
                      selectedBalance.balance
                    )}
                    ,00
                  </p>
                  <span className="text-base font-normal">Saldo Tersedia</span>
                </div>
              )}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label
                for="tujuan-rekening"
                className="block font-bold text-lg mb-1"
              >
                Rekening Tujuan
              </label>
              <p>Pilih rekening tujuan untuk transaksi ini</p>
            </div>
            <div className="col-span-1">
              <input
                id="tujuan-rekening"
                className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan Nomor Rekening"
                value={destinationAccount}
                // onChange={(e) => setDestinationAccount(e.target.value)}
                onChange={handleCheckDestinationCard}
                required
                type="text"
                maxLength="10"
              />
            </div>
            <p className="text-base font-normal">
              {selectedDestinationAccount && (
                <div>
                  <p>
                    Nama | {selectedDestinationAccount.jenisRekening}
                  </p>
                </div>
              )}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label for="nominal-tf" className="block font-bold text-lg mb-1">
                Nominal Transfer
              </label>
              <p>Masukkan nominal transfer </p>
            </div>
            <div className="col-span-1">
              <input
                id="nominal-tf"
                className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="IDR"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label for="catatan" className="block font-bold text-lg mb-1">
                Catatan
              </label>
              <p>(Opsional)</p>
            </div>
            <div className="col-span-1">
              <input
                id="catatan"
                className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan Catatan"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label
                for="jenis-transaksi"
                className="block font-bold text-lg mb-1"
              >
                Waktu Transfer
              </label>
              <p>Pilih waktu transaksi yang di inginkan</p>
            </div>
            <div className="col-span-1">
              <select
                id="jenis-transaksi"
                className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              >
                <option style={styleOption}>Pilih Waktu Transfer</option>
                <option value="sekarang">Sekarang</option>
                <option value="atur-tanggal">Atur Tanggal</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="bg-[#B3B3B3] text-lg font-semibold text-white py-3 px-4 rounded-2xl hover:bg-[#333999]"
            >
              <div className="flex items-center space-x-3">
                <p>Verifikasi Detail Transfer</p>
                <FiArrowRightCircle className="text-2xl" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransferSatu;
