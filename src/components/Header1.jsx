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

      <nav className="flex items-center space-x-4 pr-4">
        <a href="#contact" className="hover:underline mr-4">Kontak</a>
        
        <div className="relative">
          <a 
            href="#profile" 
            className="cursor-pointer" 
            onClick={handleDropdownToggle}
          >
            <img 
              src="/images/profile.png" // Ganti dengan path gambar profil Anda
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
