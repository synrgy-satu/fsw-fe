import React from "react";
import { FiArrowLeft, FiHeadphones, FiMail, FiLogOut } from "react-icons/fi";
import { BsFlag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LogoutPopup from "../authentication/popup/LogoutPopup";
import ExpiryWarningPopup from "../authentication/popup/ExpiryWarningPopup";
import { Link } from "react-router-dom";

const HeaderMutation = () => {
  const {
    logout,
    showPopup,
    setShowPopup,
    showWarningPopup,
    setShowWarningPopup,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setShowPopup(false);
  };

  const handleKeepSession = () => {
    setShowWarningPopup(false); // Hide warning popup
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="h-16 bg-white text-white flex items-center justify-between px-4">
      {/* Back button */}
      <div className="flex-1 flex items-center mx-4">
        <button
          className="p-3 rounded-2xl bg-[#333999] hover:bg-[#272D87]"
          onClick={handleBack}
          aria-label="Kembali ke halaman sebelumnya"
        >
          <div className="flex items-center space-x-3">
            <FiArrowLeft className="text-xl" aria-hidden="true" />
            <p>Kembali</p>
          </div>
        </button>
      </div>

      {/* Button Group */}
      <div
        className="flex items-center space-x-4"
        role="group"
        aria-label="Navigasi utama"
      >
        <button
          className="p-3 rounded-2xl bg-[#333999] hover:bg-[#272D87]"
          aria-label="Dukungan pelanggan"
        >
          <FiHeadphones className="text-xl" aria-hidden="true" />
        </button>
        <Link
          to="/portal/notification"
          className="p-3 rounded-2xl bg-[#333999] hover:bg-[#272D87]"
          aria-label="notifikasi"
        >
          <FiMail className="text-xl" aria-hidden="true" />
        </Link>
        <button
          className="p-3 rounded-2xl bg-[#333999] hover:bg-[#272D87]"
          aria-label="Bahasa ID - Ubah Bahasa"
          aria-expanded="false"
        >
          <div className="flex items-center space-x-1">
            <span>ID</span>
            <BsFlag className="text-xl" aria-hidden="true" />
          </div>
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="p-3 rounded-2xl bg-[#333999] hover:bg-[#272D87]"
          aria-label="Log Out"
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

export default HeaderMutation;
