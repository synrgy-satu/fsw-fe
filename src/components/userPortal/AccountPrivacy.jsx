import { useState } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useAuth } from "../../context/AuthContext";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const AccountPrivacy = () => {
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [isEditPIN, setIsEditPIN] = useState(false);
  const { userInfo } = useAuth();

  const handleEditPassword = (event) => {
    event.preventDefault();
    setIsEditPassword(!isEditPassword);
  };

  const handleEditPIN = (event) => {
    event.preventDefault();
    setIsEditPIN(!isEditPIN);
  };

  return (
    <>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Pengaturan
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-[#1A1A1A] mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 font-bold text-[#333999] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Akun dan Privasi
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#8C91D9]"></div>

      <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Akun dan Privasi</h2>

        <div className="flex flex-row gap-4 items-center mb-6">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="64" height="64" fill="url(#pattern0_2463_9401)" />
            <defs>
              <pattern
                id="pattern0_2463_9401"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_2463_9401"
                  transform="scale(0.0078125)"
                />
              </pattern>
              <image
                id="image0_2463_9401"
                width="128"
                height="128"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <h2 className="font-bold text-[#333999] text-2xl uppercase">
            {userInfo?.fullName}
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <form className="flex flex-row justify-between items-center p-4 rounded-lg border-2">
            <div className="flex flex-col ">
              <label htmlFor="email" className="font-bold text-lg">
                Alamat Email
              </label>
              <p>{userInfo?.emailAddress}</p>
            </div>
          </form>
          <form className="flex flex-row justify-between items-center p-4 rounded-lg border-2 w-full">
            {!isEditPassword ? (
              <>
                <div className="flex flex-col max-w-max">
                  <label htmlFor="password" className="font-bold text-lg">
                    Password
                  </label>
                  <p>Terakhir diubah pada 10 Januari 2024</p>
                </div>
                <button
                  className="text-[#B3B3B3] flex flex-row items-center"
                  onClick={handleEditPassword}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.53397 11.2468L3.27625 11.4225C2.5312 11.5266 1.90379 10.8688 2.04303 10.1295L2.26635 8.94369C2.34174 8.5434 2.53755 8.17568 2.8276 7.88969L10.0764 0.742431C10.6684 0.158757 11.6222 0.167844 12.2029 0.76269L12.9185 1.49572C13.4969 2.0881 13.4859 3.03703 12.8941 3.61591L5.65566 10.6958C5.35021 10.9945 4.95712 11.1876 4.53397 11.2468L4.39558 10.2564C4.60716 10.2268 4.8037 10.1303 4.95643 9.98089L5.59255 9.3587L4.20511 7.93582L3.5297 8.60177C3.38467 8.74476 3.28677 8.92863 3.24907 9.12877L3.02575 10.3146C3.01309 10.3818 3.07013 10.4416 3.13786 10.4321L4.39558 10.2564L4.53397 11.2468ZM4.9172 7.23371L6.30745 8.65946L12.1948 2.90102C12.3921 2.70806 12.3958 2.39175 12.203 2.19429L11.4873 1.46126C11.2938 1.26298 10.9759 1.25995 10.7785 1.45451L4.9172 7.23371Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 13.5006C0 13.2245 0.223858 13.0006 0.5 13.0006H13.5C13.7761 13.0006 14 13.2245 14 13.5006C14 13.7768 13.7761 14.0006 13.5 14.0006H0.5C0.223858 14.0006 0 13.7768 0 13.5006Z"
                      fill="currentColor"
                    />
                  </svg>
                  Ubah Password
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full">
                  <label htmlFor="password" className="font-bold text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Masukkan password baru anda"
                  />
                </div>
                <div className="flex flex-row items-center gap-4">
                  <button
                    className="text-[#B3B3B3] font-semibold"
                    onClick={handleEditPassword}
                  >
                    Batal
                  </button>
                  <button
                    className="text-[#333999] font-semibold"
                    onClick={handleEditPassword}
                  >
                    Simpan
                  </button>
                </div>
              </>
            )}
          </form>
          <form className="flex flex-row justify-between items-center p-4 rounded-lg border-2 w-full">
            {!isEditPIN ? (
              <>
                <div className="flex flex-col max-w-max">
                  <label htmlFor="pin" className="font-bold text-lg">
                    PIN Digibank
                  </label>
                  <p>Terakhir diubah pada 10 Januari 2024</p>
                </div>
                <button
                  className="text-[#B3B3B3] flex flex-row items-center"
                  onClick={handleEditPIN}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.53397 11.2468L3.27625 11.4225C2.5312 11.5266 1.90379 10.8688 2.04303 10.1295L2.26635 8.94369C2.34174 8.5434 2.53755 8.17568 2.8276 7.88969L10.0764 0.742431C10.6684 0.158757 11.6222 0.167844 12.2029 0.76269L12.9185 1.49572C13.4969 2.0881 13.4859 3.03703 12.8941 3.61591L5.65566 10.6958C5.35021 10.9945 4.95712 11.1876 4.53397 11.2468L4.39558 10.2564C4.60716 10.2268 4.8037 10.1303 4.95643 9.98089L5.59255 9.3587L4.20511 7.93582L3.5297 8.60177C3.38467 8.74476 3.28677 8.92863 3.24907 9.12877L3.02575 10.3146C3.01309 10.3818 3.07013 10.4416 3.13786 10.4321L4.39558 10.2564L4.53397 11.2468ZM4.9172 7.23371L6.30745 8.65946L12.1948 2.90102C12.3921 2.70806 12.3958 2.39175 12.203 2.19429L11.4873 1.46126C11.2938 1.26298 10.9759 1.25995 10.7785 1.45451L4.9172 7.23371Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 13.5006C0 13.2245 0.223858 13.0006 0.5 13.0006H13.5C13.7761 13.0006 14 13.2245 14 13.5006C14 13.7768 13.7761 14.0006 13.5 14.0006H0.5C0.223858 14.0006 0 13.7768 0 13.5006Z"
                      fill="currentColor"
                    />
                  </svg>
                  Ubah PIN Digibank
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full">
                  <label htmlFor="pin" className="font-bold text-lg">
                    PIN Digibank
                  </label>
                  <input type="password" placeholder="Masukkan pin baru anda" />
                </div>
                <div className="flex flex-row items-center gap-4">
                  <button
                    className="text-[#B3B3B3] font-semibold"
                    onClick={handleEditPIN}
                  >
                    Batal
                  </button>
                  <button
                    className="text-[#333999] font-semibold"
                    onClick={handleEditPIN}
                  >
                    Simpan
                  </button>
                </div>
              </>
            )}
          </form>
          <form className="flex flex-row justify-between items-center p-4 rounded-lg border-2">
            <div className="flex flex-col">
              <label htmlFor="2fa" className="font-bold text-lg">
                Autentikasi Dua Faktor
              </label>
              <p>Lapisan keamanan tambahan untuk akun Digibank anda</p>
            </div>
            <Switch id="2fa" />
          </form>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const Switch = ({ className, ...props }) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex px-0.5 h-7 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-200 data-[state=unchecked]:bg-gray-200",
      className
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-[#333999] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default AccountPrivacy;
