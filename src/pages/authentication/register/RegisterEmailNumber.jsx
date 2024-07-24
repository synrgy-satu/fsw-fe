import logoText from "../../../assets/images/logoText.png";
import dekorasiMask from "../../../assets/images/dekorasimask.png";
import clock from "../../../assets/images/clock.png";
import maps from "../../../assets/images/maps.png";
import protect from "../../../assets/images/protect.png";
import ilustrasi1 from "../../../assets/images/ilustrasi1.png";
import ilustrasi2 from "../../../assets/images/ilustrasi2.png";
import ilustrasi3 from "../../../assets/images/ilustrasi3.png";

// Component
import FormEmailNumber from "../../../components/authentication/register/form/FormEmailNumber";
import LoadEmailNumber from "../../../components/authentication/register/loading/LoadEmailNumber";
const RegisterEmailNumber = () => {
  return (
    <>
      <div
        className="max-w-[1440px] container bg-[#333999]"
        style={{ fontFamily: "Open Sans" }}
      >
        <img src={dekorasiMask} alt="" className="absolute right-0 top-0" />
        <div className="flex flex-row justify-between mx-6">
          <div className="basis-1/2 w-[60%] text-white mt-5">
            <div className="container-head-text">
              <h1 className="text-[52px] font-extrabold">Selamat Datang!</h1>
              <p className="text-[28px] font-normal">
                Nikmati kemudahan internet banking dalam
              </p>
              <div className="flex flex-row items-center text-[28px] font-normal">
                <p>satu aplikasi</p>
                <img
                  src={logoText}
                  alt=""
                  className="ms-2 w-[200px] h-[32px]"
                />
              </div>
            </div>
            <div className="relative w-[100%] h-[680px] ">
              <img
                src={ilustrasi2}
                alt=""
                className="absolute z-0 w-[400px] -rotate-12"
              />
              <img
                src={ilustrasi3}
                alt=""
                className="absolute z-0 -top-16 right-0 w-[210px] rotate-12"
              />
              <img
                src={ilustrasi1}
                alt=""
                className="absolute z-2 -top-12 left-10 w-[580px]"
              />
            </div>
          </div>
          <div className="basis-2/2 w-[40%] flex flex-col justify-center">
            <div className="container-form w-[420px] bg-white rounded-3xl flex justify-center items-center shadow-md">
              {/* Component Form */}
              <FormEmailNumber />
              {/* <LoadEmailNumber /> */}
            </div>
            <div className="w-[420px] flex flex-row justify-between items-center my-10 text-sm font-bold text-white">
              <div className="flex flex-col justify-center items-center">
                <img src={protect} alt="" className="w-[44px] h-[45px]" />
                <p>Transaksi Aman</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={clock} alt="" className="w-[45px] h-[45px]" />
                <p>Cepat dan Mudah</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={maps} alt="" className="w-[44px] h-[45px]" />
                <p>Akses Di manapun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEmailNumber;
