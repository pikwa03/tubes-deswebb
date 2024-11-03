import React, { useState } from 'react';
import logo from "../Assets/logo/logo.svg"; // Path ke gambar logo
import profile from "../Assets/logo/profile.svg"; // Path ke gambar profil
import kereta from "../Assets/logo/kereta.svg"; // Path ke icon kereta api
import penumpang from "../Assets/logo/penumpang.svg"; // Path ke icon penumpang
import kontak from "../Assets/logo/kontak.svg"; // Path ke icon kontak
import jadwal from "../Assets/logo/jadwal.svg"; // Path ke icon kalender

function PaymentDetails() {
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const handleOrder = () => {
    // Set visibilitas pop-up pesan berhasil
    setIsOrderSuccessful(true);
  };

  const closePopup = () => {
    setIsOrderSuccessful(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="flex items-center justify-between h-[110px] w-full bg-[#55AD9B] text-white p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="font-poppins text-xl font-semibold">CHU CHU RAWR</h1>
        </div>
        <nav className="flex items-center space-x-5">
          <span>Kontak</span>
          <span>IDR ▼</span>
          <span>Bahasa ▼</span>
          <img
            className="rounded-full bg-white text-black p-2"
            alt="profile"
            src={profile}
          />
        </nav>
      </header>

      {/* Detail Tiket */}
      <h2 className="text-center text-2xl font-semibold text-gray-800 bg-[#95D2B3] py-2 px-4 w-full max-w-lg mt-7">
        Detail Tiket Kereta Api
      </h2>

      <div className="w-full max-w-lg bg-[#D3E9D7] p-6 shadow-lg rounded-lg">
        <div className="pb-4 border-b border-gray-300">
          <p className="text-lg font-semibold text-gray-800">Rute Kereta Api</p>
          <div className="flex items-center">
            <img src={kereta} alt="Kereta" className="h-6 w-6 mr-2" />
            <p className="text-sm text-gray-600">Balikpapan - IKN</p>
          </div>
        </div>
        <div className="pt-2 pb-4 border-b border-gray-300">
  <p className="text-lg font-semibold text-gray-800">Penumpang</p>

  {/* Gambar Penumpang untuk kedua baris */}
  <div className="flex items-start">
    <img src={penumpang} alt="Penumpang" className="h-6 w-6 mr-2 mt-1" />
    <div>
      {/* Teks Dewasa */}
      <p className="text-sm text-gray-600">Dewasa - 2 orang</p>
      {/* Teks Anak-anak */}
      <p className="text-sm text-gray-600 mt-1">Anak-anak - 1 orang</p>
    </div>
  </div>
</div>
        <div className="pt-2 pb-4 border-b border-gray-300">
          <p className="text-lg font-semibold text-gray-800">Kontak</p>
          <div className="flex items-center">
            <img src={kontak} alt="Kontak" className="h-6 w-6 mr-2" />
            <p className="text-sm text-gray-600">085234567890</p>
          </div>
        </div>
        <div className="flex justify-between font-semibold text-gray-800 py-2 border-b border-gray-300">
          <span>Kereta Api - Harga</span>
          <span>Nusantara Jaya (Ekonomi) - Rp 360.000,00</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span>Senin, 14 Oktober 2024</span>
          <div className="flex items-center">
            <img src={jadwal} alt="Jadwal" className="h-6 w-6 mr-2" />
            <span>08:45 - 10:45</span>
          </div>
        </div>

        {/* Tombol Pesan */}
        <button
          className="flex items-center justify-center space-x-2 bg-[#7AC2B4] text-white px-3 py-1 rounded-full hover:bg-[#6AB09E] ml-auto mt-4"
          onClick={handleOrder}
        >
          Pesan
        </button>
      </div>

      Pop-up Pesan Berhasil
      {isOrderSuccessful && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#95D2B3] p-6 rounded-lg text-center max-w-sm w-full shadow-lg">
            <h3 className="text-2xl font-semibold text-black">Berhasil</h3>
            <div className="flex justify-center mt-4">
              <div className="bg-[#55AD9B] rounded-full h-16 w-16 flex items-center justify-center">
                <span className="text-white text-4xl">✓</span>
              </div>
            </div>
            <p className="mt-4 text-lg text-black">Pesanan Berhasil</p>
            <button
              className="mt-6 bg-white text-black font-semibold py-2 px-4 rounded-lg"
              onClick={closePopup}
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentDetails;
