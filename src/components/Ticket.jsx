import { useNavigate } from 'react-router-dom';

import React from "react";

const Ticket = () => {
  const navigate = useNavigate(); // Pastikan ini ada di dalam komponen

  const handleGoBack = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div className="ticket w-[1120px] h-[650px] mx-auto border border-gray-300 rounded-lg font-sans bg-light-green p-6 mt-16 my-16">
      {/* Ticket Header */}
      <div className="ticket-header flex items-center pb-2 mb-2">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="CHU CHU RAWR Logo"
          className="ticket-logo w-[100px] h-auto mr-4"
        />
        {/* Text Section */}
        <div>
          <h1 className="text-xl font-poppins font-bold text-[30px]">CHU CHU RAWR</h1>
        </div>
      </div>
      <div className="ticket-header flex items-center pb-4 mb-4">
        <p className="text-sm font-poppins font-medium text-[34px]">E-tiket </p>
      </div>
      

      {/* Ticket Body */}
      <div className="ticket-body text-sm">
        {/* Train Info */}
        <div className="train-info mb-4">
          <h2 className="text-lg font-poppins font-bold">Matahari Timur (06)</h2>
          <p className="economy-class text-gray-500 font-poppins font-medium my-1">Ekonomi</p>

          <div className="train-timing flex flex-col justify-start items-center mb-4 text-center gap-2 mt-[-59px]">
              <h1 className="text-lg font-bold">Minggu 13 Oktober 2024</h1>
            <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
              {/* <!-- Waktu & Tanggal Awal --> */}
              <div className="text-right">
                <p className="time font-poppins text-base font-medium">09.00</p>
                <p className="date font-poppins text-xs text-black font-medium">13 Okt</p>
              </div>

              {/* <!-- Stasiun Awal --> */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 h-16 border-l-2 border-gray-400"></div>
                </div>
                <div>
                  <p className="font-bold">Stasiun Kereta Kencana</p>
                  <p className="text-sm text-left font-medium text-black">Balikpapan</p>
                </div>
              </div>

              {/* <!-- Durasi Perjalanan --> */}
              <div className="text-right">
                <p className="text-sm text-black">2 j 0m</p>
              </div>
              <div></div> 
              
              {/* <!-- Placeholder untuk menjaga struktur grid --> */}

              {/* <!-- Waktu & Tanggal Akhir --> */}
              <div className="text-right">
                <p className="time font-poppins text-base font-medium">11.00</p>
                <p className="date font-poppins text-xs text-black">13 Okt</p>
              </div>

              {/* <!-- Stasiun Akhir --> */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Stasiun Istimewah</p>
                  <p className="text-sm text-left text-black font-medium">IKN</p>
                </div>
              </div>
            </div>
          </div> 
        </div>

        {/* Booking Info */}
        <div className="booking-info mb-2">
          <div className="train-timing flex flex-col items-center mb-12 text-center gap-2 mt-[-150px]">
            <div className="ml-auto border-2 border-dark-green bg-dark-green  p-6 rounded-lg shadow-md space-y-2">
              <p className="text-sm font-medium text-[30px] font-poppins">Kode Booking</p>
              <h3 className="text-base font-bold font-poppins text-[33px] text-black">ZIR341G</h3>
              <p className="text-sm font-medium text-[20px] font-poppins ">No. Pesanan CHU CHU RAWR</p>
              <p className="text-sm font-medium text-left text-[20px] font-poppins">673491340</p>
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

        </div>

        {/* Passenger Info */}
        <div className="passenger-info ">
          <table className="w-full border-collapse text-xs ">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center font-poppins bg-gray-100">NO</th>
                <th className="border border-black p-2 text-center font-poppins bg-gray-100">Penumpang</th>
                <th className="border border-black p-2 text-center font-poppins bg-gray-100">Jenis</th>
                <th className="border border-black p-2 text-center font-poppins bg-gray-100">Tanda Pengenal & Nomor</th>
                <th className="border border-black p-2 text-center font-poppins bg-gray-100">Nomor Kursi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2 font-poppins text-center">1</td>
                <td className="border border-black p-2 font-poppins text-center">Dilla Ayu Puspitasari</td>
                <td className="border border-black p-2 font-poppins text-center">Dewasa</td>
                <td className="border border-black p-2 font-poppins text-center">KTP - 123456789112365998</td>
                <td className="border border-black p-2 font-poppins text-center">Ekonomi / Kursi 2B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
