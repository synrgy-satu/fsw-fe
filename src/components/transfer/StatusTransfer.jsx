import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FiDownload, FiHome } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import moment from "moment";
import html2pdf from "html2pdf.js";
// import ReactToPrint from "react-to-print";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import MyDocument from "../mutation/MutationDocument";

const StatusTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const componentRef = useRef();
  const { userInfo } = useAuth();
  const {
    selectedAccount,
    destinationAccount,
    amount,
    note,
    referenceNumber,
    biayaAdmin,
    dateTransaction,
    cardName,
  } = location.state || {};

  const handleStars = (number) => {
    const numberString = number.toString();
    const firstEight = numberString.slice(0, 8);
    const starredString =
      firstEight.replace(/\d/g, "*") + numberString.slice(8);
    return starredString;
  };

  const handleDownloadPdf = () => {
    const element = componentRef.current;
    const opt = {
      margin: 0,
      filename: `bukti_transfer_ke_${cardName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  const isoString = dateTransaction;
  const formatedDate = moment(isoString).format("DD MMMM YYYY, HH:mm:ss");

  useEffect(() => {
    if (!selectedAccount) {
      navigate("../transfer");
    }
  }, []);
  return (
    <>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              aria-label="Transaksi Page"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 font-bold text-[#333999] hover:text-blue-600 md:ms-2"
                aria-label="Transfer Page"
              >
                Transfer
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#8C91D9]" aria-hidden="true"></div>

      <div className="bg-white p-10 rounded-xl shadow-md mx-auto mt-10 leading-8">
        <img src="/images/satu.png" alt="Logo Satu Bank" />
        <div className="flex mt-2">
          <img src="/images/bxs_badge-check.svg" alt="Badge check icon" />
          <h2 className="ml-2 text-2xl font-bold">Transfer Berhasil</h2>
        </div>
        <p>Simpan bukti transfer sebagai referensi Anda.</p>
        <div className="mt-3">
          <table
            className="relative overflow-x-auto table-auto w-[100%]"
            role="table"
          >
            <thead className="text-left" role="rowgroup">
              <tr role="row">
                <th role="columnheader">Rekening Tujuan</th>
                <th role="columnheader">Nominal Transfer</th>
              </tr>
            </thead>
            <tbody className="text-left" role="rowgroup">
              <tr role="row">
                <td role="cell" className="uppercase">
                  {cardName}
                </td>
                <td role="cell">
                  IDR {new Intl.NumberFormat("id").format(amount)},00
                </td>
              </tr>
              <tr role="row">
                <td role="cell">Bank SATU {destinationAccount}</td>
                <td role="cell">
                  <span
                    className="text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900"
                    aria-live="polite"
                    role="alert"
                  >
                    + Biaya Admin
                  </span>
                  IDR 0
                </td>
              </tr>
              <tr role="row">
                <td role="cell" className="border-t-4">
                  TOTAL
                </td>
                <td role="cell" className="border-t-4">
                  IDR{" "}
                  {new Intl.NumberFormat("id").format(
                    Number(amount) + biayaAdmin
                  )}
                  ,00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <p
            className="bg-blue-800 text-lg font-bold text-white p-3 rounded-md"
            role="alert"
            aria-live="polite"
          >
            Informasi Transaksi
          </p>
          <table
            className="relative overflow-x-auto table-auto w-[100%]"
            role="table"
          >
            <thead className="text-left" role="rowgroup">
              <tr role="row">
                <td role="cell">Dari Rekening</td>
                <th role="columnheader">
                  : {handleStars(selectedAccount)} ({userInfo?.username})
                </th>
                <td role="cell" colSpan={2} className="w-40"></td>
              </tr>
            </thead>
            <tbody className="text-left" role="rowgroup">
              <tr role="row">
                <td role="cell">Waktu Transaksi</td>
                <th role="columnheader">: {formatedDate}</th>
                <td role="cell" colSpan={2} className="w-40"></td>
              </tr>
              <tr role="row">
                <td role="cell">Catatan</td>
                <th role="columnheader">: {note}</th>
                <td role="cell" colSpan={2} className="w-40"></td>
              </tr>
              <tr role="row">
                <td role="cell">Nomor Referensi</td>
                <th role="columnheader">: {referenceNumber}</th>
                <td role="cell" colSpan={2} className="w-40"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row-reverse">
          <button
            onClick={handleDownloadPdf}
            className="bg-[#B3B3B3] text-lg font-semibold text-white py-3 px-4 rounded-2xl hover:bg-[#333999]"
            aria-label="Download proof of transfer"
          >
            <div className="flex items-center space-x-3">
              <p>Unduh Bukti Transfer</p>
              <FiDownload className="text-2xl" />
            </div>
          </button>

          <Link to="/portal" className="mr-3">
            <button
              type="submit"
              className="text-lg font-semibold text-blue-gsm-100 py-3 px-4 rounded-2xl outline"
              aria-label="Return to home"
            >
              <div className="flex items-center space-x-3">
                <p>Beranda</p>
                <FiHome className="text-2xl" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* print */}
      <div
        ref={componentRef}
        className=" bg-white p-10 rounded-xl shadow-md mx-auto mt-10 leading-8"
      >
        <img src="/images/headerSatu.png" alt="Logo Satu Bank" />
        <div className="mt-3">
          <div className="relative overflow-x-auto shadow-md rounded-sm">
            <h2 className="bg-blue-gsm-100 p-5 text-white text-lg font-bold">
              BUKTI TRANSFER ONLINE
            </h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-600">
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Waktu Transaksi
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : {formatedDate}
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Nomor Referensi
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : {referenceNumber}
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Dari Rekening
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : {handleStars(selectedAccount)} ({userInfo?.username})
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Rekening Tujuan
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900"></td>
                </tr>
                <tr className="bg-gray-50 border-">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    <p className="ml-5">Nomor Rekening</p>
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : {destinationAccount}
                  </td>
                </tr>
                <tr className="bg-gray-50 border-">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    <p className="ml-5">Nama Penerima</p>
                  </th>
                  <td className="uppercase px-6 py-4 font-medium text-base text-gray-900">
                    : {cardName}
                  </td>
                </tr>
                <tr className="bg-gray-50 border-">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    <p className="ml-5">Nama Bank</p>
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : BANK SATU
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Nominal Transfer
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : IDR {new Intl.NumberFormat("id").format(amount)},00
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Biaya
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : IDR {new Intl.NumberFormat("id").format(biayaAdmin)},00
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Jenis Transfer
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : Transfer Sekarang
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-base whitespace-nowrap"
                  >
                    Status
                  </th>
                  <td className="px-6 py-4 font-medium text-base text-gray-900">
                    : Transaksi Berhasil
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusTransfer;
