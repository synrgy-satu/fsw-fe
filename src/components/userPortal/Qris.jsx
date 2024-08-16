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

      <div className="flex gap-4 items-center mb-8">
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
        <button className="w-[129px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center">
          Buat Baru
        </button>
      </div>

      <div className="flex gap-4">
        <div className="max-w-[430px] flex flex-col items-center justify-center">
          <div className="bg-[#D9D9D9] w-[430px] flex items-center justify-center mb-6">
            <img src="/images/qris-dummy.png" alt="qris dummy" id="qrisImage" />
          </div>
          <div className="flex justify-between w-full">
            <button
              className="w-[200px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center"
              onClick={onSaveQris}
            >
              Simpan Gambar
            </button>
            <button className="w-[200px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center">
              Cetak Gambar
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[610px] h-[369px] bg-white rounded-2xl p-6">
            <p className="text-black font-bold text-xl">Informasi QRIS</p>
            <div className="flex flex-col gap-4 mt-7">
              <div className="flex">
                <p className="text-black text-base font-bold w-40">Nama QRIS</p>
                <p className="text-black text-base">Toko Sejarhtera</p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">NMID</p>
                <p className="text-black text-base">123194571235124109</p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">Pemilik</p>
                <p className="text-black text-base">Karina Atifah Hana</p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">QRIS ID</p>
                <p className="text-black text-base">Q123168125</p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">
                  Masa Berlaku
                </p>
                <p className="text-black text-base">22 Januari 2026</p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">Status</p>
                <p className="text-[#12D79C] text-base">Aktif</p>
              </div>

              <div className="flex">
                <p className="text-[#333999] text-xs font-normal">
                  Informasi lain
                </p>
                <span className="text-[#333999] ms-2 text-xs font-bold">
                  &#62;
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <button className="w-[290px] text-[#333999] bg-white hover:bg-[#272D87] hover:text-white border border-[#333999] font-bold text-base rounded-lg px-5 py-3 text-center">
              Nonaktif QRIS
            </button>
            <button className="w-[290px] text-white bg-[#CB3A31] hover:bg-[#af3027] hover:text-[#dadada] border border-[#CB3A31] font-bold text-base rounded-lg px-5 py-3 text-center">
              Hapus QRIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qris;
