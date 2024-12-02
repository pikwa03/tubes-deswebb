import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Header from "./Header";

function PaymentDetails() {
  const [passengerData, setPassengerData] = useState(null); // Menyimpan data penumpang
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isPaymentFailed, setIsPaymentFailed] = useState(false);
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mengambil data penumpang dari localStorage
    const storedData = localStorage.getItem("passengerData");
    if (storedData) {
      setPassengerData(JSON.parse(storedData)); // Mengubah string JSON kembali ke objek JavaScript
    }

    // Mengambil data saldo dan riwayat transaksi dari localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      const userId = storedUserData.email;
      const storedSaldo = parseInt(localStorage.getItem(`${userId}_saldo`));
      const storedHistory = JSON.parse(
        localStorage.getItem(`${userId}_history`)
      );

      if (storedSaldo) {
        setBalance(storedSaldo);
      }

      if (storedHistory) {
        setHistory(storedHistory);
      }
    }
  }, []);

  // Jika data penumpang belum ada, tampilkan loading
  if (!passengerData) {
    return <div>Loading...</div>;
  }

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    if (!passengerData) return 0;
    const adultPrice = parseInt(passengerData.price.replace(/[^\d]/g, ""));
    const childrenPrice = adultPrice / 2;
    return (
      adultPrice * passengerData.adults + childrenPrice * passengerData.children
    );
  };

  const paymentData = {
    providerName: "Nusantara Jaya Ekonomi",
    location: passengerData.route, // Menggunakan rute dari data penumpang
    passengers: `${passengerData.adults} Dewasa, ${passengerData.children} Anak-anak`, // Menggunakan informasi penumpang
    totalAmount: `Rp ${calculateTotalPrice().toLocaleString("id-ID")}`, // Menggunakan harga yang dihitung
    totalAmountNumeric: calculateTotalPrice(), // Mengonversi harga ke angka untuk perhitungan
  };

  const handlePayment = () => {
    // Jika saldo mencukupi, lakukan pembayaran
    if (balance >= paymentData.totalAmountNumeric) {
      const newSaldo = balance - paymentData.totalAmountNumeric;

      const newTransaction = {
        saldoAwal: balance,
        biaya: paymentData.totalAmountNumeric,
        saldoAkhir: newSaldo,
      };

      const userId = JSON.parse(localStorage.getItem("userData")).email;
      const updatedHistory = [newTransaction, ...history];

      // Update saldo dan riwayat transaksi di localStorage
      localStorage.setItem(`${userId}_saldo`, newSaldo);
      localStorage.setItem(`${userId}_history`, JSON.stringify(updatedHistory));

      setBalance(newSaldo);
      setHistory(updatedHistory);

      setIsPaymentSuccessful(true);
      setIsPaymentFailed(false);
    } else {
      // Jika saldo tidak cukup, tampilkan pesan gagal
      setIsPaymentFailed(true);
      setIsPaymentSuccessful(false);
    }
  };

  const closePopup = () => {
    setIsPaymentSuccessful(false);
    setIsPaymentFailed(false);
  };

  const handleNavigateToTicket = () => {
    closePopup(); // Tutup popup
    navigate("/Ticket"); // Pindah ke halaman Ticket
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <Header />
      <div className="relative flex justify-center w-full mt-16 px-2 sm:px-2">
        <h2 className="absolute text-center text-lg sm:text-xl font-bold text-black bg-[#95D2B3] w-full max-w-[800px] h-[60px] top-[-30px] pt-4 rounded-lg">
          Detail Pembayaran
        </h2>

        <div className="w-full max-w-[800px] bg-[#D8EFD3] p-6 sm:p-8 shadow-lg rounded-lg">
          {/* Displaying Passenger Name and Contact */}
          <div className="flex justify-between mb-2">
            <div className="text-base sm:text-lg text-black">
              <p className="font-semibold">{passengerData.name}</p>
            </div>
            <div className="text-base sm:text-lg font-semibold text-black leading-normal">
              <p>{passengerData.contact}</p>
            </div>
          </div>

          <div className="pb-2 border-b border-black">
            <p className="text-base sm:text-lg text-black mb-1 mt-10 sm:mt-2 leading-normal">
              {passengerData.trainName}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 pb-2 mt-6 border-b border-black">
            <div className="text-base sm:text-lg text-black leading-normal mb-4 sm:mb-0">
              <p className="mb-1">{paymentData.location}</p>
              <p className="mb-1">{paymentData.passengers}</p>
            </div>
          </div>

          <div className="flex justify-between text-base sm:text-lg font-semibold text-black py-2 mt-6 border-b border-black leading-normal">
            <span>Total</span>
            <span>{paymentData.totalAmount}</span>
          </div>

          <div className="flex justify-between text-base sm:text-lg items-center font-semibold text-black py-2 mt-6 border-b border-black leading-normal">
            <span>Saldo</span>
            <Link
              to="/Profil3"
              className="flex items-center space-x-2 bg-[#7AC2B4] text-black px-4 py-1 rounded-full w-auto border border-black"
            >
              <MdAccountBalanceWallet className="w-5 h-5 text-black" />
              <span>{`Rp ${balance.toLocaleString("id-ID")}`}</span>
            </Link>
          </div>

          <button
            className="flex items-center justify-center text-base sm:text-lg space-x-2 bg-[#7AC2B4] text-white px-6 py-2 rounded-full w-auto mt-8 ml-auto border border-black"
            onClick={handlePayment}
          >
            Bayar
          </button>
        </div>
      </div>

      {/* Popup untuk gagal atau berhasil */}
      {isPaymentFailed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#F8D7DA] p-6 sm:p-8 rounded-lg text-center max-w-sm w-[90%] sm:w-[600px] shadow-lg">
            <h3 className="text-lg sm:text-2xl font-semibold text-black leading-normal">
              Pembayaran Gagal
            </h3>
            <ImCross className="text-[#55AD9B] h-16 sm:h-24 w-16 sm:w-24 mx-auto mt-4" />
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

      {isPaymentSuccessful && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#95D2B3] p-6 sm:p-8 rounded-lg text-center max-w-sm w-[90%] sm:w-[600px] shadow-lg">
            <h3 className="text-lg sm:text-2xl font-semibold text-black leading-normal">
              Pembayaran Berhasil
            </h3>
            <TiTick className="text-[#55AD9B] h-16 sm:h-24 w-16 sm:w-24 mx-auto mt-4" />
            <p className="mt-4 text-sm sm:text-lg text-black leading-normal">
              Terima kasih telah melakukan pembayaran
            </p>
            <button
              className="mt-6 bg-white text-black font-semibold py-2 px-4 rounded-lg"
              onClick={handleNavigateToTicket}
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
