import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiCreditCard, FiChevronDown } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { PiNumberOneBold } from "react-icons/pi";
import { useAuth } from "../../context/authContext";

const Sidebar = () => {
  const [isTransaksiOpen, setTransaksiOpen] = useState(false);
  const [isSatuPortalOpen, setSatuPortalOpen] = useState(false);
  const [isPengaturanOpen, setPengaturanOpen] = useState(false);
  const { userInfo } = useAuth();

  const location = useLocation(); // Get the current location

  const toggleTransaksiDropdown = () => {
    setTransaksiOpen(!isTransaksiOpen);
  };

  const toggleSatuPortalDropdown = () => {
    setSatuPortalOpen(!isSatuPortalOpen);
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
            <p className="text-base font-bold">{userInfo?.fullName}</p>
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
          className={`flex items-center py-3 px-6 mb-5 text-base font-normal rounded-lg ${isActive(
            "/portal"
          )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
        >
          <GoHome className="mr-4 text-2xl" /> Beranda
        </Link>
        <Link
          to="/portal/favorites"
          className={`flex items-center py-3 px-6 my-5 text-base font-normal rounded-lg ${isActive(
            "/portal/favorites"
          )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
        >
          <MdFavoriteBorder className="mr-4 text-2xl" /> Favorit
        </Link>
        <Link
          to="/portal/savings"
          className={`flex items-center py-3 px-6 my-5 text-base font-normal rounded-lg ${isActive(
            "/portal/savings"
          )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
        >
          <FiCreditCard className="mr-4 text-2xl" /> Tabungan
        </Link>
        <div className="relative">
          <button
            onClick={toggleTransaksiDropdown}
            className={`flex items-center justify-between w-full py-3 px-6 mt-5 text-base font-normal rounded-lg ${
              isActive("/portal/transfer") ||
              isActive("/portal/transfer/tf-one") ||
              isActive("/portal/transfer/tf-one/satu") ||
              isActive("/portal/transfer/tf-one/satu/detail-tf") ||
              isActive("/portal/transfer/tf-all") ||
              isActive("/portal/bills") ||
              isActive("/portal/purchases") ||
              isActive("/portal/mutasi-rekening")
            } hover:font-bold hover:bg-[#272D87] focus:font-bold`}
          >
            <div className="flex items-center">
              <GrTransaction className="mr-4 text-2xl" /> Transaksi
            </div>
            <FiChevronDown
              className={`transition-transform ${
                isTransaksiOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isTransaksiOpen && (
            <div className="ml-8">
              <Link
                to="/portal/transfer"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${
                  isActive("/portal/transfer") ||
                  isActive("/portal/transfer/tf-one") ||
                  isActive("/portal/transfer/tf-all") ||
                  isActive("/portal/transfer/tf-one/satu") ||
                  isActive("/portal/transfer/tf-one/satu/detail-tf")
                } hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
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
            onClick={toggleSatuPortalDropdown}
            className={`flex items-center justify-between w-full py-3 px-6 mt-5 text-base font-normal rounded-lg ${
              isActive("/portal/qris") ||
              isActive("/portal/deposito") ||
              isActive("/portal/investasi")
            } hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
          >
            <div className="flex items-center">
              <PiNumberOneBold className="mr-4 text-2xl" /> Satu Portal
            </div>
            <FiChevronDown
              className={`transition-transform ${
                isSatuPortalOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isSatuPortalOpen && (
            <div className="ml-8">
              <Link
                to="/portal/qris"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/qris"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                QRIS
              </Link>
              <Link
                to="/portal/deposito"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/deposito"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Deposito
              </Link>
              <Link
                to="/portal/investasi"
                className={`block py-3 px-6 text-base font-normal rounded-lg ${isActive(
                  "/portal/investasi"
                )} hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
              >
                Investasi
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={togglePengaturanDropdown}
            className={`flex items-center justify-between w-full py-3 px-6 mt-5 text-base font-normal rounded-lg ${
              isActive("/portal/account-privacy") ||
              isActive("/portal/help-center") ||
              isActive("/portal/about")
            } hover:font-bold hover:bg-[#272D87] focus:font-bold focus:bg-[#272D87]`}
          >
            <div className="flex items-center">
              <RiSettings4Line className="mr-4 text-2xl" /> Pengaturan
            </div>
            <FiChevronDown
              className={`transition-transform ${
                isPengaturanOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isPengaturanOpen && (
            <div className="ml-8">
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
