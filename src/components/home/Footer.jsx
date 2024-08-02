import React from "react";

function Footer() {
  return (
    <div>
      <div className="h-96 text-right rtl:text-left bg-white flex items-center justify-between mr-28 ml-28 max-sm:text-center max-sm:mr-0 max-sm:ml-0">
        <div>
          <img src="/images/avatar.png" alt="avatar" className="max-sm:hidden max-md:hidden"/>
        </div>
        <div>
          <h3 className="text-6xl font-bold text-blue-gsm-100 max-sm:text-3xl">
            #SemuaPakaiSATU
          </h3>
          <p className="text-4xl font-bold text-blue-gsm-100 max-sm:text-3xl">
            Aplikasi Perbankan dengan Fitur Aksesibel <br /> Pertama di
            Indonesia!
          </p>
          <p className="text-2xl font-normal text-gray-800 max-sm:text-3xl">
            Tunggu apalagi? Yuk, pakai SATU sekarang!
          </p>
        </div>
      </div>
      <div className="max-md:h-[367px] bg-blue-gsm-100 max-sm:h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          <div className="p-12">
            <div className="text-white leading-8 mb-4">
              <img src="/images/taglinefooter.png" alt="Logo Tag Line" className="mb-4"/>
              <p className="w-80">PT Bank Satu Tbk berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK)</p>
              <br /><br />
              <p className="w-80 text-[12px] max-sm:hidden">Copyright © 2024, All Rights Reserved, PT. Bank Satu Tbk</p>
            </div>
          </div>
          <div className="p-12 max-sm:hidden max-md:hidden">
            <div className="text-white leading-8 mb-4">
              <p className="text-base font-bold">Individual</p>
              <p>Rekening</p>
              <p>Tabungan Deposito</p>
              <p>Pembayaran</p>
            </div>
            <div className="text-white leading-8">
              <p className="text-base font-bold">Bisnis</p>
              <p>Rekening</p>
              <p>Tabungan Deposito</p>
              <p>Pengelola Keuangan</p>
            </div>
          </div>
          <div className="p-12 max-sm:hidden max-md:hidden">
            <div className="text-white leading-8 mb-4">
              <p className="text-base font-bold">Prioritas</p>
              <p>Rekening</p>
              <p>Tabungan Deposito</p>
              <p>Pembayaran</p>
            </div>
            <div className="text-white leading-8">
              <p className="text-base font-bold">Tentang Kami</p>
              <p>Tentang Bank SATU</p>
              <p>Mitra</p>
              <p>Karier</p>
            </div>
          </div>
          <div className="p-12">
            <div className="text-white leading-10 mb-4 max-sm:mt-[-150px]">
              <p className="text-base font-bold">Hubungi Kami</p>
              <p className="text-sm font-normal">
                Jalan Binar Academy, No. 1 Senayan, Kebayoran Baru, Jakarta
                Selatan 12190
              </p>
              <p>
                <i className="text-1xl fa-solid fa-envelope mr-2 "></i>
                <a href="mailto:satubantuan@co.id">satubantuan@co.id</a>
              </p>
              <img src="/images/contact.png" alt="Contact Satu" className="mt-4"/>
              <p className="mt-4">Ikuti kami di sosial media</p>
              <i className="text-2xl fa-solid fa fa-facebook mr-5 "></i>
              <i className="text-2xl fa-solid fa fa-twitter mr-5 "></i>
              <i className="text-2xl fa-solid fa fa-instagram "></i>
              <p className="w-80 text-[12px] md:hidden lg:hidden">Copyright © 2024, All Rights Reserved, PT. Bank Satu Tbk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
