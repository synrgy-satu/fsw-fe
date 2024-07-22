import Navbar from "../../components/authentication/login/Navbar";
import InputLabel from "../../components/authentication/login/InputLabel";
import TextInput from "../../components/authentication/login/TextInput";

import hero from "../../../public/images/hero-login.png";
import logo from "../../../public/images/logoTagLine.png";

export default function Login() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <Navbar />
      <div className="sm:w-full custom-radial-gradient">
        <div className="grid grid-cols-2 gap-2 pb-12">
          <div className="md:ms-16">
            <div className="flex justify-center">
              <img className="w-3/5" src={hero} alt="" />
            </div>
            <div className="font-extrabold text-6xl text-white">
              Masuk Digibank Individu
            </div>
            <div className="text-2xl text-white mt-3">
              Nikmati kemudahan internet banking dalam satu aplikasi
            </div>
          </div>
          <div className="flex justify-center p-8">
            <div class="w-full max-w-sm py-2 px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#">
                <div className="flex justify-center">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <InputLabel for="email">Email</InputLabel>
                  <TextInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan Email"
                    required
                  />
                </div>
                <div>
                  <InputLabel for="password">Password</InputLabel>
                  <TextInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Masukkan Kata Sandi"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-[#333999] hover:bg-blue-800 font-bold rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <div className="flex justify-center">
                    <p className="mr-2">Masuk</p>
                    <div>
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </button>
                <div className="flex justify-center">
                  <a
                    href="#"
                    class="font-bold text-[#333999] dark:text-blue-500"
                  >
                    Lupa Kata Sandi?
                  </a>
                </div>
                <div className="border-t-2 border-[#C6C8EC]"></div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Belum Punya Akses SATU Digibank?
                </div>
                <button
                  href="#"
                  class="w-full text-[##333999] border border-[#333999] hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Mendaftar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
