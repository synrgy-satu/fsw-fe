import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiStar,
  FiCreditCard,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

const Sidebar = () => {
  const [isTransaksiOpen, setTransaksiOpen] = useState(false);
  const [isPengaturanOpen, setPengaturanOpen] = useState(false);

  const location = useLocation(); // Get the current location

  const toggleTransaksiDropdown = () => {
    setTransaksiOpen(!isTransaksiOpen);
  };

  const togglePengaturanDropdown = () => {
    setPengaturanOpen(!isPengaturanOpen);
  };

  const isActive = (path) =>
    location.pathname === path ? "bg-[#272D87] text-[#F7F8FC]" : "";

  return (
    <div className="w-72 h-screen bg-[#333999] text-white flex flex-col overflow-y-auto scrollbar-hide">
      <div className="px-4">
        {/* Logo and Greeting */}
        <div className="px-6 py-4">
          <img src="/images/logo-user-portal.png" alt="Logo" />
          <div className="mt-12">
            <p className="text-xs font-semibold">Selamat Datang</p>
            <p className="text-base font-bold">[User Name]</p>
            <p className="text-center text-xs font-normal text-[#C6C8EC]">
              Terakhir Login: Jumat, 26 Juli 2024 16:34 WIB
            </p>
          </div>
          <hr className="my-2 border-white/25" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-6">
        <Link
          to="/portal"
          className={`flex items-center py-3 px-6 text-base font-normal rounded-lg ${isActive(
            "/portal"
          )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
        >
          <FiHome className="mr-4 text-lg" /> Beranda
        </Link>
        <Link
          to="/portal/favorites"
          className={`flex items-center py-3 px-6 text-base font-normal rounded-lg ${isActive(
            "/portal/favorites"
          )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
        >
          <FiStar className="mr-4 text-lg" /> Favorit
        </Link>
        <Link
          to="/portal/savings"
          className={`flex items-center py-3 px-6 text-base font-normal rounded-lg ${isActive(
            "/portal/savings"
          )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
        >
          <FiCreditCard className="mr-4 text-lg" /> Tabungan
        </Link>
        <div className="relative">
          <button
            onClick={toggleTransaksiDropdown}
            className={`flex items-center justify-between w-full py-3 px-6 text-base font-normal rounded-lg ${
              isActive("/portal/transfer") ||
              isActive("/portal/bills") ||
              isActive("/portal/purchases") ||
              isActive("/portal/mutasi-rekening")
            } hover:font-bold hover:bg-[#272D87] focus:font-bold`}
          >
            <div className="flex items-center">
              <FiCreditCard className="mr-4 text-lg" /> Transaksi
            </div>
            <FiChevronDown
              className={`transition-transform ${
                isTransaksiOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isTransaksiOpen && (
            <div className="ml-8 mt-1">
              <Link
                to="/portal/transfer"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/transfer"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Transfer
              </Link>
              <Link
                to="/portal/bills"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/bills"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Tagihan
              </Link>
              <Link
                to="/portal/purchases"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/purchases"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Pembelian
              </Link>
              <Link
                to="/portal/mutasi-rekening"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/mutasi-rekening"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Mutasi Rekening
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={togglePengaturanDropdown}
            className={`flex items-center justify-between w-full py-3 px-6 text-base font-normal rounded-lg ${
              isActive("/portal/account-privacy") ||
              isActive("/portal/help-center") ||
              isActive("/portal/about")
            } hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
          >
            <div className="flex items-center">
              <FiSettings className="mr-4 text-lg" /> Pengaturan
            </div>
            <FiChevronDown
              className={`transition-transform ${
                isPengaturanOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isPengaturanOpen && (
            <div className="ml-8 mt-1">
              <Link
                to="/portal/account-privacy"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/account-privacy"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Akun dan Privasi
              </Link>
              <Link
                to="/portal/help-center"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/help-center"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Pusat Bantuan
              </Link>
              <Link
                to="/portal/about"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/about"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Tentang
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
