import React, { useEffect, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const FormMutation = () => {
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
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      const monthLabel = `${
        monthNames[startDate.getMonth()]
      } ${startDate.getFullYear()}`;

      // Menambahkan objek opsi ke array options
      options.push({
        label: monthLabel,
        value: `${startDate.toISOString()},${endDate.toISOString()}`,
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
    color: "#333",
  };

  return (
    <>
      <p className="mb-8">
        Mohon lengkapi informasi yang dibutuhkan untuk melihat mutasi rekening.
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
              <option style={styleOption}>
                Pilih rentang waktu (maks. 6 bulan)
              </option>
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
    </>
  );
};

export default FormMutation;
