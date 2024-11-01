import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-teal-600 text-black p-8 text-center">
        <div className="flex justify-center space-x-4">
        <div className="flex justify-start space-x-4">
          <div>
            <h4 className="font-semibold">CHU CHU RAWR</h4>
            <p className="font-poppins text-lg leading-relaxed max-w-xs">
              Chu Chu Rarw merupakan layanan transportasi kereta api yang menggabungkan keseruan dan kenyamanan dalam setiap perjalanan, dengan konsep yang unik dan lucu.
            </p>
          </div>
        </div>
          <div>
            <h4 className="font-bold">Dashboard</h4>
            <div className="flex flex-col items-start text-left space-y-4">
              <p>Tentang kami</p>
              <p>Promo</p>
              <p>Cara Memesan</p>
              <p>Pusat Bantuan</p>
              <p>Hubungi Kami</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Quotes</h4>
            <p className="font-poppins text-lg leading-relaxed max-w-xs">
              "Perjalanan terbaik bukan hanya tentang sampai di tujuan, tapi tentang setiap momen berharga yang kita nikmati sepanjang jalan. 
              🚂🦖 #ChuChuRawr"
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-2">Hubungi Kami</h4>
            <div className="flex space-x-2">
              <img src="/images/fesbuk.png" alt="Facebook" className="w-4 h-4" />
              <img src="/images/lk.png" alt="LinkedIn" className="w-4 h-4" />
              <img src="/images/ig.png" alt="Instagram" className="w-4 h-4" />
              <img src="/images/tiktok.png" alt="TikTok" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-green-custom p-4 flex items-center justify-center text-black">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10 mr-2" />
        <p className="font-bold mt-0">© CHU CHU RAWR 2024</p>
      </div>
    </div>
  );
}

export default Footer;
