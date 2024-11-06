import React, { useState } from 'react';
import Header from './Header'; // Pastikan jalur ini sesuai dengan struktur folder Anda

function PaymentDetails() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Data dummy
  const paymentData = {
    providerName: "Nusantara Jaya Ekonomi",
    location: "Balikpapan - IKN",
    passengers: "2 Dewasa, 1 Anak-anak",
    totalAmount: "Rp 360.000,00"
  };

  const handlePayment = () => {
    setIsPaymentSuccessful(true);
  };

  const closePopup = () => {
    setIsPaymentSuccessful(false);
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <Header />

      <div className="relative w-[1129px] mt-24">
        <h2 className="absolute text-center text-3xl font-bold text-black bg-[#95D2B3] w-[1129px] h-[82px] top-[-30px] pt-6 rounded-lg">
          Detail Pembayaran
        </h2>

        <div className="w-[1129px] h-[720px] bg-[#D8EFD3] p-12 shadow-lg rounded-lg"> {/* Padding ditambah menjadi p-8 */}
          <div className="pb-4 border-b border-black">
            <p className="text-2xl text-black mb-2 mt-24 leading-10">{paymentData.providerName}</p>
          </div>
          <div className="flex justify-between items-center pt-2 pb-4 mt-10 border-b border-black">
            <div className="text-2xl text-black leading-10">
              <p className="mb-1">{paymentData.location}</p>
              <p className="mb-1">{paymentData.passengers}</p>
            </div>
            <span className="text-2xl font-semibold text-black leading-10">{paymentData.totalAmount}</span>
          </div>

          <div className="flex justify-between text-2xl font-semibold text-black py-2 mt-10 border-b border-black leading-10">
            <span>Total</span>
            <span>{paymentData.totalAmount}</span>
          </div>
          
          <div className="flex justify-between text-2xl items-center font-semibold text-black py-2 mt-10 border-b border-black leading-10">
            <span>Saldo</span>
            <button className="flex items-center space-x-2 bg-[#7AC2B4] text-white px-3 py-1 rounded-full w-[189px] h-[36px] border border-black">
              <img src={`${process.env.PUBLIC_URL}/images/saldo.png`} alt="saldo" className="w-8 h-8" />
              <span>Saldo</span>
            </button>
          </div>

          <button
            className="flex items-center justify-center text-2xl space-x-2 bg-[#7AC2B4] text-white px-12 py-2 rounded-full w-[189px] h-[36px] mt-12 ml-auto border border-black"
            onClick={handlePayment}
          >
            Bayar
          </button>
        </div>
      </div>

      {isPaymentSuccessful && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#95D2B3] p-8 rounded-lg text-center max-w-sm w-[600px] h-[350px] shadow-lg">
            <h3 className="text-2xl font-semibold text-black leading-10">Berhasil</h3>
            <div className="flex justify-center mt-4">
              <img src={`${process.env.PUBLIC_URL}/images/berhasil.png`} alt="Berhasil" className="h-24 w-24" />
            </div>
            <p className="mt-4 text-lg text-black leading-10">Pembayaran Berhasil</p>
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
