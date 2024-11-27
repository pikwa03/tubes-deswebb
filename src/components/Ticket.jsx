import { useNavigate } from 'react-router-dom';

import React from "react";

const Ticket = () => {
  const navigate = useNavigate(); // Pastikan ini ada di dalam komponen

  const handleGoBack = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div className="ticket w-[1120px] h-[650px] mx-auto border border-gray-300 rounded-lg font-sans bg-light-green p-8 mt-8 my-18">
      {/* Ticket Header */}
      <div className="ticket-header text-center border-b border-gray-300 pb-4 mb-4">
        <img
          src="/images/logo.png"
          alt="CHU CHU RAWR Logo"
          className="ticket-logo w-[80px] h-auto mb-2"
        />
        <h1 className="text-xl text-start font-poppins font-bold text-[30px]">CHU CHU RAWR</h1>
        <p className="text-sm text-start font-poppins font-medium text-[24px]">E-tiket (Kereta Pergi)</p>
      </div>

      {/* Ticket Body */}
      <div className="ticket-body text-sm">
        {/* Train Info */}
        <div className="train-info mb-4">
          <h2 className="text-lg font-poppins">Matahari Timur (06)</h2>
          <p className="economy-class text-gray-500 font-poppins my-1">Ekonomi</p>
          <div className="train-timing flex justify-between mb-2">
            <div className="text-center">
              <p className="time font-poppins text-base">09.00</p>
              <p className="date  font-poppinstext-xs">13 Okt</p>
            </div>
            <div className="travel-time">
              <p className="text-sm font-poppins">2 j 0m</p>
            </div>
            <div className="text-center">
              <p className="time text-base font-poppins">11.00</p>
              <p className="date text-xs font-poppins">13 Okt</p>
            </div>
          </div>
          <div className="stations flex justify-between text-sm font-poppins text-gray-700">
            <p>Stasiun Kereta Kencana</p>
            <p>Stasiun Istimewah</p>
          </div>
        </div>

        {/* Booking Info */}
        <div className="booking-info mb-4">
          <div className="booking-code border-dashed border-gray-300 p-4 mb-4 text-center">
            <p className="text-sm font-poppins">Kode Booking</p>
            <h3 className="text-base font-poppins text-gray-700">ZIR341G</h3>
            <p className="text-sm font-poppins">No. Pesanan CHU CHU RAWR</p>
            <p className="text-sm font-poppins">673491340</p>
          </div>
          <div className="important-info">
            <p className="text-sm font-poppins">HAL PENTING TERKAIT KEBERANGKATAN</p>
            <ul className="list-none p-0 m-0">
              <li className="mb-2 font-poppins">Gunakan E-tiket untuk cetak boarding pass di stasiun, dari 7 x 24 jam sebelum keberangkatan.</li>
              <li className="mb-2 font-poppins">Untuk boarding, bawa tanda pengenal resmi sesuai yang digunakan pada saat pemesanan.</li>
              <li className="mb-2 font-poppins">Tiba di stasiun setidaknya <strong>60 menit</strong> sebelum keberangkatan.</li>
            </ul>
          </div>
        </div>

        {/* Passenger Info */}
        <div className="passenger-info">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 text-center font-poppins bg-gray-100">NO</th>
                <th className="border border-gray-300 p-2 text-center font-poppins bg-gray-100">Penumpang</th>
                <th className="border border-gray-300 p-2 text-center font-poppins bg-gray-100">Jenis</th>
                <th className="border border-gray-300 p-2 text-center font-poppins bg-gray-100">Tanda Pengenal & Nomor</th>
                <th className="border border-gray-300 p-2 text-center font-poppins bg-gray-100">Nomor Kursi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-poppins text-center">1</td>
                <td className="border border-gray-300 p-2 font-poppins text-center">Dilla Ayu Puspitasari</td>
                <td className="border border-gray-300 p-2 font-poppins text-center">Dewasa</td>
                <td className="border border-gray-300 p-2 font-poppins text-center">KTP - 123456789112365998</td>
                <td className="border border-gray-300 p-2 font-poppins text-center">Ekonomi / Kursi 2B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
