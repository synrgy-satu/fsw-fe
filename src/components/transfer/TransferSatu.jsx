import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

const TransferSatu = () => {
  const handleSubmit = async (event) => {
    event.preventDefault;
  };

  const styleOption = {
    padding: "28px",
    backgroundColor: "white",
    color: "#333",
  };
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

      <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Transfer</h2>
        <p className="mb-8 text-base font-normal text-[#4D4D4D]">
          Pilih salah satu kategori di bawah ini untuk melanjutkan transaksi
          Anda.
        </p>
        <form>
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
              <select
                id="sumber-rekening"
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Pilih nomor rekening</option>
                {/* Tambahkan opsi lain di sini */}
              </select>
            </div>
            <p className="text-lg font-bold">
              IDR 4.123.123,00 <br />{" "}
              <span className="text-base font-normal">Saldo Tersedia</span>
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
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan Nomor Rekening"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label for="nominal-tf" className="block font-bold text-lg mb-1">
                Nominal Transfer
              </label>
              <p>Masukkan nominal transfer untuk transaksi </p>
            </div>
            <div className="col-span-1">
              <input
                id="nominal-tf"
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="IDR"
              ></input>
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
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan Catatan"
              ></input>
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
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              >
                <option style={styleOption}>Pilih Waktu Transfer</option>
                <option value="semua">Semua</option>
                <option value="transaksi-keluar">Transaksi keluar</option>
                <option value="transaksi-masuk">Transaksi masuk</option>
                {/* Tambahkan opsi lain di sini */}
              </select>
            </div>
          </div>

          <div className="flex flex-row-reverse">
            <Link to="./detail-tf">
              <button
                type="submit"
                className="bg-[#B3B3B3] text-lg font-semibold text-white py-3 px-4 rounded-2xl hover:bg-[#333999]"
              >
                <div className="flex items-center space-x-3">
                  <p>Verifikasi Detail Transfer</p>
                  <FiArrowRightCircle className="text-2xl" />
                </div>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransferSatu;
