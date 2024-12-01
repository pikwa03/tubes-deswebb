import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'Dila',
    lastName: 'Ayu',
    email: 'dilla@gmail.com',
    password: '***************',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setFormData(storedData);
      setProfileImage(storedData.profileImage || null); 
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProfileImage = reader.result;
        setProfileImage(newProfileImage);
        
        // Simpan gambar ke localStorage setelah diubah
        const updatedData = { ...formData, profileImage: newProfileImage };
        localStorage.setItem('userData', JSON.stringify(updatedData));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    const confirmed = window.confirm('Apakah Anda yakin ingin menyimpan perubahan?');
    if (confirmed) {
      const updatedData = { ...formData, profileImage };
      localStorage.setItem('userData', JSON.stringify(updatedData));
      alert('Perubahan berhasil disimpan.');
      setIsEditing(false); 
    }
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm('Apakah Anda yakin ingin menghapus akun?');
    if (confirmed) {
      alert('Akun berhasil dihapus.');
      localStorage.removeItem('userData');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      setProfileImage(null); 
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-light-green w-[375px] h-[914px] p-8 relative">
          <div className="text-center mt-20">
            <img
              src={profileImage || 'images/Profil.png'}
              alt="Poto Profil"
              className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-4 p-2 bg-teal-500 text-white rounded-lg cursor-pointer"
            />
            <h2 className="font-bold font-poppins text-[30px] mb-10 mt-10">
              {`${formData.firstName} ${formData.lastName}`}
            </h2>
            <nav className="text-black font-poppins font-medium text-[25px] flex flex-col items-center justify-center">
              <Link to="#" className="font-bold mb-10 hover:text-teal-500">
                Data Pribadi
              </Link>
              <Link to="/Profil2" className="mb-10 hover:text-teal-500">
                Riwayat Perjalanan
              </Link>
              <Link to="/Profil3" className="hover:text-teal-500">
                Saldo
              </Link>
            </nav>
            <img
              src="images/Trash 2.png"
              alt="Hapus_Akun"
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-lg w-[49px] h-[49px] drop-shadow cursor-pointer"
              onClick={handleDeleteAccount}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-8 relative">
          <div className="space-y-6 pt-20">
            {['firstName', 'lastName', 'email', 'password'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-semibold">
                  {field === 'firstName'
                    ? 'Nama Depan'
                    : field === 'lastName'
                    ? 'Nama Belakang'
                    : field === 'email'
                    ? 'Alamat Email'
                    : 'Kata Sandi'}
                </label>
                <div className="flex items-center">
                  <input
                    type={field === 'password' ? 'password' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                    readOnly={!isEditing}
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
            ))}
          </div>

          <button
            className="absolute bottom-20 right-12 w-[153px] h-[49px] bg-[#55AD9B] font-poppins font-bold text-white text-[20px] py-2 px-4 rounded-lg hover:bg-light-green"
            onClick={handleSaveChanges}
          >
            Simpan
          </button>
        </main>
      </div>
    </div>
  );
}
