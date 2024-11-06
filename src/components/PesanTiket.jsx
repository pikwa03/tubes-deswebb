import React from 'react';
import Header from './Header';

function PesanTiket() {
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
    // Navigasi ke bagian pembayaran bisa ditambahkan di sini nanti
    console.log('Tiket dipesan, lanjut ke pembayaran...');
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <Header />

      <div className="w-[1129px] h-[700px] bg-[#D8EFD3] p-12 shadow-lg rounded-lg mt-24 relative">
        <h2 className="text-3xl font-bold text-black mb-8">Detail Tiket Kereta Api</h2>

        {/* Bagian kanan atas untuk nama dan tanggal */}
        <div className="absolute top-8 pt-6 right-12 text-right font-semibold">
          <p className="text-2xl font-bold text-black">{passengerData.name}</p>
          <div className="mt-3 flex items-center justify-end text-lg text-black">
            <div className="mr-4 pt-8">
              {passengerData.travelDate}<br />
              {passengerData.travelTime}
            </div>
            <div className="pt-8 flex items-center">
              <img src={`${process.env.PUBLIC_URL}/images/kalender.png`} alt="kalender" className="w-12 h-12" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-6">
            <p className="text-2xl font-bold text-black">Rute Kereta Api</p>
            <div className="flex items-center">
              <img src={`${process.env.PUBLIC_URL}/images/kereta3.png`} alt="Kereta" className="w-8 h-8 mr-2" />
              <p className="text-lg text-black">{passengerData.route}</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-2xl font-bold text-black">Penumpang</p>
            <div className="flex items-center">
              <img src={`${process.env.PUBLIC_URL}/images/penumpang.png`} alt="Penumpang" className="w-8 h-8 mr-2" />
              <span className="text-lg text-black">
                Dewasa - {passengerData.adults} orang<br />
                Anak-anak - {passengerData.children} orang
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-2xl font-bold text-black">Kontak</p>
            <div className="flex items-center">
              <img src={`${process.env.PUBLIC_URL}/images/kontak.png`} alt="Kontak" className="w-8 h-8 mr-2" />
              <p className="text-lg text-black">{passengerData.contact}</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">Kereta Api - Harga</p>
            <div className="flex items-center mt-6">
              <img src={`${process.env.PUBLIC_URL}/images/kereta3.png`} alt="Kereta" className="w-8 h-8 mr-2" />
              <p className="text-lg text-black">{passengerData.trainName} - {passengerData.price}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <button
            className="bg-[#55AD9B] text-white text-xl px-12 py-2 rounded-full border-2 border-black hover:bg-[#55AD9B]"
            onClick={handleBooking}
          >
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

export default PesanTiket;
