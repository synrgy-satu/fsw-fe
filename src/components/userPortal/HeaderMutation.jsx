import React from "react";
import { FiArrowLeft, FiHeadphones, FiMail, FiLogOut } from "react-icons/fi";
import { BsFlag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const HeaderMutation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="h-16 bg-white text-white flex items-center justify-between px-4">
      {/* Back button */}
      <div className="flex-1 flex items-center mx-4">
        <button
          className="p-3 rounded-2xl bg-[#333999] focus:outline-none"
          onClick={handleBack}
        >
          <div className="flex items-center space-x-3">
            <FiArrowLeft className="text-xl" />
            <p>Kembali</p>
          </div>
        </button>
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
        <button className="p-3 rounded-2xl bg-[#333999] focus:outline-none">
          <FiLogOut className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default HeaderMutation;
