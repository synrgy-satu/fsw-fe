import ilustrasiRegisterSuccess from "../../../assets/images/3.png";
import arrow2 from "../../../assets/images/arrow2.png";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <div
      className="max-w-[1440px] h-[100vh] container bg-[#333999] flex flex-col justify-center items-center"
      style={{ fontFamily: "Open Sans" }}
    >
      <img src={ilustrasiRegisterSuccess} alt="" className="w-[280px]" />
      <h1 className="text-4xl text-white font-bold text-center">
        Pendaftaran Berhasil!
      </h1>
      <p className="text-xl text-white font-semibold mt-2">
        Silahkan masuk untuk melanjutkan
      </p>
      <Link
        to="/register/email"
        className="w-[280px] h-[48px] bg-white hover:bg-blue-50 transition duration-300 mt-5 flex justify-center items-center text-white rounded-lg"
      >
        <p className="me-2 text-base text-[#333999] font-bold">Masuk</p>
        <img src={arrow2} alt="" className="text-white" />
      </Link>
    </div>
  );
};

export default RegisterSuccess;
