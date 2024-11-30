import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Hapus status login di localStorage
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    // Arahkan pengguna ke halaman utama
    navigate('/');
  };

  return (
    <header className="bg-green p-4 flex justify-between items-center text-white w-full h-[110px]">
      {/* Logo dan Judul */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        </Link>
        <span className="font-bold text-xl leading-none self-center">CHU CHU RAWR</span>
      </div>

      {/* Header untuk Landing Page */}
      {location.pathname === '/' && (
        <nav className="font-poppins flex items-center space-x-4 ml-auto">
          <Link to="/" className="text-[20px] hover:underline">
            Home
          </Link>
          <Link to="/Login" className="text-[20px] hover:underline">
            Logout
          </Link>
          <Link to="/profil2" className="text-[20px] hover:underline">
            Riwayat
          </Link>
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

      {/* Header untuk Halaman Selain Landing Page */}
      {location.pathname !== '/' && (
        <nav className="font-poppins flex items-center space-x-4 ml-auto">
          {/* <Link to="/" className="text-[20px] hover:underline">
            Home
          </Link> */}
          
          <Link to="/Login" className="text-[20px] hover:underline">
            Logout
          </Link>
          <Link to="/profil2" className="text-[20px] hover:underline">
            Riwayat
          </Link>
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
