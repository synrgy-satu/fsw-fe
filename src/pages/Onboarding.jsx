import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import imgHeader from "../assets/images/imgHeader.png";
import logo from "../assets/images/logoTagLine.png"
// import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className="max-w-[1440px] container mx-auto">
      <div class="h-[989px] bg-right bg-no-repeat bg-[url('./assets/images/imgHeader.png')]">
        <Navbar />
        <section className="mt-[380px] ml-20">
          <h1 className="w-[600px] font-[800] text-[56px] leading-[56px] text-blue-900">
            Lebih Mudah <br /> Akses Satu Digibank Tanpa Harus ke Bank
          </h1>
          <p className="mt-5 mb-6 font-[400] text-xl">
            Akses Layanan Perbankan 24 Jam <br /> Tanpa Kendala
          </p>
          <img className="mb-6" src={logo} alt="" />
          <button className="w-[143px] px-4 py-2 text-md bg-blue-900 text-white font-semibold rounded-full">
            Mulai
          </button>
        </section>
      </div>

      {/* first section */}

      {/* second section */}
      <section></section>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <button className="w-52 h-32 bg-cyan-500 text-white font-semibold rounded-lg">
              Login Individu
            </button>
            <button className="w-52 h-32 bg-cyan-500 text-white font-semibold rounded-lg">
              Login Bisnis
            </button>
          </div>
          <p className="text-gray-700">
            belum terdaftar internet banking?{" "}
            <Link to="/register" className="text-blue-500 underline">
              mendaftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
