import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CategoryTransfer = () => {
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
        <Link to="./tf-one">
          <div className="p-4 bg-[#ECEDF9] rounded-lg mb-4 flex flex-col w-96">
            <h2 className="text-xl font-semibold mb-4 text-blue-gsm-100">
              Transfer
            </h2>
            <i className="text-sm fa-solid fa-angle-right text-right -mt-5"></i>
            <p className="text-sm font-normal text-[#1A1A1A]">
              Lokal atau internasional, realtime atau terjadwal
            </p>
          </div>
        </Link>
        <Link to="./tf-all">
          <div className="p-4 bg-[#ECEDF9] rounded-lg mb-4 flex flex-col w-96">
            <h2 className="text-xl font-semibold mb-4 text-blue-gsm-100">
              Transfer Massal
            </h2>
            <i className="text-sm fa-solid fa-angle-right text-right -mt-5"></i>
            <p className="text-sm font-normal text-[#1A1A1A]">
              Transfer ke beberapa rekening sekaligus
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryTransfer;
