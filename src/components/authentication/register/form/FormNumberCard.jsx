import arrow from "../../../../assets/images/arrow.png";
import arrow1 from "../../../../assets/images/arrow1.png";
import logoForm from "../../../../assets/images/logoForm.png";
import { useState, useEffect } from "react";

const FormNumberCard = () => {
  const [numberCard, setNumberCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isNumberCard, setIsNumberCard] = useState(false);

  // Validation Number Card Function
  useEffect(() => handleNumberCardValidation());

  const handleNumberCardValidation = () => {
    if (numberCard.length == 16) {
      setIsNumberCard(true);
    } else {
      setIsNumberCard(false);
    }
  };

  return (
    <div>
      {" "}
      <form action="">
        <div className="flex flex-col w-[100%] justify-center items-center font-base font-normal ">
          <img src={logoForm} alt="" className="w-[145px] my-8" />
          <div className="mt-4 w-[85%]">
            <label
              htmlFor="numberCard"
              className="text-base font-normal text-[#000000]"
            >
              16 Digit Nomor Kartu SATU
            </label>
            <input
              id="numberCard"
              name="numberCard"
              type="text"
              required
              autoComplete="numberCard"
              className="w-[360px] h-[48px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
              placeholder="Masukkan Nomor Kartu"
              value={numberCard}
              onChange={(e) => setNumberCard(e.target.value)}
            />
          </div>
          {isNumberCard || numberCard == "" ? (
            <></>
          ) : (
            <div className="flex w-[85%]">
              <p className="text-xs text-[#CB3A31] mt-1">
                *Format nomor kartu salah!
              </p>
            </div>
          )}

          <div className="mt-5 w-[85%]">
            <label htmlFor="activeCard" className="text-base font-normal">
              Masa Aktif
            </label>
            <div className="flex flex-row w-[360px] justify-between">
              <input
                id="activeCardMonth"
                name="activeCardMonth"
                type="text"
                required
                autoComplete="activeCardMonth"
                className="w-[173px] h-[45px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
                placeholder="Bulan"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                id="activeCardYear"
                name="activeCardYear"
                type="text"
                required
                autoComplete="activeCardYear"
                className="w-[173px] h-[45px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
                placeholder="Tahun"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 flex w-[85%] items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-[16px] h-[16px] me-2"
            />
            <p className="text-sm">
              Saya Menyetujui{" "}
              <span className="text-[#333999] font-bold">
                Aturan Kebijakan dan Privasi
              </span>
            </p>
          </div>
          {isNumberCard && month && year ? (
            <button
              type="submit"
              className="w-[85%] h-[48px] bg-[#333999] hover:bg-[#212674] transition duration-300 mt-10 flex justify-center items-center text-white rounded-lg"
            >
              <p className="me-2 text-base font-bold">Daftar</p>
              <img src={arrow1} alt="" className="text-white" />
            </button>
          ) : (
            <button
              type="submit"
              className="w-[85%] h-[48px] bg-[#E6E6E6] mt-10 flex justify-center items-center text-white rounded-lg"
              disabled
            >
              <p className="me-2 text-base text-[#808080] font-bold">Daftar</p>
              <img src={arrow} alt="" className="text-white" />
            </button>
          )}

          <div className="mt-2 mb-8 w-[85%] flex justify-center items-center">
            <p className="text-base font-normal text-[#000000]">
              Sudah punya akun?{" "}
              <a href="#" className="font-bold text-[#333999]">
                Masuk di sini
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormNumberCard;
