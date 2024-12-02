import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";

const Ticket = () => {
  const [passengerData, setPassengerData] = useState(null); // For storing passenger data
  const [paymentStatus, setPaymentStatus] = useState(null); // For storing payment status
  const [balance, setBalance] = useState(0); // For storing user balance
  const [history, setHistory] = useState([]); // For storing user history
  const navigate = useNavigate();

  useEffect(() => {
    // Load passenger and user data from localStorage
    const storedPassengerData = localStorage.getItem("passengerData");
    if (storedPassengerData) {
      const parsedPassengerData = JSON.parse(storedPassengerData);
      console.log("Passenger Data:", parsedPassengerData); // Debugging line
      setPassengerData(parsedPassengerData);
    }

    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      const userId = storedUserData.email;
      const storedSaldo = parseInt(localStorage.getItem(`${userId}_saldo`));
      const storedHistory = JSON.parse(localStorage.getItem(`${userId}_history`));

      if (storedSaldo) setBalance(storedSaldo);
      if (storedHistory) setHistory(storedHistory);
    }

    const paymentStatus = localStorage.getItem("paymentStatus");
    setPaymentStatus(paymentStatus);
  }, []);

  if (!passengerData) {
    return <div>Loading...</div>;
  }

  // Debugging: Check if departureTime and returnTime are available
  console.log("Departure Time:", passengerData.departureTime);
  console.log("Return Time:", passengerData.returnTime);

  const totalAmount =
    passengerData.price * passengerData.adults + passengerData.price / 2 * passengerData.children;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSaveTicket = () => {
    const existingHistory = JSON.parse(localStorage.getItem('travelHistory')) || [];
    localStorage.setItem('travelHistory', JSON.stringify([...existingHistory, passengerData]));
    navigate('/Profil2');
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <div className="relative flex justify-center w-full mt-16 px-2 sm:px-2">
        <h2 className="absolute text-center text-lg sm:text-xl font-bold text-black bg-[#95D2B3] w-full max-w-[800px] h-[60px] top-[-30px] pt-4 rounded-lg">
          Tiket Anda
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
              <p className="mb-1">{passengerData.route}</p>
              <p className="mb-1">{`${passengerData.adults} Dewasa, ${passengerData.children} Anak-anak`}</p>
              {/* Displaying Departure Time */}
              {passengerData.departureTime && (
                <p className="mb-1">
                  Keberangkatan: {new Date(passengerData.departureTime).toLocaleString()}
                </p>
              )}
              {/* Displaying Return Time */}
              {passengerData.returnTime && (
                <p className="mb-1">
                  Kembali: {new Date(passengerData.returnTime).toLocaleString()}
                </p>
              )}
            </div>
          </div>
          <div className="important-info">
          <p className="text-sm font-poppins text-start mb-6">HAL PENTING TERKAIT KEBERANGKATAN</p>
          <ul className="list-none flex justify-between text-center">
            <li className="mb-6 flex flex-col justify-center items-center font-poppins">
              <img
                src="/images/qr.png"
                alt="Icon Ticket"
                className="w-8 h-8 mb-2"
              />
              <span>Gunakan E-tiket untuk cetak boarding pass di stasiun, dari 7 x 24 jam sebelum keberangkatan.</span>
            </li>
            <li className="mb-6 flex flex-col justify-center items-center font-poppins">
              <img
                src="/images/kartu.png"
                alt="Icon ID"
                className="w-18 h-8 mb-2"
              />
              <span>Untuk boarding, bawa tanda pengenal resmi sesuai yang digunakan pada saat pemesanan.</span>
            </li>
            <li className="mb-6 flex flex-col justify-center items-center font-poppins">
              <img
                src="/images/jam.png"
                alt="Icon Clock"
                className="w-8 h-8 mb-2"
              />
              <span>Tiba di stasiun setidaknya <strong>60 menit</strong> sebelum keberangkatan.</span>
            </li>
          </ul>
        </div>
          {/* Save ticket button */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-hijau text-black rounded-full hover:bg-hijau"
            >
              Kembali
            </button>
            <button
              onClick={handleSaveTicket}
              className="px-4 py-2 bg-hijau text-black rounded-full hover:bg-hijau"
            >
              Simpan Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
