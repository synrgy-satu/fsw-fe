import verifNumberCardIllustration from "../../../../assets/images/5.png";
import arrow1 from "../../../../assets/images/arrow1.png";
import { Link } from "react-router-dom";

const VerifNumberCard = () => {
  return (
    <div className="flex flex-col py-4 justify-center items-center">
      <img
        src={verifNumberCardIllustration}
        alt=""
        className="w-[280px] h-[320px]"
      />
      <h1 className="font-bold text-xl md:text-2xl text-[#00A052] text-center">
        Nomor kartu terverifikasi
      </h1>
      <p className="text-sm md:text-base font-normal text-center my-0">
        Selamat nomor kamu sudah terverifikasi, <br /> silahkan lanjut ke tahap
        berikutnya
      </p>
      <Link
        to="/register/email"
        className="w-[100%] h-[48px] bg-[#333999] hover:bg-[#212674] transition duration-300 mt-10 mb-5 flex justify-center items-center text-white rounded-lg"
      >
        <p className="me-2 text-base font-bold">Lanjut</p>
        <img src={arrow1} alt="" className="text-white" />
      </Link>
    </div>
  );
};

export default VerifNumberCard;
