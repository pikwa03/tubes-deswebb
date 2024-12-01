import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FaPlusCircle } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Dila",
    lastName: "Ayu",
    email: "dilla@gmail.com",
    password: "***************",
  });

  const [profileImage, setProfileImage] = useState("/images/Profil1.png");
  const [saldo, setSaldo] = useState(0); // Saldo awal
  const [isAdding, setIsAdding] = useState(false); // State untuk menampilkan input saldo baru
  const [inputSaldo, setInputSaldo] = useState(""); // State untuk nilai input saldo baru
  const [history, setHistory] = useState([ // Histori transaksi awal
    {
      saldoAwal: 0,
      biaya: 0,
      saldoAkhir: 0,
    },
  ]);

  useEffect(() => {
    // Ambil data user dari localStorage berdasarkan akun yang sedang aktif
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setProfileImage(storedData.profileImage || "/images/Profil1.png");
      setFormData(storedData);
    }

    // Ambil saldo dan history dari localStorage berdasarkan ID pengguna
    const userId = storedData ? storedData.email : null; // Asumsikan email sebagai ID unik
    if (userId) {
      const storedSaldo = parseInt(localStorage.getItem(`${userId}_saldo`));
      const storedHistory = JSON.parse(localStorage.getItem(`${userId}_history`));

      if (storedSaldo) {
        setSaldo(storedSaldo); // Set saldo dari localStorage
      }

      if (storedHistory) {
        setHistory(storedHistory); // Set history dari localStorage
      }
    }
  }, []);

  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus akun?");
    if (confirmed) {
      localStorage.removeItem("userData");
      const userId = formData.email;
      localStorage.removeItem(`${userId}_saldo`);
      localStorage.removeItem(`${userId}_history`);
      alert("Akun berhasil dihapus.");
    }
  };

  const handleAddSaldoClick = () => {
    setIsAdding(true); // Menampilkan input saldo baru
  };

  const handleSaveSaldo = () => {
    const nominal = parseInt(inputSaldo);
    if (!isNaN(nominal) && nominal > 0) {
      const newSaldo = saldo + nominal;
      const newHistory = {
        saldoAwal: saldo,
        biaya: nominal,
        saldoAkhir: newSaldo,
      };
      
      // Simpan saldo dan history ke localStorage dengan ID pengguna
      const userId = formData.email; // Ambil ID pengguna (email)
      localStorage.setItem(`${userId}_saldo`, newSaldo);
      localStorage.setItem(`${userId}_history`, JSON.stringify([newHistory, ...history]));
      
      setSaldo(newSaldo); // Perbarui saldo
      setHistory([newHistory, ...history]); // Tambahkan transaksi ke histori
      setInputSaldo(""); // Kosongkan input
      setIsAdding(false); // Sembunyikan input setelah disimpan
    } else {
      alert("Masukkan nominal yang valid!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-light-green w-[375px] h-[914px] p-8 relative">
          <div className="text-center mt-20">
            <img
              src={profileImage || "/images/Profil.png"}
              alt="Poto Profil"
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
            <Link to="/Profil2" className="mb-10 hover:text-teal-500">
              Riwayat Perjalanan
            </Link>
            <Link to="#" className="font-bold hover:text-teal-500">
              Saldo
            </Link>
          </nav>
          <img
            src="images/Trash 2.png"
            alt="Hapus_Akun"
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-lg w-[49px] h-[49px] drop-shadow cursor-pointer"
            onClick={handleDeleteAccount}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8 relative space-y-6">
          {/* Saldo Card */}
          <div className="flex items-center justify-between bg-[#D7F9E6] rounded-lg p-4 shadow-md">
            <div className="flex items-center">
              <GiWallet className="w-16 h-16 text-[#55AD9B] mr-4" />
              <div>
                <h3 className="text-lg font-bold text-black">Saldo</h3>
                <p className="text-lg font-semibold text-gray-700">
                  Rp. {saldo.toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            {/* Tombol Tambah */}
            <button
              onClick={handleAddSaldoClick}
              className="bg-transparent w-10 h-10 rounded-full flex items-center justify-center hover:text-[#46a088]"
            >
              <FaPlusCircle className="text-[#55AD9B] text-4xl hover:text-[#46a088]" />
            </button>
          </div>

          {/* Input Saldo Baru */}
          {isAdding && (
            <div className="flex items-center mt-4">
              <input
                type="number"
                placeholder="Masukkan Nominal"
                value={inputSaldo}
                onChange={(e) => setInputSaldo(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
              />
              <button
                onClick={handleSaveSaldo}
                className="ml-4 bg-[#55AD9B] text-white p-2 rounded-lg hover:bg-[#46a088]"
              >
                Simpan
              </button>
            </div>
          )}

          {/* Tabel Transaksi */}
          <div className="bg-[#D7F9E6] rounded-lg p-6 shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="text-lg font-semibold text-black">
                  <th className="pb-4">Saldo Awal</th>
                  <th className="pb-4">Biaya</th>
                  <th className="pb-4">Saldo Akhir</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={index} className="text-lg font-medium text-gray-700">
                    <td className="py-2">
                      Rp. {item.saldoAwal.toLocaleString("id-ID")}
                    </td>
                    <td className="py-2 text-green-500">
                      Rp. {item.biaya.toLocaleString("id-ID")}
                    </td>
                    <td className="py-2">
                      Rp. {item.saldoAkhir.toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
