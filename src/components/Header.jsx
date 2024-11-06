import React, { useState } from 'react'; // Tambahkan useState di sini
import { Link } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#55AD9B] p-4 flex justify-between items-center text-white w-[1440px] h-[110px]">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-20 h-20" />
        <span className="font-bold font-poppins text-[32px]">CHU CHU RAWR</span>
      </div>
      <nav className="font-poppins relative mr-4"> {/* Tambahkan relative untuk parent nav */}
        <Link to="/dashboard" className="hover:underline text-[20px] mr-4">Dashboard</Link>
        <button 
          onClick={handleDropdownToggle} 
          className="text-[20px] hover:underline" // Gaya untuk tombol dropdown
        >
          Masuk
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-lg">
            <Link
              to="/Login" // Ganti href dengan to untuk menggunakan Link
              className="block px-4 py-2 hover:bg-gray-200 hover:text-teal-600 transition duration-200"
              onClick={() => setIsDropdownOpen(false)} // Tutup dropdown setelah mengklik
            >
              login
            </Link>
            <Link
              to="/register" // Ganti href dengan to untuk menggunakan Link
              className="block px-4 py-2 hover:bg-gray-200 hover:text-teal-600 transition duration-200"
              onClick={() => setIsDropdownOpen(false)} // Tutup dropdown setelah mengklik
            >
              Daftar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
