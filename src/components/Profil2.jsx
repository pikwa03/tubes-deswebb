import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Impor Link
import Header from './Header';

export default function ProfilePage2() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const [profileImage, setProfileImage] = useState('/images/Profil1.png'); // Path gambar profil
  const [historyImages] = useState(Array(4).fill('/images/kereta4.png')); // Path ikon riwayat perjalanan
  const [travelHistory, setTravelHistory] = useState([]); // State untuk menyimpan riwayat perjalanan

  // Ambil data nama dan riwayat perjalanan dari localStorage saat halaman dimuat
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    const storedHistory = JSON.parse(localStorage.getItem('travelHistory')) || []; // Ambil riwayat perjalanan dari localStorage
    if (storedData) {
      setFormData({
        firstName: storedData.firstName || '',
        lastName: storedData.lastName || '',
      });
      setProfileImage(storedData.profileImage || '/images/Profil1.png');
    }
    setTravelHistory(storedHistory); // Set riwayat perjalanan
  }, []);

  // Fungsi untuk menambah riwayat perjalanan (setelah pembelian berhasil)
  const handleAddTravelHistory = (newTravel) => {
    const updatedHistory = [...travelHistory, newTravel]; // Tambahkan riwayat baru
    setTravelHistory(updatedHistory); // Update state riwayat perjalanan
    localStorage.setItem('travelHistory', JSON.stringify(updatedHistory)); // Simpan riwayat perjalanan ke localStorage
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm('Apakah Anda yakin ingin menghapus akun?');
    if (confirmed) {
      alert('Akun berhasil dihapus.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Memanggil Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-light-green w-[375px] h-[914px] p-8 relative">
          <div className="text-center mt-20">
            <img
              src={profileImage}
              alt="Foto Profil"
              className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center"
            />
            <h2 className="font-bold font-poppins text-[30px] mb-20 mt-10">
              {formData.firstName} {formData.lastName}
            </h2>
          </div>
          <nav className="text-black font-poppins font-medium text-[25px] flex flex-col items-center justify-center">
            <Link to="/Profil1" className="mb-10 hover:text-teal-500">
              Data Pribadi
            </Link>
            <Link to="#" className="font-bold mb-10 hover:text-teal-500">
              Riwayat Perjalanan
            </Link>
            <Link to="/Profil3" className="hover:text-teal-500">
              Saldo
            </Link>
          </nav>
          <img
            src="/images/Trash 2.png"
            alt="Hapus Akun"
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-lg w-[49px] h-[49px] drop-shadow cursor-pointer"
            onClick={handleDeleteAccount}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8 relative">
          <div className="space-y-6">
            {/* Card Riwayat */}
            {travelHistory.length > 0 ? (
              travelHistory.map((travel, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#D7F9E6] rounded-lg p-4 shadow-md"
                >
                  {/* Icon */}
                  <img src={historyImages[index]} alt="Train Icon" className="w-16 h-16 mr-4" />

                  {/* Info Perjalanan */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black">
                      {travel.origin} - {travel.destination}
                    </h3>
                    <p className="text-sm text-gray-700">{travel.adult} Dewasa</p>
                    <p className="text-sm text-gray-700">{travel.children} Anak-anak</p>
                  </div>

                  {/* Tanggal */}
                  <p className="text-sm text-gray-700 font-medium">
                    {travel.date}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">Tidak ada riwayat perjalanan.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
