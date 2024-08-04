import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

const DetailTransfer = () => {
  return (
    <>
      <div class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Transaksi
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-[#1A1A1A] mx-1"
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
                class="ms-1 font-bold text-[#333999] hover:text-blue-600 md:ms-2"
              >
                Transfer
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#8C91D9]"></div>

      <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10 leading-8">
        <h2 className="text-2xl font-bold mb-4">Verifikasi Detail Transfer</h2>
        <ul className="list-disc ml-4">
          <li>Pastikan semua informasi sudah benar.</li>
          <li>
            Gunakan link yang dikirimkan ke emial anda untuk melanjutkan
            transaksi
          </li>
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
                <th>Saver+</th>
                <th>Denny Sumargo</th>
                <th>IDR 1,000,000.00</th>
              </tr>
              <tr>
                <th>12991213145</th>
                <th>1299129999</th>
                <th>
                  <span class="text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900">
                    + Biaya Admin
                  </span>
                  IDR 0
                </th>
              </tr>
              <br />
              <tr>
                <td></td>
                <td className="border-t-4">TOTAL</td>
                <th className="border-t-4">IDR 1,000,000.00</th>
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
                <th>-</th>
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
          <Link to="./status-tf">
            <button
              type="submit"
              className="bg-[#B3B3B3] text-lg font-semibold text-white py-3 px-4 rounded-2xl hover:bg-[#333999]"
            >
              <div className="flex items-center space-x-3">
                <p>Konfirmasi & Transfer</p>
                <FiArrowRightCircle className="text-2xl" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailTransfer;
