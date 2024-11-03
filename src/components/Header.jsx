import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-green-custom p-4 flex justify-between items-center text-white w-full h-[110px]">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-20 h-20" />
        <span className="font-bold font-poppins text-[32px]">CHU CHU RAWR</span>
      </div>
      <nav className="font-poppins space-x-4">
        <Link to="/dashboard" className="hover:underline text-[20px]">Dashboard</Link>
        <Link to="/contact" className="hover:underline text-[20px]">Kontak</Link>
        <Link to="/signin" className="hover:underline text-[20px]">Masuk</Link>
      </nav>
    </header>
  );
}

export default Header;
