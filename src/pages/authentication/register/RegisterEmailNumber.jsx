import logoText from "../../../assets/images/logoText.png";
import dekorasiMask from "../../../assets/images/dekorasimask.png";
import clock from "../../../assets/images/clock.png";
import maps from "../../../assets/images/maps.png";
import protect from "../../../assets/images/protect.png";
import ilustrasi1 from "../../../assets/images/ilustrasi1.png";
import ilustrasi2 from "../../../assets/images/ilustrasi2.png";
import ilustrasi3 from "../../../assets/images/ilustrasi3.png";
import { useState } from "react";

// Component
import FormEmailNumber from "../../../components/authentication/register/form/FormEmailNumber";
import LoadEmailNumber from "../../../components/authentication/register/loading/LoadEmailNumber";
const RegisterEmailNumber = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div
        className="w-[100%] md:max-w-[1440px] container bg-[#333999]"
        style={{ fontFamily: "Open Sans" }}
      >
        <img src={dekorasiMask} alt="" className="absolute right-0 top-0" />
        <div className="flex flex-col lg:flex-row items-center justify-between mx-6">
          <div className="basis-1/2 w-[100%] lg:w-[60%] text-white mt-5">
            <div className="container-head-text">
              <h1 className="text-[32px] md:text-[52px] font-bold md:font-extrabold">
                Selamat Datang!
              </h1>
              <p className="text-[24px] md:text-[28px] font-normal">
                Nikmati kemudahan internet banking dalam
              </p>
              <div className="flex flex-row items-center text-[24px] md:text-[28px] font-normal">
                <p>satu aplikasi</p>
                <img
                  src={logoText}
                  alt=""
                  className="ms-2 w-[180px] md:w-[200px] h-[32px]"
                />
              </div>
            </div>
            <div className="relative w-[100%] hidden md:flex md:h-[680px] ">
              <img
                src={ilustrasi2}
                alt=""
                className="absolute z-0 w-[100px] md:w-[400px] -rotate-12"
              />
              <img
                src={ilustrasi3}
                alt=""
                className="absolute z-0 -top-16 left-96 w-[60px] md:w-[210px] rotate-12"
              />
              <img
                src={ilustrasi1}
                alt=""
                className="absolute z-2 -top-12 left-10 w-[110px] md:w-[580px]"
              />
            </div>
          </div>
          <div className="basis-2/2 w-[100%] md:w-[40%] flex flex-col mt-4 md:mt-0 justify-center items-center">
            <div className="container-form w-[320px] md:w-[420px] bg-white rounded-3xl flex justify-center items-center shadow-md">
              {/* Component Form */}
              {loading ? (
                <LoadEmailNumber />
              ) : (
                <FormEmailNumber setLoading={setLoading} />
              )}
            </div>
            <div className="w-[100%] md:w-[420px] flex flex-row justify-between items-center my-5 lg:my-10 text-sm font-bold text-white">
              <div className="flex w-[100%] flex-col justify-center items-center">
                <img src={protect} alt="" className="w-[44px] h-[45px]" />
                <p className="text-center">Transaksi Aman</p>
              </div>
              <div className="flex w-[100%] flex-col justify-center items-center">
                <img src={clock} alt="" className="w-[45px] h-[45px]" />
                <p className="text-center">Cepat dan Mudah</p>
              </div>
              <div className="flex w-[100%] flex-col justify-center items-center">
                <img src={maps} alt="" className="w-[44px] h-[45px]" />
                <p className="text-center">Akses Di manapun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEmailNumber;
