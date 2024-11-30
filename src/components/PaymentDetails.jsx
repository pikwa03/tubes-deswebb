import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdAccountBalanceWallet } from "react-icons/md"; // Import icon saldo
import { TiTick } from "react-icons/ti"; // Import icon berhasil
import { ImCross } from "react-icons/im"; // Import icon gagal
import Header from './Header';

function PaymentDetails() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isPaymentFailed, setIsPaymentFailed] = useState(false);
  const [balance] = useState(500000); // Misalnya saldo pengguna 500.000
  const navigate = useNavigate();

  // Data dummy
  const paymentData = {
    providerName: "Nusantara Jaya Ekonomi",
    location: "Balikpapan - IKN",
    passengers: "2 Dewasa, 1 Anak-anak",
    totalAmount: "Rp 360.000,00",
    totalAmountNumeric: 360000 // Angka untuk perhitungan saldo
  };

  const handlePayment = () => {
    if (balance >= paymentData.totalAmountNumeric) {
      setIsPaymentSuccessful(true);
      // setTimeout(() => {
      //   // Setelah 2 detik, navigasi ke halaman PesanTiket
      //   navigate('/pesan-tiket');
      // }, 2000); // Waktu tunggu pop-up sukses sebelum navigasi
    } else {
      setIsPaymentFailed(true);
    }
  };

  const closePopup = () => {
    setIsPaymentSuccessful(false);
    setIsPaymentFailed(false);
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <Header />

      <div className="relative flex justify-center w-full mt-16 px-2 sm:px-2">
        {/* Title */}
        <h2 className="absolute text-center text-lg sm:text-xl font-bold text-black bg-[#95D2B3] w-full max-w-[800px] h-[60px] top-[-30px] pt-4 rounded-lg">
          Detail Pembayaran
        </h2>

        {/* Content */}
        <div className="w-full max-w-[800px] bg-[#D8EFD3] p-6 sm:p-8 shadow-lg rounded-lg">
          {/* Provider Information */}
          <div className="pb-2 border-b border-black">
            <p className="text-base sm:text-lg text-black mb-1 mt-10 sm:mt-16 leading-normal">
              {paymentData.providerName}
            </p>
          </div>

          {/* Payment Details */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 pb-2 mt-6 border-b border-black">
            <div className="text-base sm:text-lg text-black leading-normal mb-4 sm:mb-0">
              <p className="mb-1">{paymentData.location}</p>
              <p className="mb-1">{paymentData.passengers}</p>
            </div>
            <span className="text-base sm:text-lg font-semibold text-black leading-normal">
              {paymentData.totalAmount}
            </span>
          </div>

          {/* Total */}
          <div className="flex justify-between text-base sm:text-lg font-semibold text-black py-2 mt-6 border-b border-black leading-normal">
            <span>Total</span>
            <span>{paymentData.totalAmount}</span>
          </div>
          
          {/* Saldo */}
          <div className="flex justify-between text-base sm:text-lg items-center font-semibold text-black py-2 mt-6 border-b border-black leading-normal">
            <span>Saldo</span>
            <Link to='/Profil3' className="flex items-center space-x-2 bg-[#7AC2B4] text-black px-4 py-1 rounded-full w-auto border border-black">
              <MdAccountBalanceWallet className="w-5 h-5 text-black" /> {/* Menggunakan icon dari react-icons */}
              <span>{`Rp ${balance.toLocaleString()}`}</span>
            </Link>
          </div>

          {/* Payment Button */}
          <button
            className="flex items-center justify-center text-base sm:text-lg space-x-2 bg-[#7AC2B4] text-white px-6 py-2 rounded-full w-auto mt-8 ml-auto border border-black"
            onClick={handlePayment}
          >
            Bayar
          </button>
        </div>
      </div>

      {/* Pop-up Gagal */}
      {isPaymentFailed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#F8D7DA] p-6 sm:p-8 rounded-lg text-center max-w-sm w-[90%] sm:w-[600px] shadow-lg">
            <h3 className="text-lg sm:text-2xl font-semibold text-black leading-normal">
              Pembayaran Gagal
            </h3>
            <div className="flex justify-center mt-4">
              <ImCross className="text-[#55AD9B] h-16 sm:h-24 w-16 sm:w-24" />
            </div>
            <p className="mt-4 text-sm sm:text-lg text-black leading-normal">
              Saldo tidak mencukupi
            </p>
            <button
              className="mt-6 bg-white text-black font-semibold py-2 px-4 rounded-lg"
              onClick={closePopup}
            >
              Oke
            </button>
          </div>
        </div>
      )}

      {/* Pop-up Berhasil */}
      {isPaymentSuccessful && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#95D2B3] p-6 sm:p-8 rounded-lg text-center max-w-sm w-[90%] sm:w-[600px] shadow-lg">
            <h3 className="text-lg sm:text-2xl font-semibold text-black leading-normal">
              Pembayaran Berhasil
            </h3>
            <div className="flex justify-center mt-4">
              <TiTick className="text-[#55AD9B] h-16 sm:h-24 w-16 sm:w-24" />
            </div>
            <p className="mt-4 text-sm sm:text-lg text-black leading-normal">
              Pembayaran Anda berhasil
            </p>
            <Link  to= '/Ticket'
              className="mt-6 bg-white text-black font-semibold py-2 px-4 rounded-lg"
              onClick={closePopup}
            >
              Oke
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentDetails;