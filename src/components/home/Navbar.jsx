import React from 'react';
import logo from "../../assets/images/logoTagLine.png"

function Navbar() {
  return (
    <nav className="p-4 pt-7">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="" />
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white mr-4">Individu</a></li>
          <li><a href="#" className="text-white mr-4">Bisnis</a></li>
          <li><a href="#" className="text-white mr-4">Prioritas</a></li>
          <li><a href="#" className="text-white mr-4">Tentang Kami</a></li>
        </ul>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm bg-white text-gray-800 font-semibold rounded-full">Masuk</button>
          <button className="px-4 py-2 text-sm border border-white text-white font-semibold rounded-full">Mendaftar</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
