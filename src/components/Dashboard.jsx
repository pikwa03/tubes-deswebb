import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { MdOutlineTrain } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import trains from "../data/trains"; // Mengimpor data trains

const Jadwalkereta = () => {
  const [tripType, setTripType] = useState("one-way");
  const [currentDate, setCurrentDate] = useState("");

  const [originStation, setOriginStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [classType, setClassType] = useState(""); // Tambahan untuk mengikat kelas

  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  // State untuk menyimpan hasil pencarian jadwal
  const [scheduleResults, setScheduleResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const stationList = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Malang",
    "Semarang",
  ];

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = today.toLocaleDateString("id-ID", options);
    setCurrentDate(formattedDate);
  }, []);

  const originRef = useRef();
  const destinationRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (originRef.current && !originRef.current.contains(event.target)) {
        setShowOriginDropdown(false);
      }
      if (
        destinationRef.current &&
        !destinationRef.current.contains(event.target)
      ) {
        setShowDestinationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi untuk menampilkan jadwal kereta setelah klik "Cari Kereta"
  const handleSearchTrains = () => {
    if (!originStation || !destinationStation || !departureDate || !classType) {
      alert("Harap isi semua data yang diperlukan.");
      return;
    }
  
    if (originStation === destinationStation) {
      alert("Stasiun asal dan tujuan tidak boleh sama.");
      return;
    }
  
    if (tripType === "round-trip" && new Date(returnDate) < new Date(departureDate)) {
      alert("Tanggal kembali tidak boleh sebelum tanggal berangkat.");
      return;
    }
  
    // Filter data berdasarkan input pengguna
    const filteredResults = trains.filter(
      (train) =>
        train.origin.toLowerCase() === originStation.toLowerCase() &&
        train.destination.toLowerCase() === destinationStation.toLowerCase() &&
        train.class.toLowerCase() === classType.toLowerCase()
    );
  
    if (filteredResults.length === 0) {
      alert("Tidak ada jadwal kereta yang cocok dengan pilihan Anda.");
      setShowResults(false);
      return;
    }
  
    setScheduleResults(filteredResults);
    setShowResults(true);
  };
  

  return (
    <div className="App">
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div
          className="bg-[#D8EFD3] p-6 rounded-[25px] px-8 py-6 mx-auto"
          style={{
            width: "1300px",
            height: "450px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <h2 className="text-xl font-bold mb-2">Pemesanan Tiket Kereta Api</h2>
          <p className="text-sm mb-7">{currentDate}</p>

          {/* Tipe Perjalanan */}
          <div className="mb-7">
            <label className="block font-medium text-gray-700 mb-1">
              Tipe Perjalanan
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="trip"
                  value="one-way"
                  checked={tripType === "one-way"}
                  onChange={() => setTripType("one-way")}
                />
                <span>Sekali Jalan</span>
              </label>
              
            </div>
          </div>

          {/* Input Stasiun Asal dan Tujuan */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {/* Input Stasiun Asal */}
            <div className="relative" ref={originRef}>
              <label className="block font-bold text-gray-700 mb-1">
                Stasiun Asal
              </label>
              <span className="absolute left-3 top-9">
                <MdOutlineTrain className="w-6 h-6" />
              </span>
              <input
                type="text"
                placeholder="Stasiun Asal"
                className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
                value={originStation}
                onFocus={() => setShowOriginDropdown(true)}
                onChange={(e) => setOriginStation(e.target.value)}
              />
              {showOriginDropdown && (
                <div className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto">
                  {stationList
                    .filter((station) =>
                      station
                        .toLowerCase()
                        .includes(originStation.toLowerCase())
                    )
                    .map((station, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setOriginStation(station);
                          setShowOriginDropdown(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {station}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Input Stasiun Tujuan */}
            <div className="relative" ref={destinationRef}>
              <label className="block font-bold text-gray-700 mb-1">
                Stasiun Tujuan
              </label>
              <span className="absolute left-3 top-9">
                <img
                  src="/images/train.png"
                  alt="Train Icon"
                  className="w-6 h-6"
                />
              </span>
              <input
                type="text"
                placeholder="Stasiun Tujuan"
                className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
                value={destinationStation}
                onFocus={() => setShowDestinationDropdown(true)}
                onChange={(e) => setDestinationStation(e.target.value)}
              />
              {showDestinationDropdown && (
                <div className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto">
                  {stationList
                    .filter((station) =>
                      station
                        .toLowerCase()
                        .includes(destinationStation.toLowerCase())
                    )
                    .map((station, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setDestinationStation(station);
                          setShowDestinationDropdown(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {station}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Input Tanggal Berangkat dan Pulang */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="relative">
                <label className="block font-bold text-gray-700 mb-1">
                  Tanggal Keberangkatan
                </label>
                <span className="absolute left-3 top-9">
                  <SlCalender className="w-6 h-6" />
                </span>
                <input
                  type="date"
                  className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>

            {/* Input Kelas */}
            <div className="mb-5">
              <label className="block font-bold text-gray-700 mb-1">Kelas</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
              >
                <option value="">Pilih Kelas</option>
                <option value="eksekutif">Eksekutif</option>
                <option value="bisnis">Bisnis</option>
                <option value="ekonomi">Ekonomi</option>
              </select>
            </div>
          </div>
          </div>

          {/* Tombol Cari Kereta */}
          <div className="flex justify-end mb-6">
            <button
              onClick={handleSearchTrains}
              className="px-8 py-2 bg-teal-500 hover:bg-teal-600 rounded-full text-white font-bold hover:bg-green-400 border border-black"
            >
              Cari Kereta
            </button>
          </div>


          {/* Hasil Pencarian Jadwal */}
          {showResults && (
            <div className="cpntainer mx-auto p-8 mt-6">
              <h3 className="bg-[#95D2B3] p-6 rounded-lg shadow-lg text-center font-bold mb-4 ">
                JADWAL KERETA
              </h3>
              <ul className="space-y-4">
                {scheduleResults.map((schedule, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-4 bg-[#D8EFD3] rounded-lg shadow-md space-x-4"
                  >
                    {/* Bagian Nama dan Kelas */}
                    <div className="flex flex-col items-start w-1/6">
                      <div className="text-left">
                        <div className="font-bold text-xl text-gray-800">
                          {schedule.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {schedule.class}
                        </div>
                      </div>
                    </div>

                    {/* Bagian Waktu Keberangkatan dan Kedatangan */}
                    <div className="flex flex-col items-center justify-center w-1/6">
                      <div className="font-bold text-lg">
                        {schedule.departureTime}
                      </div>
                      <div className="text-sm text-gray-600">
                        {schedule.origin}
                      </div>
                    </div>

                    <div className="flex items-center justify-center mx-4">
                      <div className="text-gray-600 mx-4">→</div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-1/6">
                      <div className="font-bold text-lg">
                        {schedule.arrivalTime}
                      </div>
                      <div className="text-sm text-gray-600">
                        {schedule.destination}
                      </div>
                    </div>

                    {/* Bagian Durasi */}
                    <div className="flex items-center justify-center w-1/6">
                      <div className="font-bold text-lg">
                        {schedule.duration}
                      </div>
                    </div>

                    {/* Bagian Harga */}
                    <div className="flex items-center justify-center flex-col items-end w-1/6">
                      <div className="text-xl font-bold text-gray-800">
                        {schedule.price}
                      </div>
                    </div>

                    {/* Tombol Pesan */}
                    <div className="w-1/6 flex items-center justify-center">
                      <Link
                        to={`/PesanTiket/${schedule.id}`}
                        className="bg-[#55AD9B] font-bold text-white text-base sm:text-lg px-6 py-2 rounded-full border border-black hover:bg-[#55AD9B] flex item-center justify-center"
                      >
                        Pesan
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jadwalkereta;
