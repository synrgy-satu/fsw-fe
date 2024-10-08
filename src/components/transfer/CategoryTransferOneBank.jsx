// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from "react-router-dom";

const CategoryTransferOneBank = () => {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              aria-label="Go to Transaksi"
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
                aria-label="Go to Transfer"
              >
                Transfer
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="border mt-4 border-[#8C91D9]" aria-hidden="true"></div>

      <section
        className="bg-white p-10 rounded-xl shadow-md mx-auto mt-10"
        aria-labelledby="transfer-section-heading"
      >
        <h2 id="transfer-section-heading" className="text-2xl font-bold mb-4">
          Transfer
        </h2>
        <p className="mb-8 text-base font-normal text-[#4D4D4D]">
          Pilih salah satu kategori di bawah ini untuk melanjutkan transaksi
          Anda.
        </p>
        <h3 className="text-lg font-bold mb-4">Transfer</h3>
        <div className="flex flex-row">
          <div className="mr-2">
            <Link to="./satu">
              <div
                className="p-4 bg-[#ECEDF9] rounded-lg mb-4 flex flex-row w-96 justify-between"
                role="button"
                aria-labelledby="transfer-satu-heading"
                
              >
                <p
                  id="transfer-satu-heading"
                  className="text-base font-semibold text-blue-gsm-100"
                >
                  Transfer ke rekening SATU
                </p>
                <i
                  className="text-sm fa-solid fa-angle-right text-right mt-1"
                  aria-hidden="true"
                ></i>
              </div>
            </Link>
            <Link to="">
              <div
                className="p-4 bg-[#ECEDF9] rounded-lg mb-4 flex flex-row w-96 justify-between"
                role="button"
                aria-labelledby="transfer-luar-heading"
              >
                <p
                  id="transfer-luar-heading"
                  className="text-base font-semibold text-blue-gsm-100"
                >
                  Transfer ke luar negeri
                </p>
                <i
                  className="text-sm fa-solid fa-angle-right text-right mt-1"
                  aria-hidden="true"
                ></i>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div
                className="p-4 bg-[#ECEDF9] rounded-lg mb-4 flex flex-row w-96 justify-between"
                role="button"
                aria-labelledby="transfer-bank-lain-heading"
              >
                <p
                  id="transfer-bank-lain-heading"
                  className="text-base font-semibold text-blue-gsm-100"
                >
                  Transfer ke bank lain
                </p>
                <i
                  className="text-sm fa-solid fa-angle-right text-right mt-1"
                  aria-hidden="true"
                ></i>
              </div>
            </Link>
            <Link to="">
              <div
                className="p-4 bg-[#ECEDF9] rounded-lg mb-4 flex flex-row w-96 justify-between"
                role="button"
                aria-labelledby="transfer-rekening-ponsel-heading"
              >
                <p
                  id="transfer-rekening-ponsel-heading"
                  className="text-base font-semibold text-blue-gsm-100"
                >
                  Transfer ke rekening ponsel
                </p>
                <i
                  className="text-sm fa-solid fa-angle-right text-right mt-1"
                  aria-hidden="true"
                ></i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryTransferOneBank;
