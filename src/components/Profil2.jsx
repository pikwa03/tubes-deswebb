import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Impor Link
import Header from './Header';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'Dila',
    lastName: 'Ayu',
    email: 'dilla@gmail.com',
    password: '***************',
  });

  const [isEditing, setIsEditing] = useState(false); // State untuk mode edit

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi konfirmasi penghapusan akun
  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus akun?");
    if (confirmed) {
      alert("Akun berhasil dihapus."); // Ganti dengan logika penghapusan sesuai kebutuhan
    }
  };

  // Fungsi konfirmasi penyimpanan perubahan
  const handleSaveChanges = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan perubahan?");
    if (confirmed) {
      alert("Perubahan berhasil disimpan."); // Ganti dengan logika penyimpanan sesuai kebutuhan
      setIsEditing(false); // Matikan mode edit setelah menyimpan
    }
  };

  // Fungsi untuk mengaktifkan mode edit
  const handleEditClick = () => {
    setIsEditing(true);
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
                src="images/Profil.png"
                alt="Poto Profil"
                className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center"
            />
            <h2 className="font-bold font-poppins text-[30px] mb-20 mt-10">Dilla Ayu Puspitasari</h2>
          </div>
          <nav className="text-black font-poppins font-medium text-[25px] flex flex-col items-center justify-center">
            <Link to="/Profil1" className="mb-10 hover:text-teal-500">Data Pribadi</Link>
            <Link to="#" className="font-bold  mb-10 hover:text-teal-500">Riwayat Perjalanan</Link> {/* Tambahkan navigasi ke Profil2 */}
            <Link to="/Profil3" className="hover:text-teal-500">Saldo</Link> {/* Tambahkan navigasi ke Profil3 */}
          </nav>
          <img
            src="images/Trash 2.png"
            alt="Hapus_Akun"
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-lg w-[49px] h-[49px] drop-shadow cursor-pointer"
            onClick={handleDeleteAccount}
          />
        </aside>

    <main className="flex-1 bg-gray-100 p-8 relative">
        <div className="space-y-6">
            {/* Card Riwayat */}
            {Array(4).fill().map((_, index) => (
        <div
        key={index}
        className="flex items-center bg-[#D7F9E6] rounded-lg p-4 shadow-md"
        >
        {/* Icon */}
        <img
          src="images/kereta4.png"
          alt="Train Icon"
          className="w-16 h-16 mr-4"
        />

        {/* Info Perjalanan */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-black">Balikpapan - IKN</h3>
          <p className="text-sm text-gray-700">2 Dewasa</p>
          <p className="text-sm text-gray-700">2 Anak - anak</p>
        </div>

        {/* Tanggal */}
        <p className="text-sm text-gray-700 font-medium">14, Oktober 2024</p>
        </div>
        ))}
        </div>
    </main>

      </div>
    </div>
  );
}
