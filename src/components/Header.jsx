import React, { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#55AD9B] p-4 flex justify-between items-center text-white">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <span className="font-bold text-xl">CHU CHU RAWR</span>
      </div>

      <nav className="flex items-center space-x-4">
        <div className="relative mr-4">
          <div className="flex items-center cursor-pointer" onClick={handleDropdownToggle}>
            <span className="hover:underline">Masuk</span>
            <img 
              src="/images/dropdown.png" // Ganti dengan path gambar panah Anda
              alt="dropdown"
              className="w-4 h-4 mr-8"
            />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-lg">
              <a
                href="/pencarian" 
                className="block px-4 py-2 hover:bg-gray-200 hover:text-teal-600 transition duration-200"
                onClick={() => setIsDropdownOpen(false)} // Tutup dropdown setelah mengklik
              >
                Masuk
              </a>
              <a
                href="/Register" 
                className="block px-4 py-2 hover:bg-gray-200 hover:text-teal-600 transition duration-200"
                onClick={() => setIsDropdownOpen(false)} // Tutup dropdown setelah mengklik
              >
                Daftar
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
