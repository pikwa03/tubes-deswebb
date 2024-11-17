import React, { useState } from 'react';

function Register() {
  const [showPassword, setShowPassword] = useState(false); // State untuk visibilitas password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk visibilitas konfirmasi sandi
  const [password, setPassword] = useState(''); // State untuk password
  const [confirmPassword, setConfirmPassword] = useState(''); // State untuk konfirmasi password
  const [errorMessage, setErrorMessage] = useState(''); // State untuk menampilkan pesan kesalahan

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setErrorMessage('Password dan konfirmasi password harus diisi.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Password dan konfirmasi password tidak cocok.');
    } else {
      setErrorMessage(''); // Reset pesan error jika data valid
      // Proses pendaftaran di sini
       // Lakukan proses login atau arahkan ke dashboard
       window.location.href = '/Dashboard1';
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-teal-500 py-32 px-10">
      {/* Kotak Putih */}
      <div
        className="bg-white rounded-lg shadow-lg p-8"
        style={{
          width: '500px',
          height: '550px',
          borderRadius: '25px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Daftar</h2>
        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="mb-6">
            <label htmlFor="email" className="flex items-center mb-2 text-gray-700">
              <span className="mr-2">👤</span> E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-[#95D2B3] border border-green-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Email"
            />
          </div>
          
          {/* Input Kata Sandi */}
          <div className="mb-6">
            <label htmlFor="password" className="flex items-center mb-2 text-gray-700">
              <span className="mr-2">🔒</span> Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-3 rounded-lg bg-[#95D2B3] border border-green-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Menyimpan nilai password
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? '/images/eye.png' : '/images/hide.png'}
                  alt={showPassword ? 'Show Password' : 'Hide Password'}
                  className="w-5 h-5"
                />
              </span>
            </div>
          </div>
          
          {/* Input Konfirmasi Sandi */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="flex items-center mb-2 text-gray-700">
              <span className="mr-2">🔒</span> Konfirmasi Sandi
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-full p-3 rounded-lg bg-[#95D2B3] border border-green-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Konfirmasi Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Menyimpan nilai konfirmasi password
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <img
                  src={showConfirmPassword ? '/images/eye.png' : '/images/hide.png'}
                  alt={showConfirmPassword ? 'Show Confirm Password' : 'Hide Confirm Password'}
                  className="w-5 h-5"
                />
              </span>
            </div>
          </div>

          {/* Pesan Error */}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">
              {errorMessage}
            </div>
          )}

          {/* Tombol Daftar */}
          <div className="flex justify-center items-center mt-12">
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold text-center block mt-4 hover:bg-teal-700 hover:text-white transition duration-300"
              style={{
                fontFamily: 'Poppins, sans-serif',
                width: '160px',
                height: '30px',
                borderRadius: '25px',
                lineHeight: '30px',
                textAlign: 'center',
                border: '1px solid black',
              }}
            >
              Daftar
            </button>
          </div>
        </form>
      </div>

      {/* Gambar Kereta */}
      <div className="ml-10 mt-23">
        <img src="/images/keretalogin.png" alt="Kereta Login" className="w-65 h-auto" />
      </div>
    </div>
  );
}

export default Register;
