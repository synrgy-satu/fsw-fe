/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiHome, FiDownload } from "react-icons/fi";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MutationDocument from "./MutationDocument";

const MutationResult = ({ userData, mutationData, jenisTransaksi }) => {
  /**
   * Fungsi untuk mengonversi format tanggal dari "07-08-2024" menjadi "07 Agustus 2024"
   * @param {string}
   * @returns {String}
   */
  const convertDate = (dateStr) => {
    const months = [
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

    const [day, month, year] = dateStr.split("-");
    const monthName = months[parseInt(month, 10) - 1];

    return `${day} ${monthName} ${year}`;
  };

  /**
   * Fungsi untuk mengonversi format angka dari "10000" menjadi "10,000.00"
   * @returns {String}
   */
  const formatNumber = (number) => {
    if (number !== null) {
      return number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    return number;
  };

  // console.log(mutationData);

  return (
    <>
      <div className="space-y-5 my-6 text-lg">
        <div className="grid grid-cols-3">
          <div className="col-span-1">Nomor Rekening</div>
          <div className="col-span-1">{userData.cardNumber}</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">Jenis Tabungan</div>
          <div className="col-span-1">{userData.jenisRekening}</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">Nama Rekening</div>
          <div className="col-span-1">{userData.fullName}</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">Periode Mutasi</div>
          <div className="col-span-1">{userData.periodeMutasi}</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">Jumlah Saldo Terakhir</div>
          <div className="col-span-1">IDR {formatNumber(userData.balance)}</div>
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
            {mutationData && mutationData.length > 0 ? (
              mutationData.map((item, index) => (
                <tr className="border-b border-[#999999]" key={index}>
                  <td className="py-2 px-4">{convertDate(item.createdDate)}</td>
                  <td className="py-2 px-4">{item.referenceNumber}</td>
                  <td className="py-2 px-4">{item.note}</td>
                  <td className="py-2 px-4 text-red-500">
                    {item.jenisTransaksi === "TRANSAKSI_KELUAR"
                      ? `-${formatNumber(item.amount)}`
                      : ""}
                  </td>
                  <td className="py-2 px-4 text-green-500">
                    {item.jenisTransaksi === "TRANSAKSI_MASUK"
                      ? `+${formatNumber(item.amount)}`
                      : ""}
                  </td>
                  <td className="py-2 px-4">{formatNumber(item.balance)}</td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-[#999999]">
                <td className="py-2 px-4 text-center" colSpan="6">
                  Tidak ada riwayat transaksi
                </td>
              </tr>
            )}
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
              formData={userData}
              mutationData={mutationData}
              jenisTransaksi={jenisTransaksi}
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
                  loading ? "bg-gray-300" : "bg-[#333999] hover:bg-[#333977]"
                } text-white`}
                disabled={loading}
              >
                <div className="flex items-center space-x-3">
                  <p>
                    {loading ? "Menyiapkan PDF..." : "Unduh Riwayat Mutasi"}
                  </p>
                  <FiDownload />
                </div>
              </button>
            );
          }}
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default MutationResult;
