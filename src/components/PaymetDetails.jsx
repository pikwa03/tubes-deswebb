import React, { useState } from 'react';
import logo from "../Assets/logo/logo.svg";
import profile from "../Assets/logo/profile.svg";
import saldo from "../Assets/logo/saldo.svg";

function PaymentDetails() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    // Set visibilitas pop-up pembayaran berhasil
    setIsPaymentSuccessful(true);
  };

  const closePopup = () => {
    setIsPaymentSuccessful(false);
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

      <h2 className="text-center text-2xl font-semibold text-gray-800 bg-[#95D2B3] py-2 px-4 w-full max-w-lg mt-7">
        Detail Pembayaran
      </h2>

      <div className="w-full max-w-lg bg-[#D3E9D7] p-6 shadow-lg rounded-lg">
        <div className="pb-4 border-b border-gray-300">
          <p className="text-lg font-semibold text-gray-800">Nusantara Jaya Ekonomi</p>
        </div>
        <div className="pt-2 pb-4 border-b border-gray-300">
          <p className="text-sm text-gray-600">
            Balikpapan - IKN<br />2 Dewasa, 1 Anak-anak
          </p>
        </div>
        <div className="flex justify-between font-semibold text-gray-800 py-2 border-b border-gray-300">
          <span>Total</span>
          <span>Rp 360.000,00</span>
        </div>
        
        <div className="flex justify-between items-center font-semibold text-gray-800 py-2 border-b border-gray-300">
          <span>Saldo</span>
          <button className="flex items-center space-x-2 bg-[#7AC2B4] text-white px-3 py-1 rounded-full">
            <img src={saldo} alt="saldo" className="h-5 w-5" />
            <span>Saldo</span>
          </button>
        </div>

        <button
          className="flex items-center justify-center space-x-2 bg-[#7AC2B4] text-white px-3 py-1 rounded-full hover:bg-[#6AB09E] ml-auto"
          onClick={handlePayment}
        >
          Bayar
        </button>
      </div>

      {isPaymentSuccessful && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#95D2B3] p-6 rounded-lg text-center max-w-sm w-full shadow-lg">
            <h3 className="text-2xl font-semibold text-black">Berhasil</h3>
            <div className="flex justify-center mt-4">
              <div className="bg-[#55AD9B] rounded-full h-16 w-16 flex items-center justify-center">
                <span className="text-white text-4xl">✓</span>
              </div>
            </div>
            <p className="mt-4 text-lg text-black">Pembayaran Berhasil</p>
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
