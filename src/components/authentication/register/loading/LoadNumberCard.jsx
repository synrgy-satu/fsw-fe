import loadNumberCardIllustration from "../../../../assets/images/6.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoadNumberCard = ({ verifNumber }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (verifNumber) {
        navigate("/register/verifnumber");
      } else {
        navigate("/register/notVerifnumber");
      }
    }, 6500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col py-4 justify-center items-center">
      <img src={loadNumberCardIllustration} alt="" className="w-[285px]" />
      <h1 className="font-bold text-2xl text-[#333999] text-center">
        Sedang memverifikasi
      </h1>
      <div className="flex justify-center">
        <p className="font-bold text-2xl text-[#333999] text-center mb-5">
          nomor kartu
        </p>
        <div className="flex ms-2 font-bold text-2xl text-[#333999] text-center">
          <div className="animate-bounce h-[25%]"> .</div>
          <div
            className="animate-bounce h-[25%]"
            style={{ animation: "bounce .99s infinite" }}
          >
            {" "}
            .
          </div>
          <div
            className="animate-bounce h-[25%]"
            style={{ animation: "bounce .98s infinite" }}
          >
            {" "}
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadNumberCard;
