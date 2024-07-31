import verifNumberCardIllustration from "../../../../assets/images/ilustrasinotverified.png";
import arrow1 from "../../../../assets/images/arrow1.png";
import { Link } from "react-router-dom";

const NotVerifNumberCard = () => {
  return (
    <div className="flex flex-col py-4 justify-center items-center">
      <img
        src={verifNumberCardIllustration}
        alt=""
        className="w-[280px] h-[320px]"
      />
      <h1 className="font-bold text-xl md:text-2xl mx-2 md:mx-0 text-[#CB3A31] text-center">
        Nomor kartu tidak terverifikasi
      </h1>
      <p className="text-sm md:text-base font-normal text-center my-0">
        Oops! Silahkan periksa kembali <br />
        nomor kartu Anda
      </p>
      <Link
        to="/register"
        className="w-[80%] md:w-[100%] h-[48px] bg-[#333999] hover:bg-[#212674] transition duration-300 mt-8 mb-5 flex justify-center items-center text-white rounded-lg"
      >
        <img src={arrow1} alt="" className="text-white rotate-180" />
        <p className="ms-2 text-base font-bold">Kembali</p>
      </Link>
    </div>
  );
};

export default NotVerifNumberCard;
