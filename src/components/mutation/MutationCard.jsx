import React from "react";

const TransactionCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Mutasi Rekening</h2>
        <div className="space-y-2">
          <p>
            <strong>Nomor Rekening:</strong> 12991213145
          </p>
          <p>
            <strong>Jenis Tabungan:</strong> Saver+
          </p>
          <p>
            <strong>Nama Rekening:</strong> Karina Atifah Hana
          </p>
          <p>
            <strong>Periode Mutasi:</strong> Juli 2024
          </p>
          <p>
            <strong>Jumlah Saldo Terakhir:</strong> IDR 29,512,048.00
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 bg-gray-200">Tanggal</th>
              <th className="text-left py-2 px-4 bg-gray-200">No Ref</th>
              <th className="text-left py-2 px-4 bg-gray-200">Keterangan</th>
              <th className="text-left py-2 px-4 bg-gray-200">Debit</th>
              <th className="text-left py-2 px-4 bg-gray-200">Kredit</th>
              <th className="text-left py-2 px-4 bg-gray-200">Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">10 JUL</td>
              <td className="py-2 px-4">DB1007QR-011</td>
              <td className="py-2 px-4">
                QRIS 9102.99/11 ke CENTRE MART 10 Juli
              </td>
              <td className="py-2 px-4 text-red-500">-35,000.00</td>
              <td className="py-2 px-4 text-green-500">-</td>
              <td className="py-2 px-4">29,512,048.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4">01 JUL</td>
              <td className="py-2 px-4">KR0107TM-011</td>
              <td className="py-2 px-4">
                Transfer masuk dari AFFA 310391020183
              </td>
              <td className="py-2 px-4 text-red-500">-</td>
              <td className="py-2 px-4 text-green-500">+200,000.00</td>
              <td className="py-2 px-4">29,547,048.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button Section */}
      <div className="mt-6 flex justify-between">
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          Beranda
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Unduh Riwayat Mutasi
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
