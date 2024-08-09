import { Link } from "react-router-dom";

const HomeNotification = ({ handleClick }) => {
  return (
    <div className="bg-white rounded-xl mb-8 ps-3 relative">
      <p
        className="cursor-pointer absolute top-7 right-9 text-2xl font-bold text-gray-600
      hover:font-extrabold hover:text-black"
        onClick={() => {
          handleClick();
        }}
      >
        ×
      </p>
      <div className="p-5 grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <p className="font-extrabold text-2xl">
            Migrasi Layanan BCA Mobile ke SATU M-Banking
          </p>
          <p className="my-4">
            Sehubungan dengan migrasi sistem perbankan BCA ke SATU, Maka layanan
            BCA Mobile akan ditutup pada 10 Agustus 2024, 23.00 WIB dan
            transaksi dalam aplikasi akan ditutup 5 jam sebelumnya
          </p>
          <Link
            className="bg-primary inline-block text-white font-bold p-4 rounded-xl mb-4
          hover:bg-indigo-950"
          >
            Baca Selengkapnya
          </Link>
        </div>
        <div className="col-span-4 items-center flex justify-center">
          <img
            src="/images/homepage-sync.png"
            alt="Sync Logo"
            style={{ height: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNotification;
