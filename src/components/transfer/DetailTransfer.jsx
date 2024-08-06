import React, { useEffect, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";

const DetailTransfer = () => {
  const location = useLocation();
  const { accessToken } = useAuth().authState;
  const navigate = useNavigate();
  const { selectedAccount, destinationAccount, amount, note, typeAccount } =
    location.state || {};
  const biayaAdmin = 0;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  useEffect(() => {
    if(!selectedAccount) {
      navigate("../transfer")
    }
  }, []);

  const handlePinSubmit = async (event) => {
    event.preventDefault();
    // Tambahkan logika untuk memverifikasi PIN di sini

    try {
      await axios
        .post(
          `https://satu.cekrek.shop/api/v1/action/transfer`,
          {
            debitedRekeningNumber: selectedAccount,
            targetRekeningNumber: destinationAccount,
            amount: amount,
            pin: pin,
            note: note,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((res) => {
          console.log(res.data.data);
          const referenceNumber = res.data.data.referenceNumber;
          // alert("Berhasil Transfer")
          navigate("./status-tf", {
            state: {
              selectedAccount: selectedAccount,
              destinationAccount: destinationAccount,
              amount: Number(amount),
              note: note,
              referenceNumber: referenceNumber,
              biayaAdmin: biayaAdmin,
              dateTransaction: Date(),
            },
          });
        });
    } catch (error) {
      alert("Pin Salah");
      console.log(error);
    }
    handleCloseModal();
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

      <div className="bg-white p-10 rounded-xl shadow-md mx-auto mt-10 leading-8">
        <h2 className="text-2xl font-bold mb-4">Verifikasi Detail Transfer</h2>
        <ul className="list-disc ml-4">
          <li>Pastikan semua informasi sudah benar.</li>
          <li>Masukkan Pin anda untuk melanjutkan transaksi</li>
        </ul>

        <div className="mt-5">
          <p className="bg-blue-800 text-lg font-bold text-white p-3 rounded-md mb-2">
            Transfer Ke Rekening SATU
          </p>
          <table className="relative overflow-x-auto table-auto w-[100%]">
            <thead>
              <tr>
                <td>Rekening Sumber</td>
                <td>Rekening Tujuan</td>
                <td>Nominal Transfer</td>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <th>{typeAccount}+</th>
                <th>Denny Sumargo</th>
                <th>IDR {new Intl.NumberFormat("id").format(amount)},00</th>
              </tr>
              <tr>
                <th>{selectedAccount}</th>
                <th>{destinationAccount}</th>
                <th>
                  <span className="text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900">
                    + Biaya Admin
                  </span>
                  IDR {biayaAdmin}
                </th>
              </tr>
              <br />
              <tr>
                <td></td>
                <td className="border-t-4">TOTAL</td>
                <th className="border-t-4">
                  IDR{" "}
                  {new Intl.NumberFormat("id").format(
                    Number(amount) + biayaAdmin
                  )}
                  ,00
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <p className="bg-blue-800 text-lg font-bold text-white p-3 rounded-md">
            Informasi Transaksi
          </p>
          <table className="relative overflow-x-auto table-auto w-[100%]">
            <thead className="text-left">
              <tr>
                <td>Catatan</td>
                <th>{note}</th>
                <td colSpan={2} className="w-40"></td>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>Waktu Transfer</td>
                <th>Sekarang</th>
                <td colSpan={2} className="w-40"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className="bg-[#B3B3B3] text-lg font-semibold text-white py-3 px-4 rounded-2xl hover:bg-[#333999]"
            onClick={handleOpenModal}
          >
            <div className="flex items-center space-x-3">
              <p>Konfirmasi & Transfer</p>
              <FiArrowRightCircle className="text-2xl" />
            </div>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Masukkan PIN Anda</h2>
            <form onSubmit={handlePinSubmit}>
              <input
                type="password"
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={pin}
                onChange={handlePinChange}
                maxLength="6"
                placeholder="Masukkan PIN Rekening"
                required
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                  onClick={handleCloseModal}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailTransfer;
