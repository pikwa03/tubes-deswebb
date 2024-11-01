import React from 'react';

function Header() {
  return (
    <header className="bg-green-custom p-4 flex justify-between items-center text-white">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <span className="font-bold text-xl">CHU CHU RAWR</span>
      </div>
      <nav className="space-x-4">
        <a href="#dashboard" className="hover:underline">Dashboard</a>
        <a href="#contact" className="hover:underline">Kontak</a>
        <a href="#signin" className="hover:underline">Masuk</a>
      </nav>
    </header>
  );
}

export default Header;
