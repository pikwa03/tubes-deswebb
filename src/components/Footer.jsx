import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-teal-600 text-black p-8 text-center max-w-full">
        <div className="flex justify-between space-x-12 p-8">
          {/* About Section */}
          <div className="space-y-4 max-w-xs">
            <h4 className="font-bold font-poppins text-[25px]">CHU CHU RAWR</h4>
            <p className="font-poppins font-medium text-[15px] leading-relaxed">
              Chu Chu Rarw merupakan layanan transportasi kereta api yang menggabungkan keseruan dan kenyamanan dalam setiap perjalanan, dengan konsep yang unik dan lucu.
            </p>
          </div>
          
          {/* Dashboard Links */}
          {/* Dashboard Links */}
          <div className="space-y-4">
            <h4 className="font-bold font-poppins text-[20px]">Dashboard</h4>
            <div className="flex flex-col font-poppins font-medium text-[15px] text-left space-y-2">
              <Link to="/" className="hover:underline">Tentang kami</Link>
              <Link to="/" onClick={() => document.getElementById('rute-populer').scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Rute</Link>
              <Link to="/testimoni" className="hover:underline">Testimoni</Link>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="space-y-4 max-w-xs">
            <h4 className="font-bold font-poppins text-[20px]">Quotes</h4>
            <p className="font-poppins font-medium text-[15px] leading-relaxed">
              "Perjalanan terbaik bukan hanya tentang sampai di tujuan, tapi tentang setiap momen berharga yang kita nikmati sepanjang jalan. 🚂🦖 #ChuChuRawr"
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="flex flex-col justify-start items-center space-y-2">
            <h4 className="font-bold font-poppins text-[20px] mb-2">Hubungi Kami</h4>
            <div className="flex space-x-3">
              <img src="/images/fesbuk.png" alt="Facebook" className="w-6 h-6" />
              <img src="/images/lk.png" alt="LinkedIn" className="w-6 h-6" />
              <img src="/images/ig.png" alt="Instagram" className="w-6 h-6" />
              <img src="/images/tiktok.png" alt="TikTok" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-green-custom p-4 flex items-center justify-center text-black max-w-full">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10 mr-2" />
        <p className="font-bold font-poppins text-[20px] mt-0">© CHU CHU RAWR 2024</p>
      </div>
    </div>
  );
}

export default Footer;
