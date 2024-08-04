import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle, FiHome, FiDownload } from "react-icons/fi";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MutationDocument from "../components/mutation/MutationDocument";

const Mutation = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(generateLastSixMonthsOptions());
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);

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

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = () => {
    // Logika untuk memproses data form (misal: fetch data mutasi)
    console.log(formData);

    // Set form sebagai telah dikirim
    setFormSubmitted(true);
  };

  const styleOption = {
    padding: "28px",
    backgroundColor: "white",
    color: "#333",
  };

  // Dummy data untuk demonstrasi
  const formData = {
    name: "Karina Atifah Hana",
    accountNumber: "12991213145",
    period: "Juli 2024",
    transactionType: "Semua",
  };

  const mutationData = [
    {
      date: "01 JUL",
      noRef: "KR0107TM-011",
      description: "Transfer masuk dari AFFA 310391020183",
      debit: "",
      credit: "+200.000,00",
      balance: "29,547,048.00",
    },
    {
      date: "10 JUL",
      noRef: "DB1007QR-011",
      description: "QRIS 9102.99/11 ke CENTRE MART 10 Juli",
      debit: "-35.000,00",
      credit: "",
      balance: " 29,512,048.00",
    },
    // Data lainnya
  ];

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
        {!formSubmitted ? (
          <>
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
                  onClick={handleSubmit}
                >
                  <div className="flex items-center space-x-3">
                    <p>Lihat Mutasi Rekening</p>
                    <FiArrowRightCircle className="text-2xl" />
                  </div>
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="space-y-5 my-6 text-lg">
              <div className="grid grid-cols-3">
                <div className="col-span-1">Nomor Rekening</div>
                <div className="col-span-1"> 12991213145</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1">Jenis Tabungan</div>
                <div className="col-span-1"> Saver+</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1">Nama Rekening</div>
                <div className="col-span-1"> Karina Atifah Hana</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1">Periode Mutasi</div>
                <div className="col-span-1"> Juli 2024</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1">Jumlah Saldo Terakhir</div>
                <div className="col-span-1"> IDR 29,512,048.00</div>
              </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="text-white text-lg text-left bg-[#535AC6]">
                    <th className="rounded-s-lg py-2 px-4">Tanggal</th>
                    <th className="py-2 px-4">No Ref</th>
                    <th className="py-2 px-4">Keterangan</th>
                    <th className="py-2 px-4">Debit</th>
                    <th className="py-2 px-4">Kredit</th>
                    <th className="rounded-e-lg py-2 px-4">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {mutationData.map((item, index) => (
                    <tr className="border-b border-[#999999]" key={index}>
                      <td className="py-2 px-4">{item.date}</td>
                      <td className="py-2 px-4">{item.noRef}</td>
                      <td className="py-2 px-4">{item.description}</td>
                      <td className="py-2 px-4 text-red-500">{item.debit}</td>
                      <td className="py-2 px-4 text-green-500">
                        {item.credit}
                      </td>
                      <td className="py-2 px-4">{item.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Button Section */}
            <div className="mt-14 text-lg flex justify-end gap-7">
              <Link
                to="/portal"
                className="bg-gray-500 text-white py-2 px-4 rounded-2xl hover:bg-gray-600"
              >
                <div className="flex items-center space-x-3">
                  <p>Beranda</p>
                  <FiHome />
                </div>
              </Link>
              <PDFDownloadLink
                document={
                  <MutationDocument
                    formData={formData}
                    mutationData={mutationData}
                  />
                }
                fileName="mutasi_rekening.pdf"
              >
                {({ blob, url, loading, error }) => {
                  if (error) {
                    console.error("Error while generating PDF:", error);
                    return <p>Error while generating PDF</p>;
                  }
                  return (
                    <button
                      className={`py-2 px-4 rounded-2xl ${
                        loading
                          ? "bg-gray-300"
                          : "bg-[#333999] hover:bg-[#333977]"
                      } text-white`}
                      disabled={loading}
                    >
                      <div className="flex items-center space-x-3">
                        <p>
                          {loading
                            ? "Menyiapkan PDF..."
                            : "Unduh Riwayat Mutasi"}
                        </p>
                        <FiDownload />
                      </div>
                    </button>
                  );
                }}
              </PDFDownloadLink>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Mutation;
