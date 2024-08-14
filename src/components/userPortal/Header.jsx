import React from "react";
import { FiSearch, FiHeadphones, FiMail, FiLogOut } from "react-icons/fi";
import { BsFlag } from "react-icons/bs";
import { useAuth } from "../../context/authContext";
import LogoutPopup from "../authentication/popup/LogoutPopup";
import ExpiryWarningPopup from "../authentication/popup/ExpiryWarningPopup";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    logout,
    showPopup,
    setShowPopup,
    showWarningPopup,
    setShowWarningPopup,
  } = useAuth();

  const handleLogout = () => {
    logout();
    setShowPopup(false);
  };

  const handleKeepSession = () => {
    setShowWarningPopup(false); // Hide warning popup
  };

  return (
    <header className="h-16 bg-white text-white flex items-center justify-between px-4">
      {/* Search Bar */}
      <div className="flex-1 flex items-center mx-4">
        <label htmlFor="search-bar" className="sr-only">
          Cari di situs
        </label>
        <input
          id="search-bar"
          type="text"
          placeholder="Pencarian"
          className="w-2/3 py-2 px-4 rounded-lg text-black border-[#E6E6E6] border focus:outline-none"
          aria-label="Search"
        />
        <FiSearch className="ml-2 text-xl text-[#C6C8EC]" aria-hidden="true" />
      </div>

      {/* Button Group */}
      <div
        className="flex items-center space-x-4"
        role="group"
        aria-label="Navigasi utama"
      >
        <button
          className="p-3 rounded-2xl bg-[#333999] focus:outline-none"
          aria-label="Dukungan pelanggan"
        >
          <FiHeadphones className="text-xl" aria-hidden="true" />
        </button>
        <Link to="/portal/notification"
          className="p-3 rounded-2xl bg-[#333999] focus:outline-none"
          aria-label="Pesan"
        >
          <FiMail className="text-xl" aria-hidden="true" />
        </Link>
        <button
          className="p-3 rounded-2xl bg-[#333999] focus:outline-none"
          aria-label="Ubah Bahasa"
          aria-expanded="false"
        >
          <div className="flex items-center space-x-1">
            <span>ID</span>
            <BsFlag className="text-xl" aria-hidden="true" />
          </div>
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="p-3 rounded-2xl bg-[#333999] focus:outline-none"
          aria-label="Keluar"
        >
          <FiLogOut className="text-xl" aria-hidden="true" />
        </button>
      </div>

      {/* Logout Popup */}
      {showPopup && (
        <div
          role="dialog"
          aria-labelledby="logout-dialog-title"
          aria-modal="true"
        >
          <LogoutPopup
            onClose={() => setShowPopup(false)}
            onLogout={handleLogout}
          />
        </div>
      )}

      {/* Expiry Warning Popup */}
      {showWarningPopup && (
        <div
          role="dialog"
          aria-labelledby="expiry-warning-title"
          aria-live="assertive"
          aria-modal="true"
        >
          <ExpiryWarningPopup
            onClose={handleKeepSession}
            onLogout={handleLogout}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
