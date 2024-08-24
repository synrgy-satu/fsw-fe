import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="bg-gradient-to-br from-blue-700/100 via-blue-700 to-blue-900  flex max-sm:flex-col w-[100%] items-center justify-center">
      <div className="h-[603px] mt-20 mb-40 mr-5 w-full max-w-sm p-4 bg-white border  rounded-3xl shadow sm:p-8">
        <img src="/images/saver.png" alt="logo saver" className="mt-3" />
        <br />
        <div className="text-gray-900 h-[264px]">
          <p>
            Sambut masa depan keuangan Anda dengan SATU SAVER+! Layanan tabungan
            hemat dari Bank SATU yang dirancang untuk proses menabung yang lebih
            sederhana, hemat, dan praktis.
          </p>
          <br />
          <p>
            {" "}
            Mulai menabung dengan setoran awal yang rendah, ideal untuk semua
            kalangan!
          </p>
          <br />
          <p> Biaya administrasi rendah dengan keuntungan yang maksimal.</p>
        </div>
        <br />
        <Link
          to="#"
          className="inline-flex justify-center w-full text-center text-blue-gsm-100 font-bold"
        >
          {" "}
          Lihat Selengkapnya{" "}
          <div className="ml-2">
            <i className="text-1xl fa-solid fa-arrow-right"></i>
          </div>
        </Link>
        <div className="flex justify-center items-center mt-5">
          <img src="/images/saverImg.png" alt="Image Saver" />
        </div>
      </div>
      <div className="h-[603px] mt-20 max-sm:mt-0 mb-40 mr-5 w-full max-w-sm p-4 bg-white border  rounded-3xl shadow sm:p-8">
        <img src="/images/prioritas.png" alt="logo saver" className="mt-3" />
        <br />
        <div className="text-gray-900 h-[284px]">
          <p>
            Rasakan keunggulan dan kemewahan dalam mengelola tabungan Anda
            dengan SATU PRIORITAS, layanan tabungan eksklusif dari Bank SATU.
          </p>
          <br />
          <p>
            {" "}
            Menawarkan layanan yang dipersonalisasi dan fasilitas premium,
            solusi ideal bagi Anda yang ingin mengoptimalkan pengelolaan
            keuangan Anda dengan standar tertinggi.
          </p>
          <br />
        </div>
        <Link
          to="#"
          className="inline-flex justify-center w-full text-center text-blue-gsm-100 font-bold"
        >
          {" "}
          Lihat Selengkapnya{" "}
          <div className="ml-2">
            <i className="text-1xl fa-solid fa-arrow-right"></i>
          </div>
        </Link>
        <div className="flex justify-center items-center mt-5">
          <img src="/images/prioritasImg.png" alt="Image Prioritas" />
        </div>
      </div>
      <div className="h-[603px] mt-20 max-sm:mt-0 mb-40 mr-5 w-full max-w-sm p-4 bg-white border  rounded-3xl shadow sm:p-8">
        <img src="/images/bisnis.png" alt="logo saver" className="mt-3" />
        <br />
        <div className="text-gray-900 h-[284px]">
          <p>
            Optimalkan pengelolaan keuangan bisnis Anda dengan SATU BISNIS,
            layanan tabungan yang dirancang khusus untuk memenuhi kebutuhan
            bisnis Anda.
          </p>
          <br />
          <p>
            {" "}
            Dengan fitur laporan dan analisis, Anda dapat mengelola dan memantau
            arus kas, serta merencanakan keuangan bisnis dengan lebih baik.
          </p>
          <br />
        </div>
        <Link
          to="#"
          className="inline-flex justify-center w-full text-center text-blue-gsm-100 font-bold"
        >
          {" "}
          Lihat Selengkapnya{" "}
          <div className="ml-2">
            <i className="text-1xl fa-solid fa-arrow-right"></i>
          </div>
        </Link>
        <div className="flex justify-center items-center mt-5">
          <img src="/images/bisnisImg.png" alt="Image Bisnis" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
