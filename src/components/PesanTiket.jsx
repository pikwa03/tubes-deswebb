import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import { MdOutlineTrain, MdPermContactCalendar, MdDateRange } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";

function PesanTiket() {
  const navigate = useNavigate();

  const passengerData = {
    name: "Ahmad Fakhrurrozi",
    travelDate: "Senin, 14 Oktober 2024",
    travelTime: "08:45 - 10:45",
    route: "Balikpapan - IKN",
    adults: 2,
    children: 1,
    contact: "085234567890",
    trainName: "Nusantara Jaya (Ekonomi)",
    price: "Rp. 360.000,00",
  };

  const handleBooking = () => {
    // Navigasi ke halaman test-payment
    navigate('/test-payment');
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <Header />

      <div className="w-full max-w-3xl bg-[#D8EFD3] p-8 shadow-lg rounded-lg mt-8 sm:mt-12 relative">
        <h2 className="text-xl sm:xl font-bold text-black mb-4">Detail Tiket Kereta Api</h2>

        {/* Bagian kanan atas untuk nama dan tanggal */}
        <div className="absolute top-4 right-4 p-4 text-center font-semibold">
          <p className="text-sm sm:text-base font-bold text-black">{passengerData.name}</p>
          <div className="flex items-center p-4 text-xs sm:text-sm text-black mt-2">
            <div className="mr-2">
              {passengerData.travelDate}<br />
              {passengerData.travelTime}
            </div>
            <MdDateRange className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-3">
            <p className="text-sm sm:text-base font-bold text-black">Rute Kereta Api</p>
            <div className="flex items-center">
              <MdOutlineTrain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <p className="text-xs sm:text-sm text-black">{passengerData.route}</p>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-sm sm:text-base font-bold text-black">Penumpang</p>
            <div className="flex items-center">
              <FaPerson className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-xs sm:text-sm text-black">
                Dewasa - {passengerData.adults} orang<br />
                Anak-anak - {passengerData.children} orang
              </span>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-sm sm:text-base font-bold text-black">Kontak</p>
            <div className="flex items-center">
              <MdPermContactCalendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <p className="text-xs sm:text-sm text-black">{passengerData.contact}</p>
            </div>
          </div>
          <div>
            <p className="text-sm sm:text-base font-bold text-black">Kereta Api - Harga</p>
            <div className="flex items-center mt-2">
              <MdOutlineTrain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <p className="text-xs sm:text-sm text-black">{passengerData.trainName} - {passengerData.price}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Link to= '/PaymentDetails'
            className="bg-[#55AD9B] text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-black hover:bg-[#55AD9B]"
            onClick={handleBooking}
          >
            Pesan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PesanTiket;