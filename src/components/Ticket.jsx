import { useNavigate } from 'react-router-dom';
import React from "react";

const Ticket = () => {
  const navigate = useNavigate();

  const ticketData = {
    trainName: "Matahari Timur (06)",
    trainClass: "Ekonomi",
    origin: "Stasiun Kereta Kencana, Balikpapan",
    destination: "Stasiun Istimewah, IKN",
    departureTime: "09.00",
    departureDate: "13 Okt 2024",
    arrivalTime: "11.00",
    duration: "2 j 0m",
    passengers: [
      {
        name: "Dilla Ayu Puspitasari",
        type: "Dewasa",
        idType: "KTP",
        idNumber: "123456789112365998",
        seat: "Ekonomi / Kursi 2B",
      }
    ],
    bookingCode: "ZIR341G",
    orderNumber: "673491340",
  };

  const handleSaveTicket = () => {
    const existingHistory = JSON.parse(localStorage.getItem('travelHistory')) || [];
    localStorage.setItem('travelHistory', JSON.stringify([...existingHistory, ticketData]));
    navigate('/Profil2');
  };

  return (
    <div className="ticket max-w-4xl mx-auto border border-gray-300 rounded-lg bg-white shadow-lg p-6 mt-8">
      {/* Ticket Header */}
      <div className="ticket-header flex items-center justify-between mb-6">
        <img src="/images/logo.png" alt="CHU CHU RAWR Logo" className="w-24 h-auto" />
        <div>
          <h1 className="text-2xl font-bold">CHU CHU RAWR</h1>
          <p className="text-lg font-medium">E-Tiket Perjalanan</p>
        </div>
      </div>

      {/* Train Information */}
      <div className="ticket-info mb-6">
        <h2 className="text-xl font-bold mb-2">{ticketData.trainName}</h2>
        <p className="text-gray-600">{ticketData.trainClass}</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-left">
            <p className="text-sm text-gray-600">Keberangkatan</p>
            <h3 className="text-lg font-semibold">{ticketData.origin}</h3>
            <p>{ticketData.departureDate} - {ticketData.departureTime}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Durasi</p>
            <p className="text-lg font-semibold">{ticketData.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Kedatangan</p>
            <h3 className="text-lg font-semibold">{ticketData.destination}</h3>
            <p>{ticketData.departureDate} - {ticketData.arrivalTime}</p>
          </div>
        </div>
      </div>

      {/* Booking Information */}
      <div className="booking-info bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
        <p className="text-sm text-gray-600">Kode Booking</p>
        <h3 className="text-xl font-bold">{ticketData.bookingCode}</h3>
        <p className="text-sm text-gray-600 mt-2">No. Pesanan</p>
        <p className="text-lg">{ticketData.orderNumber}</p>
      </div>

      {/* Passenger Information */}
      <div className="passenger-info">
        <h3 className="text-lg font-semibold mb-4">Informasi Penumpang</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">No</th>
              <th className="border border-gray-300 p-2">Nama</th>
              <th className="border border-gray-300 p-2">Jenis</th>
              <th className="border border-gray-300 p-2">Tanda Pengenal</th>
              <th className="border border-gray-300 p-2">Nomor Kursi</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.passengers.map((passenger, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 p-2 text-center">{passenger.name}</td>
                <td className="border border-gray-300 p-2 text-center">{passenger.type}</td>
                <td className="border border-gray-300 p-2 text-center">{passenger.idType} - {passenger.idNumber}</td>
                <td className="border border-gray-300 p-2 text-center">{passenger.seat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Kembali
        </button>
        <button
          onClick={handleSaveTicket}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Simpan Tiket
        </button>
      </div>
    </div>
  );
};

export default Ticket;