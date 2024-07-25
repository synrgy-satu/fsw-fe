import arrow1 from "../../../../assets/images/arrow1.png";
import logoForm from "../../../../assets/images/logoForm.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState, useEffect } from "react";

const FormPassword = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [type, setType] = useState("password");
  const [confType, setConfType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [confIcon, setConfIcon] = useState(eyeOff);
  const [isMatch, setIsMatch] = useState(true);

  // Hide & Show Password Toggle
  const handlePasswordToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleConfPasswordToggle = () => {
    if (confType === "password") {
      setConfIcon(eye);
      setConfType("text");
    } else {
      setConfIcon(eyeOff);
      setConfType("password");
    }
  };

  // Match Password Function
  useEffect(() => handleMatchPassword());

  const handleMatchPassword = () => {
    if (password !== confPassword) {
      setIsMatch(false);
    } else {
      setIsMatch(true);
    }
  };

  return (
    <form action="">
      <div className="flex flex-col w-[100%] justify-center items-center font-base font-normal ">
        <img src={logoForm} alt="" className="w-[145px] my-8" />
        <div className="w-[85%]">
          <p className="font-semibold text-sm text-[#808080] mb-4 text-center">
            Atur sandi akun untuk masuk ke dalam{" "}
            <span className="text-[#333999]">Digibank SATU</span>
          </p>
          <label
            htmlFor="password"
            className="text-base font-normal text-[#000000]"
          >
            Atur Kata Sandi
          </label>
          <div className="flex relative">
            <input
              id="password"
              name="password"
              type={type}
              required
              autoComplete="current-password"
              className="w-[100%] md:w-[360px] h-[48px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
              placeholder="Masukkan Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              classname="flex justify-center items-center"
              onClick={handlePasswordToggle}
            >
              <Icon
                class="absolute top-4 right-3 text-[#939393]"
                icon={icon}
                size={25}
              />
            </span>
          </div>
        </div>
        <div className="mt-5 w-[85%]">
          <li>Password minimal terdiri dari 8 digit</li>
          <li>
            Pasword harus terdirid dari minimal 1 Huruf Kapital, 1 Huruf Kecil,1
            Angka Numerik, dan 1 Simbol
          </li>
        </div>
        <div className="mt-5 w-[85%]">
          <label htmlFor="activeCard" className="text-base font-normal">
            Konfirmasi Kata Sandi
          </label>
          <div className="flex relative">
            <input
              id="confPassword"
              name="confPassword"
              type={confType}
              required
              autoComplete="confPassword"
              className="w-[100%] md:w-[360px] h-[45px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
              placeholder="Konfirmasi Kata Sandi"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <span
              classname="flex justify-center items-center"
              onClick={handleConfPasswordToggle}
            >
              <Icon
                class="absolute top-4 right-3 text-[#939393]"
                icon={confIcon}
                size={25}
              />
            </span>
          </div>
          {isMatch ? (
            <></>
          ) : (
            <p className="text-xs text-[#CB3A31] mt-1">
              *Kata sandi tidak sama!
            </p>
          )}
        </div>
        {isMatch && password ? (
          <button
            type="submit"
            className="w-[85%] h-[48px] bg-[#333999] hover:bg-[#212674] transition duration-300 mt-10 mb-10 flex justify-center items-center text-white rounded-lg"
          >
            <p className="me-2 text-base font-bold">Lanjut</p>
            <img src={arrow1} alt="" className="text-white" />
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="w-[85%] h-[48px] bg-[#E6E6E6] mt-10 mb-10 flex justify-center items-center text-white rounded-lg"
          >
            <p className="me-2 text-base text-[#808080] font-bold">Lanjut</p>
            <img src={arrow1} alt="" className="text-white" />
          </button>
        )}
      </div>
    </form>
  );
};

export default FormPassword;
