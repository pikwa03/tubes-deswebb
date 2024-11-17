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
    <header className="bg-[#55AD9B] p-4 flex justify-between items-center text-white w-full h-[110px]">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <span className="font-bold text-xl">CHU CHU RAWR</span>
      </div>

      {/* Header untuk Landing Page */}
      {location.pathname === '/' && (
        <nav className="font-poppins">
          <Link to="/dashboard" className="hover:underline text-[20px] mr-4">Dashboard</Link>
          <button
            onClick={handleDropdownToggle}
            className="text-[20px] hover:underline relative"
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
        </nav>
      )}

      {/* Header untuk Dashboard (untuk halaman selain /dashboard1) */}
      {location.pathname.startsWith('/dashboard') && !location.pathname.startsWith('/dashboard1') && (
        <nav className="font-poppins relative">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Menampilkan gambar profil jika sudah login */}
              <img
                src="/images/profile.png"  // Pastikan path ini benar
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-bold text-xl">User</span>
              <button onClick={handleLogout} className="text-[20px] hover:underline">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleDropdownToggle}
                className="text-[20px] hover:underline relative"
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
            </>
          )}
        </nav>
      )}

      {/* Header untuk Dashboard1 */}
      {location.pathname.startsWith('/dashboard1') && (
        <nav className="font-poppins relative">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Menampilkan gambar profil jika sudah login */}
              <img
                src="/images/profile.png"  // Pastikan path ini benar
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-bold text-xl">User</span>
            </div>
          ) : (
            <p className="text-xl text-teal-500">Silakan login untuk melihat profil</p>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
