import React, { useEffect, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Mutation = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(generateLastSixMonthsOptions());
  }, []);

  /**
   * Fungsi untuk menghasilkan opsi rentang waktu untuk 6 bulan terakhir.
   * @returns {Array} Array berisi objek opsi dengan label dan nilai.
   */
  const generateLastSixMonthsOptions = () => {
    const options = [];
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    for (let i = 0; i < 6; i++) {
      // Mengatur tanggal akhir dan tanggal mulai untuk setiap bulan
      const endDate = new Date(currentYear, currentMonth + 1, 0);
      const startDate = new Date(currentYear, currentMonth, 1);

      // Mengonversi bulan ke nama bulan dalam bahasa Indonesia
      const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      const monthLabel = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;

      // Menambahkan objek opsi ke array options
      options.push({
        label: monthLabel,
        value: `${startDate.toISOString()},${endDate.toISOString()}`
      });

      // Mengatur ke bulan sebelumnya
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11; // Jika bulan menjadi negatif, pindah ke Desember
        currentYear--; // Kurangi tahun
      }
    }

    return options;
  };

  const styleOption = {
    padding: "28px",
    backgroundColor: "white",
    color: "#333"
  }

  return (
    <>
      <div class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Transaksi
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-[#1A1A1A] mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ms-1 font-bold text-[#333999] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Mutasi Rekening
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#8C91D9]"></div>

      <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Mutasi Rekening</h2>
        <p className="mb-8">
          Mohon lengkapi informasi yang dibutuhkan untuk melihat mutasi
          rekening.
        </p>

        <form>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label
                for="sumber-rekening"
                className="block font-bold text-lg mb-1"
              >
                Sumber Rekening
              </label>
              <p>Pilih sumber rekening untuk melihat mutasi</p>
            </div>
            <div className="col-span-1">
              <select
                id="sumber-rekening"
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Pilih nomor rekening</option>
                {/* Tambahkan opsi lain di sini */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label
                for="periode-mutasi"
                className="block font-bold text-lg mb-1"
              >
                Periode Mutasi
              </label>
              <p>Pilih rekening tujuan untuk melihat mutasi</p>
            </div>
            <div className="col-span-1">
              <select
                id="periode-mutasi"
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              >
                <option style={styleOption}>Pilih rentang waktu (maks. 6 bulan)</option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1">
              <label
                for="jenis-transaksi"
                className="block font-bold text-lg mb-1"
              >
                Jenis Transaksi
              </label>
              <p>Pilih sumber rekening untuk transaksi ini</p>
            </div>
            <div className="col-span-1">
              <select
                id="jenis-transaksi"
                class="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              >
                <option style={styleOption}>Pilih jenis transaksi</option>
                <option value="semua">Semua</option>
                <option value="transaksi-keluar">Transaksi keluar</option>
                <option value="transaksi-masuk">Transaksi masuk</option>
                {/* Tambahkan opsi lain di sini */}
              </select>
            </div>
          </div>
          
          <div className="flex flex-row-reverse">
            <button
              type="button"
              className="bg-[#B3B3B3] text-lg font-semibold text-white py-3 px-4 rounded-2xl hover:bg-[#333999]"
            >
              <div className="flex items-center space-x-3">
                <p>Lihat Mutasi Rekening</p>
                <FiArrowRightCircle className="text-2xl" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Mutation;
