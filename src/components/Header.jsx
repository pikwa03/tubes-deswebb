import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cek status login dari localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []); // Pastikan tidak ada ketergantungan yang salah di sini

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Fungsi logout
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-green p-4 flex justify-between items-center text-white w-full h-[110px]">
      {/* Logo dan Judul */}
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <span className="font-bold text-xl leading-none self-center">CHU CHU RAWR</span>
      </div>

      {/* Header untuk Landing Page */}
      {location.pathname === '/' && (
        <nav className="font-poppins flex items-center space-x-4 ml-auto">
          {/* Tombol Masuk */}
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="text-[20px] hover:underline"
            >
              Masuk
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-lg">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-teal-600 transition duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-teal-600 transition duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Header untuk Halaman Selain Landing Page (Misalnya: Dashboard) */}
      {location.pathname !== '/' && (
        <nav className="font-poppins flex items-center space-x-4 ml-auto">
          <Link to="/profil1">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
