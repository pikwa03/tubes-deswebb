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
  const [profileImage, setProfileImage] = useState(null); // State untuk menyimpan gambar profil

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk mengubah gambar profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Menyimpan gambar yang dipilih
    }
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
            {/* Menampilkan gambar profil yang sudah dipilih */}
            <img 
                src={profileImage || "images/Profil.png"} // Menampilkan gambar upload atau gambar default
                alt="Poto Profil"
                className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center"
            />
            <input 
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-4 p-2 bg-teal-500 text-white rounded-lg cursor-pointer"
            />
            <h2 className="font-bold font-poppins text-[30px] mb-20 mt-10">Dilla Ayu Puspitasari</h2>
          </div>
          <nav className="text-black font-poppins font-medium text-[25px] flex flex-col items-center justify-center">
            <Link to="#" className="font-bold mb-10 hover:text-teal-500">Data Pribadi</Link>
            <Link to="/Profil2" className="mb-10 hover:text-teal-500">Riwayat Perjalanan</Link>
            <Link to="/Profil3" className="hover:text-teal-500">Saldo</Link>
          </nav>
          <img
            src="images/Trash 2.png"
            alt="Hapus_Akun"
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-lg w-[49px] h-[49px] drop-shadow cursor-pointer"
            onClick={handleDeleteAccount}
          />
        </aside>

        {/* Profile Form */}
        <main className="flex-1 bg-white p-8 relative">
          <div className="space-y-6 pt-20 mt-20">
            <div>
              <label className="block text-gray-700 font-semibold">Nama Depan</label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                  readOnly={!isEditing} // Set readOnly sesuai mode edit
                />
                <button onClick={handleEditClick}>
                    <img 
                        src="images/edit.png"
                        alt="Edit"
                        className="ml-2 p-2 text-gray-500 hover:text-teal-500 cursor-pointer"
                    />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Nama Belakang</label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                  readOnly={!isEditing} // Set readOnly sesuai mode edit
                />
                <button onClick={handleEditClick}>
                    <img 
                        src="images/edit.png"
                        alt="Edit"
                        className="ml-2 p-2 text-gray-500 hover:text-teal-500 cursor-pointer"
                    />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Alamat Email</label>
              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                  readOnly={!isEditing} // Set readOnly sesuai mode edit
                />
                <button onClick={handleEditClick}>
                    <img 
                        src="images/edit.png"
                        alt="Edit"
                        className="ml-2 p-2 text-gray-500 hover:text-teal-500 cursor-pointer"
                    />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Ubah Kata Sandi</label>
              <div className="flex items-center">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                  readOnly={!isEditing} // Set readOnly sesuai mode edit
                />
                <button onClick={handleEditClick}>
                    <img 
                        src="images/Edit.png"
                        alt="Edit"
                        className="ml-2 p-2 text-gray-500 hover:text-teal-500 cursor-pointer"
                    />
                </button>
              </div>
            </div>
          </div>
          <button
            className="absolute bottom-20 right-12 w-[153px] h-[49px] bg-[#55AD9B] font-poppins font-bold text-white text-[20px] py-2 px-4 rounded-lg hover:bg-light-green drop-shadow"
            onClick={handleSaveChanges} // Tambahkan event handler untuk menyimpan
          >
            Simpan
          </button>
        </main>
      </div>
    </div>
  );
}
