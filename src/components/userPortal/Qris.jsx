import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Qris = () => {
  const [isTransaksiOpen, setIsTransaksiOpen] = useState(false);

  const onSaveQris = () => {
    const link = document.createElement("a");
    link.href = "/images/qris-dummy.png"; // Path to the image
    link.download = "qris.png"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };

  return (
    <div className="box-border p-2">
      <div className="flex">
        <ol className="inline-flex items-center">
          <li className="inline-flex items-center">
            <Link
              to="#"
              className="inline-flex items-center text-[#333999] text-base font-semibold"
            >
              QRIS
            </Link>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#333999] mb-1"></div>

      <div className="flex gap-24 items-center mb-8">
        <p className="font-bold text-2xl text-black py-2">QRIS</p>
        <div className="relative w-[480px]">
          <select
            className="block w-full px-8 h-[48px] border border-[#333999] rounded-lg text-[#808080] focus:outline-none focus:ring-1 focus:border-[#272D87] appearance-none"
            onClick={() => setIsTransaksiOpen(!isTransaksiOpen)}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Pilih Tabungan
            </option>
            <option className="py-2 px-4 text-black hover:bg-[#f0f0f0]">
              Tabungan 1
            </option>
            <option className="py-2 px-4 text-black hover:bg-[#f0f0f0]">
              Tabungan 2
            </option>
            <option className="py-2 px-4 text-black hover:bg-[#f0f0f0]">
              Tabungan 3
            </option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-8 pointer-events-none text-2xl text-[#808080]">
            <FiChevronDown
              className={`transition-transform ${
                isTransaksiOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="w-[500px] flex flex-col items-center justify-center">
        <div className="bg-[#D9D9D9] w-[500px] h-[500px] flex items-center justify-center mb-6">
          <img src="/images/qris-dummy.png" alt="qris dummy" id="qrisImage" />
        </div>

        <button
          className="w-[200px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center"
          onClick={onSaveQris}
        >
          Simpan Gambar
        </button>
      </div>
    </div>
  );
};

export default Qris;
