import arrow1 from "../../../../assets/images/arrow1.png";
import arrow from "../../../../assets/images/arrow.png";
import logoForm from "../../../../assets/images/logoForm.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const FormEmailNumber = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const [emailUsed, setEmailUsed] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [number, setNumber] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const secure = () => {
      try {
        if (!localStorage.getItem("cardNumber")) {
          navigate("/register/");
        }
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        return;
      }
    };
    secure();
  }, []);

  // Validation Email & Number Function
  useEffect(() => handleValidationEmailNumber());

  const handleValidationEmailNumber = () => {
    // for Email
    if (validator.isEmail(email)) {
      if (email.match("@gmail.com")) {
        setIsEmail(true);
      }
    } else {
      setIsEmail(false);
    }
    // for Number
    if (
      number[0] == "0" &&
      number[1] == "8" &&
      number.length <= 13 &&
      number.length >= 11
    ) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let usedEmail;

    // Add Email & Number Telp to Local Storage
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    try {
      await axios
        .get(`https://satu.cekrek.shop/api/v1/auth/checkEmail/${email}`, {
          cardNumber: Number(localStorage.getItem("cardNumber")),
          month: Number(localStorage.getItem("month")),
          year: Number(localStorage.getItem("year")),
        })
        .then((res) => {
          // Add Number Card to Local Storage
          usedEmail = res.data.data;
        });
    } catch (error) {
      console.log(error);
    }
    if (usedEmail == "Email used") {
      setEmailUsed(true);
    } else {
      setEmailUsed(false);
      setLoading(true);
    }
  };

  return (
    <>
      <form action="">
        <div className="flex flex-col w-[100%] justify-center items-center font-base font-normal ">
          <img src={logoForm} alt="" className="w-[145px] mt-8 mb-4" />
          <div className="mt-4 w-[85%]">
            <p className="font-semibold text-sm text-[#808080] mb-4">
              Masukkan alamat email dan nomor telepon untuk membuat akun{" "}
              <span className="text-[#333999]">Digibank SATU</span>
            </p>
            <label
              htmlFor="email"
              className="text-base font-normal text-[#000000]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-[100%] md:w-[360px] h-[48px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmail || email == "" ? (
              <></>
            ) : (
              <p className="text-xs text-[#CB3A31] mt-1">
                *Format email salah!
              </p>
            )}
            {emailUsed ? (
              <p className="text-xs text-[#CB3A31] mt-1">
                *Email Telah Digunakan!
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-5 w-[85%]">
            <label htmlFor="activeCard" className="text-base font-normal">
              Nomor Telepon
            </label>
            <div className="flex flex-row md:w-[360px] justify-between">
              <input
                id="numberTelp"
                name="numberTelp"
                type="text"
                required
                autoComplete="numberTelp"
                className="w-[100%] md:w-[360px] h-[48px] mt-2 p-3 bg-[#F3F3F3] text-[#000000] font-semibold text-base rounded-lg border border-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none  focus:ring-[#333999] focus:ring-2"
                placeholder="Masukkan Nomor Telepon"
                maxLength={13}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {isNumber || number == "" ? (
              <></>
            ) : (
              <p className="text-xs text-[#CB3A31] mt-1">
                *Format nomor telepon salah!
              </p>
            )}
          </div>
          {isEmail && isNumber ? (
            <button
              onClick={handleSubmit}
              className="w-[85%] h-[48px] bg-[#333999] hover:bg-[#212674] transition duration-300 mt-10 mb-10 flex justify-center items-center text-white rounded-lg"
            >
              <p className="me-2 text-base font-bold">Daftar</p>
              <img src={arrow1} alt="" className="text-white" />
            </button>
          ) : (
            <button
              type="submit"
              className="w-[85%] h-[48px] bg-[#E6E6E6] mt-10 mb-10 flex justify-center items-center text-white rounded-lg"
              disabled
            >
              <p className="me-2 text-base text-[#808080] font-bold">Daftar</p>
              <img src={arrow} alt="" className="text-white" />
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormEmailNumber;
