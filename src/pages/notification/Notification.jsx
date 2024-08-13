import React, { useState } from "react";
import Sidebar from "../../components/userPortal/Sidebar";
import Header from "../../components/userPortal/Header";
import Info from "../../assets/images/info.png";
import TMasuk from "../../assets/images/transaksiMasuk.png";
import TKeluar from "../../assets/images/transaksiKeluar.png";
import Promo from "../../assets/images/promo.png";
import TransactionNotification from "./TransactionNotification";
import UIToggle from "./UIToggle";

const Notification = () => {
  const [activeTab, setActiveTab] = useState("Semua");

  const toggle = () => {
    setActiveTab((prevTab) => (prevTab === "Semua" ? "Transaksi" : "Semua"));
  };

  const semua = [
    {
      icon: Info,
      title: "Lupa PIN SATU? Langsung bikin baru!",
      time: "12:00",
      date: "21 Jul 2024",
      description: "Ubah PIN kamu dengan mudah dari SATU Digibank",
    },
    {
      icon: Promo,
      title: "Beli tiket ke Singapura diskon hingga 50%",
      time: "08:00",
      date: "18 Jul 2024",
      description:
        "Pakai SATU Digibank untuk pembayaran tiket di Traveloka yang lebih hemat!",
    },
    {
      icon: TKeluar,
      title: "Transaksi keluar",
      time: "16:00",
      date: "10 Jul 2024",
      description:
        "Transaksi keluar senilai 35,000.00 QRIS 9102.99/11 ke CENTRE MART 10 Juli",
    },
    {
      icon: Info,
      title: "Lupa PIN SATU? Langsung bikin baru!",
      time: "12:00",
      date: "21 Jul 2024",
      description: "Ubah PIN kamu dengan mudah dari SATU Digibank",
    },
    {
      icon: Promo,
      title: "Beli tiket ke Singapura diskon hingga 50%",
      time: "08:00",
      date: "18 Jul 2024",
      description:
        "Pakai SATU Digibank untuk pembayaran tiket di Traveloka yang lebih hemat!",
    },
    {
      icon: TKeluar,
      title: "Transaksi keluar",
      time: "16:00",
      date: "10 Jul 2024",
      description:
        "Transaksi keluar senilai 35,000.00 QRIS 9102.99/11 ke CENTRE MART 10 Juli",
    },
  ];
  const transaksi = [
    {
      icon: TKeluar,
      title: "Transaksi keluar",
      time: "16:00",
      date: "10 Jul 2024",
      description:
        "Transaksi keluar senilai 35,000.00 QRIS 9102.99/11 ke CENTRE MART 10 Juli",
    },
    {
      icon: TMasuk,
      title: "Transfer masuk Transfer masuk",
      time: "08:20",
      date: "01 Jul 2024",
      description:
        "Transfer masuk senilai IDR 200,000.00 dari AFFA 310391020183",
    },
    {
      icon: TKeluar,
      title: "Transaksi keluar",
      time: "16:00",
      date: "10 Jul 2024",
      description:
        "Transaksi keluar senilai 35,000.00 QRIS 9102.99/11 ke CENTRE MART 10 Juli",
    },
    {
      icon: TMasuk,
      title: "Transfer masuk Transfer masuk",
      time: "08:20",
      date: "01 Jul 2024",
      description:
        "Transfer masuk senilai IDR 200,000.00 dari AFFA 310391020183",
    },
    {
      icon: TKeluar,
      title: "Transaksi keluar",
      time: "16:00",
      date: "10 Jul 2024",
      description:
        "Transaksi keluar senilai 35,000.00 QRIS 9102.99/11 ke CENTRE MART 10 Juli",
    },
    {
      icon: TMasuk,
      title: "Transfer masuk Transfer masuk",
      time: "08:20",
      date: "01 Jul 2024",
      description:
        "Transfer masuk senilai IDR 200,000.00 dari AFFA 310391020183",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex h-screen bg-gray-100 dark:bg-boxdark-2 dark:text-bodydark">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 2xl:p-10 bg-indigo-100">
            <a
              className="items-center text-gray-700"
              style={{ color: "#333999" }}
            >
              Notifikasi
            </a>
            <div className="border border-[#8C91D9] border-[0.2px] mt-4"></div>

            <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10">
              <h2 className="text-2xl font-bold mb-4">Notifikasi</h2>
              <p className="mb-8">
                Pilih salah satu kategori di bawah ini untuk melanjutkan
                transaksi Anda.
              </p>
              <UIToggle toggle={toggle} activeTab={activeTab} />
              <div className="notification-list mt-4">
                {activeTab === "Semua" &&
                  semua.map((note, index) => (
                    <TransactionNotification key={index} {...note} />
                  ))}
                {activeTab === "Transaksi" &&
                  transaksi.map((note, index) => (
                    <TransactionNotification key={index} {...note} />
                  ))}
                {/* {semua
                  .filter((note) =>
                    activeTab === "Semua"
                      ? true
                      : note.title.includes("Transaksi")
                  )
                  .map((note, index) => (
                    <TransactionNotification key={index} {...note} />
                  ))}
                {transaksi
                  .filter((note) =>
                    activeTab === "Transaksi"
                      ? true
                      : note.title.includes("Semua")
                  )
                  .map((note, index) => (
                    <TransactionNotification key={index} {...note} />
                  ))} */}
              </div>
            </div>
            <div className="mx-auto max-w-screen-2xl "></div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Notification;
