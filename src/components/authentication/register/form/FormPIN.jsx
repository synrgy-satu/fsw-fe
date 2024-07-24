import arrow1 from "../../../../assets/images/arrow1.png";
import logoForm from "../../../../assets/images/logoForm.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState, useEffect } from "react";

const FormPIN = () => {
  const [PIN, setPIN] = useState("");
  const [confPIN, setConfPIN] = useState("");
  const [type, setType] = useState("password");
  const [confType, setConfType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [confIcon, setConfIcon] = useState(eyeOff);
  const [isMatch, setIsMatch] = useState(true);

  // Hide & Show PIN Toggle
  const handlePINToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleConfPINToggle = () => {
    if (confType === "password") {
      setConfIcon(eye);
      setConfType("text");
    } else {
      setConfIcon(eyeOff);
      setConfType("password");
    }
  };

  // Match PIN Function
  useEffect(() => handleMatchPIN());

  const handleMatchPIN = () => {
    if (PIN !== confPIN) {
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
          <p className="font-semibold text-sm text-[#808080] mb-4">
            Atur PIN M-Banking untuk bertransaksi di dalam{" "}
            <span className="text-[#333999]">Digibank SATU</span>
          </p>
          <label htmlFor="pin" className="text-base font-normal text-[#000000]">
            Atur 6-Digit PIN Digibank
          </label>
          <div className="flex relative">
            <input
              id="pin"
              name="pin"
              type={type}
              required
              autoComplete="pin"
              className="w-[360px] h-[48px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
              placeholder="Masukkan PIN"
              value={PIN}
              onChange={(e) => setPIN(e.target.value)}
            />
            <span
              classname="flex justify-center items-center"
              onClick={handlePINToggle}
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
          <label htmlFor="confPin" className="text-base font-normal">
            Konfirmasi PIN Digibank
          </label>
          <div className="flex relative">
            <input
              id="pin"
              name="pin"
              type={confType}
              required
              autoComplete="pin"
              className="w-[100%] h-[45px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
              placeholder="Konfirmasi PIN"
              value={confPIN}
              onChange={(e) => setConfPIN(e.target.value)}
            />
            <span
              classname="flex justify-center items-center"
              onClick={handleConfPINToggle}
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
            <p className="text-xs text-[#CB3A31] mt-1">*PIN tidak sama!</p>
          )}
        </div>
        {isMatch && PIN ? (
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

export default FormPIN;
