import React from 'react';
import { Link } from "react-router-dom";
import logo from "/images/lgtagline.svg"

function Navbar() {
  return (
    <nav className="p-4 pt-5 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} className='' alt="" />
        <ul className="flex space-x-5">
          <li><a href="#" className="text-base font-bold text-blue-gsm-100 mr-4">Individu</a></li>
          <li><a href="#" className="text-base text-blue-gsm-100 mr-4">Bisnis</a></li>
          <li><a href="#" className="text-base text-blue-gsm-100 mr-4">Prioritas</a></li>
          <li><a href="#" className="text-base text-blue-gsm-100 mr-4">Tentang Kami</a></li>
        </ul>
        <div className="flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-base font-bold bg-blue-gsm-100 text-white rounded-md">Masuk</Link>
          <Link to="/register" className="px-4 py-2 text-base outline outline-2 outline-blue-gsm-100 text-blue-gsm-100 font-bold rounded-md">Mendaftar</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
