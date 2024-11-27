import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { MdOutlineTrain } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Jadwalkereta = () => {
  const [tripType, setTripType] = useState('one-way');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  const [originStation, setOriginStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [classType, setClassType] = useState(''); // Tambahan untuk mengikat kelas

  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  // State untuk menyimpan hasil pencarian jadwal
  const [scheduleResults, setScheduleResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const stationList = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Malang', 'Semarang'];

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('id-ID', options);
    setCurrentDate(formattedDate);
  }, []);

  const originRef = useRef();
  const destinationRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (originRef.current && !originRef.current.contains(event.target)) {
        setShowOriginDropdown(false);
      }
      if (destinationRef.current && !destinationRef.current.contains(event.target)) {
        setShowDestinationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Data dummy untuk jadwal kereta
  const dummyScheduleData = [
    { name: 'Berung Madu (02)', class: "Ekonomi", departureTime: '07:25', arrivalTime: '09:25', origin:'Jakarta', destination:'Bandung', duration: '2 h 0 m', price: 'Rp. 120.000' },
    { name: 'Jaya Bandung (06)', class: "Ekonomi", departureTime: '08:45', arrivalTime: '10:45', origin:'Jakarta', destination:'Bandung', duration: '2 h 0 m', price: 'Rp. 130.000' },
    { name: 'Barat Timur (09)', class: "Ekonomi", departureTime: '09:00', arrivalTime: '11:00', origin:'Jakarta', destination:'Bandung', duration: '2 h 0 m', price: 'Rp. 140.000' },
    { name: 'Rimbe Raya (11)', class: "Ekonomi", departureTime: '13:05', arrivalTime: '14:45', origin:'Jakarta', destination:'Bandung', duration: '1 h 40 m', price: 'Rp. 150.000' },
  ];

  // Fungsi untuk menampilkan jadwal kereta setelah klik "Cari Kereta"
  const handleSearchTrains = () => {
    // Validasi input
    if (!originStation || !destinationStation || !departureDate || (tripType === 'round-trip' && !returnDate) || !classType) {
      alert('Harap isi semua data yang diperlukan.');
      return;
    }
    
    // Validasi stasiun asal dan tujuan tidak boleh sama
    if (originStation === destinationStation) {
      alert('Stasiun asal dan tujuan tidak boleh sama.');
      return;
    }

    // Set hasil pencarian ke state dan tampilkan
    setScheduleResults(dummyScheduleData);
    setShowResults(true);
  };

  return ( 
    <div className="App">
          <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-[#D8EFD3] p-6 rounded-[25px] px-8 py-6 mx-auto"
            style={{
                width: '1300px',
                height: '550px',
                marginTop: '5px',
                fontFamily: 'Poppins, sans-serif'
            }}
        >
          <h2 className="text-xl font-bold mb-2">Pemesanan Tiket Kereta Api</h2>
          <p className="text-sm mb-7">{currentDate}</p>

          {/* Tipe Perjalanan */}
          <div className="mb-7">
            <label className="block font-medium text-gray-700 mb-1">Tipe Perjalanan</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="trip"
                  value="one-way"
                  checked={tripType === 'one-way'}
                  onChange={() => setTripType('one-way')}
                />
                <span>Sekali Jalan</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="trip"
                  value="round-trip"
                  checked={tripType === 'round-trip'}
                  onChange={() => setTripType('round-trip')}
                />
                <span>Pulang Pergi</span>
              </label>
            </div>
          </div>

          {/* Input Stasiun Asal dan Tujuan */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {/* Input Stasiun Asal */}
            <div className="relative" ref={originRef}>
              <label className="block font-bold text-gray-700 mb-1">Stasiun Asal</label>
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
                  {stationList.filter(station => station.toLowerCase().includes(originStation.toLowerCase())).map((station, index) => (
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
              <label className="block font-bold text-gray-700 mb-1">Stasiun Tujuan</label>
              <span className="absolute left-3 top-9">
                <img src="/images/train.png" alt="Train Icon" className="w-6 h-6" />
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
                  {stationList.filter(station => station.toLowerCase().includes(destinationStation.toLowerCase())).map((station, index) => (
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
              <label className="block font-bold text-gray-700 mb-1">Tanggal Berangkat</label>
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

            {/* Input Tanggal Pulang (jika tipe perjalanan pulang pergi) */}
              <div className="relative">
                <label className="block font-bold text-gray-700 mb-1">Tanggal Kembali</label>
                <span className="absolute left-3 top-9">
                  <SlCalender className="w-7 h-6" />
                </span>
                <input
                  type="date"
                  className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
                  disabled={tripType === 'one-way'}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
          </div>
          </div>

          {/* Input jumlah dewasa dan anak - anak */}
          <div className="grid grid-cols-4 gap-1 mb-5">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Dewasa</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >-</button>
                <span>{adults}</span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >+</button>
              </div>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Anak - anak (&lt;3 Tahun)</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >-</button>
                <span>{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >+</button>
              </div>
            </div>

            {/* Dropdown Kelas */}
            <div className="relative mb-4">
            <label className="block font-bold text-gray-700 mb-1">Kelas</label>
            <span className="absolute left-3 top-9">
              <MdOutlineTrain className="w-6 h-6" />
            </span>
            <select 
                className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
            >
              <option value="">Pilih kelas</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Eksekutif">Eksekutif</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          </div>


          {/* Button Cari Kereta */}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSearchTrains}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full border border-black"
            >
              Cari Kereta
            </button>
          </div>

          {/* Hasil Pencarian Jadwal */}
          {showResults && (
            <div className="mt-16">
              <h3 className="bg-[#95D2B3] p-6 rounded-lg shadow-lg text-center font-bold mb-4 ">JADWAL KEBERANGKATAN</h3>
              <ul className="space-y-6">
                {scheduleResults.map((schedule, index) => (
                  <li 
                    key={index} 
                    className="flex item-center justify-between p-4 bg-[#D8EFD3] rounded-lg shadow-md"
                  >
                    {/* Bagian Nama dan Kelas */}
                    <div className="flex flex-col items-start">
                        <div className="text-left">
                            <div className="font-bold text-xl text-gray-800">{schedule.name}</div>
                            <div className="text-sm text-gray-600">{schedule.class}</div>
                        </div>
                    </div>
                    
                    {/* Bagian Waktu Keberangkatan dan Kedatangan */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="font-bold text-lg">{schedule.departureTime}</div>
                        <div className="text-sm text-gray-600">{schedule.origin}</div>
                    </div>

                    <div className="flex items-center justify-center mx-4">
                        <div className="text-gray-600 mx-4">→</div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="font-bold text-lg">{schedule.arrivalTime}</div>
                        <div className="text-sm text-gray-600">{schedule.destination}</div>
                    </div>

                    {/* Bagian Durasi */}
                    <div className="flex items-center justify-center">
                        <div className="font-bold text-lg">{schedule.duration}</div>
                    </div>

                    {/* Bagian Harga */}
                    <div className="flex flex-col items-end">
                        <div className="text-xl font-bold text-gray-800">{schedule.price}</div>
                    </div>

                    {/* Tombol Pesan */}
                    <Link to="/PesanTiket" className="ml-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-full text-white font-bold hover:bg-green-400 border border-black">
                        Pesan
                    </Link>
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
