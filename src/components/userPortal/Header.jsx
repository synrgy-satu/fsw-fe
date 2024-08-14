import React from "react";
import { FiSearch, FiHeadphones, FiMail, FiLogOut } from "react-icons/fi";
import { BsFlag } from "react-icons/bs";
import { useAuth } from "../../context/authContext";
import LogoutPopup from "../authentication/popup/LogoutPopup";
import ExpiryWarningPopup from "../authentication/popup/ExpiryWarningPopup";

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
        <input
          type="text"
          placeholder="Pencarian"
          className="w-2/3 py-2 px-4 rounded-lg text-black border-[#E6E6E6] border"
        />
        <FiSearch className="ml-2 text-xl text-[#C6C8EC]" />
      </div>

      {/* Button Group */}
      <div className="flex items-center space-x-4">
        <button className="p-3 rounded-2xl bg-[#333999] focus:outline-none">
          <FiHeadphones className="text-xl" />
        </button>
        <button className="p-3 rounded-2xl bg-[#333999] focus:outline-none">
          <FiMail className="text-xl" />
        </button>
        <button className="p-3 rounded-2xl bg-[#333999] focus:outline-none">
          <div className="flex items-center space-x-1">
            <span>ID</span>
            <BsFlag className="text-xl" />
          </div>
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="p-3 rounded-2xl bg-[#333999] focus:outline-none"
        >
          <FiLogOut className="text-xl" />
        </button>
      </div>

      {/* Logout Popup */}
      {showPopup && (
        <LogoutPopup
          onClose={() => setShowPopup(false)}
          onLogout={handleLogout}
        />
      )}

      {/* Expiry Warning Popup */}
      {showWarningPopup && (
        <ExpiryWarningPopup
          onClose={handleKeepSession}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
};

export default Header;
