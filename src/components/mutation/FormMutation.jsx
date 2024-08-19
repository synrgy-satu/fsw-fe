import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowRightCircle } from "react-icons/fi";

const FormMutation = ({userInfo, onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="col-span-2">
            <label
              for="sumber-rekening"
              className="block font-bold text-lg mb-1"
            >
              Sumber Rekening
            </label>
            <p>Pilih sumber rekening untuk melihat mutasi</p>
          </div>
          <div className="col-span-2">
            <select
              id="sumber-rekening"
              className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              {...register("sumberRekening", { reqired: true })}
            >
              <option>Pilih nomor rekening</option>
              {userInfo &&
                userInfo.rekenings.map((rekening, index) => (
                  <option key={index} value={rekening.cardNumber}>
                    {rekening.cardNumber} {rekening.jenisRekening} -{" "}
                    {userInfo.username}
                  </option>
                ))}
            </select>
            {errors.sumberRekening && (
              <span className="text-red-500">Sumber rekening diperlukan</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="col-span-2">
            <label
              for="periode-mutasi"
              className="block font-bold text-lg mb-1"
            >
              Periode Mutasi
            </label>
            <p>Pilih rekening tujuan untuk melihat mutasi</p>
          </div>
          <div className="col-span-2">
            <select
              id="periode-mutasi"
              className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              {...register("periodeMutasi", { required: true })}
            >
              <option style={styleOption}>
                Pilih rentang waktu (maks. 6 bulan)
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.periodeMutasi && (
              <span className="text-red-500">Periode mutasi diperlukan</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="col-span-2">
            <label
              for="jenis-transaksi"
              className="block font-bold text-lg mb-1"
            >
              Jenis Transaksi
            </label>
            <p>Pilih sumber rekening untuk transaksi ini</p>
          </div>
          <div className="col-span-2">
            <select
              id="jenis-transaksi"
              className="block w-full px-4 py-3 text-base text-[#999999] border border-[#ECEDF9] rounded-md bg-[#ECEDF9] focus:ring-blue-500 focus:border-blue-500"
              {...register("jenisTransaksi", { required: true })}
            >
              <option style={styleOption}>Pilih jenis transaksi</option>
              <option value="SEMUA">Semua</option>
              <option value="TRANSAKSI_KELUAR">Transaksi keluar</option>
              <option value="TRANSAKSI_MASUK">Transaksi masuk</option>
            </select>
            {errors.jenisTransaksi && (
              <span className="text-red-500">Jenis transaksi diperlukan</span>
            )}
          </div>
        </div>

        <div className="flex flex-row-reverse">
          <button
            type="submit"
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
