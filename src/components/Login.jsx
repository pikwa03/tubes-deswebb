import React, { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false); // State untuk mengelola visibilitas password
  const [email, setEmail] = useState(''); // State untuk email
  const [password, setPassword] = useState(''); // State untuk password
  const [error, setError] = useState(''); // State untuk pesan error

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Mengubah visibilitas password
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi untuk memastikan email dan password diisi
    if (!email || !password) {
      setError('Data belum lengkap! Mohon isi email dan password.');
    } else {
      setError('');
      // Lakukan proses login atau arahkan ke dashboard
      window.location.href = '/Dashboard1'; // Ganti dengan URL tujuan yang sesuai
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-teal-500 py-32 px-10">
      {/* Kotak Putih */}
      <div
        className="bg-white rounded-lg shadow-lg p-8"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '25px',
          marginLeft: '50px',
          marginTop: '50px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Masuk</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6 ">
            <label htmlFor="email" className="flex items-center mb-2 text-gray-700">
              <span className="mr-2">👤</span> E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-[#95D2B3] border border-green-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mengatur state email
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="flex items-center mb-2 text-gray-700">
              <span className="mr-2">🔒</span> Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Mengubah tipe input berdasarkan state
                id="password"
                className="w-full p-3 rounded-lg bg-[#95D2B3] border border-green-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Mengatur state password
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility} // Menambahkan event handler untuk toggle
              >
                <img
                  src={showPassword ? '/images/eye.png' : '/images/hide.png'} // Gambar berdasarkan state
                  alt={showPassword ? 'Show Password' : 'Hide Password'}
                  className="w-5 h-5"
                />
              </span>
            </div>
          </div>

          {/* Pesan Error */}
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}

          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold text-center block mt-4 hover:bg-teal-700 hover:text-white transition duration-300"
              style={{
                fontFamily: 'Poppins, sans-serif',
                width: '160px',
                height: '33px',
                borderRadius: '25px',
                lineHeight: '30px',
                textAlign: 'center',
                border: '1px solid black',
              }}
            >
              Masuk
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a href="/register" className="text-teal-700 hover:underline">Daftar</a> |{' '}
          <a href="/forgot-password" className="text-teal-700 hover:underline">Lupa Sandi</a>
        </div>
      </div>

      {/* Gambar Kereta */}
      <div className="ml-10 mt-20">
        <img src="/images/keretalogin.png" alt="Kereta Login" className="w-65 h-auto" />
      </div>
    </div>
  );
}

export default Login;
