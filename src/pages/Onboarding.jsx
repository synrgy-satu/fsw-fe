import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import satuDigibank from "../../public/images/satuDigibank.png";
import satuMbanking from "../../public/images/satuMbanking.png";
import appStore from "../../public/images/appStore.png";
import playStore from "../../public/images/googlePlay.png";
// import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className="max-w-[1440px] container mx-auto">
      {/* first section */}
      <div class="h-[989px] bg-right bg-no-repeat bg-[url('../../public/images/imgHeader.png')]">
        <Navbar />
        <section className="mt-[380px] ml-20">
          <h1 className="w-[610px] font-[800] text-[56px] leading-[56px] text-blue-900">
            Lebih Mudah <br /> Akses Satu Digibank Tanpa Harus ke Bank
          </h1>
          <p className="mt-5 mb-6 font-[400] text-xl">
            Akses Layanan Perbankan 24 Jam <br /> Tanpa Kendala
          </p>
          <img className="mb-6" src={satuDigibank} alt="" />
          <button className="w-[143px] px-4 py-2 text-md bg-blue-900 text-white font-semibold rounded-full">
            Mulai
          </button>
        </section>
      </div>

      {/* Second section */}
      <div className="mt-[161px] h-[1029px] bg-left bg-no-repeat bg-[url('../../public/images/imgFooter.png')]">
        <div className="flex-1 flex items-center justify-end">
          <section className="mt-[200px] mr-20">
            <h1 className="text-right rtl:text-left w-[620px] font-[800] text-[56px] leading-[56px] text-blue-900">
              Pelayanan Lengkap <br /> SATU Mobile Banking <br /> Dalam
              Genggaman
            </h1>
            <p className="text-right mt-5 mb-6 font-[400] text-xl">
              Akses Layanan Perbankan 24 Jam <br /> Tanpa Kendala
            </p>
            <div className="flex justify-end">
              <img className=" mb-6" src={satuMbanking} alt="" />
            </div>
            <div className="mt-4">
              <div className="flex justify-end space-x-4 mt-4">
                <img
                  src={appStore}
                  alt="App Store"
                  className="w-30 h-10 object-cover"
                />
                <img
                  src={playStore}
                  alt="Google Play"
                  className="w-30 h-10 object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
