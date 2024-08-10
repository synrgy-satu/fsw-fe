import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";

const Onboarding = () => {
  return (
    <div className="max-w-[1440px] container mx-auto">
      {/* first section */}
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="/images/Ilustarsi 404.png" className="" alt="Ilustarsi 404" />
        <h2 className="font-bold text-5xl text-center text-[#333999] mb-3">
          Halaman Tidak Ditemukan!
        </h2>
        <p className="font-normal text-xl text-center text-[#1A1A1A] mb-10">
          Halaman yang kamu cari saat ini tidak tersedia
        </p>
        <Link
          to="/"
          className="w-[329.63px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center"
        >
          Kembali ke Halaman Awal
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
