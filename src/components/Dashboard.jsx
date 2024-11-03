import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';

function App () {
    return (
        <div className="App">
            <Header />
        </div>
    )
}

const Dashboard = () => {
  const [tripType, setTripType] = useState('one-way');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  const [originStation, setOriginStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');

  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

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

  return ( 
    <div className="flex justify-center item-center min-h-screen bg-gray-100">
        <div className="bg-[#D8EFD3] p-6 rounded-[25px] px-8 py-6 mx-auto"
            style={{
                width: '1300px',
                height: '550px',
                marginTop: '70px',
                fontFamily: 'Poppins, sans-serif'
            }}
        >
          <h2 className="text-xl font-bold mb-2">Pemesanan Tiket Kereta Api</h2>
          <p className="text-sm mb-7">{currentDate}</p>

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

          <div className="grid grid-cols-2 gap-4 mb-5">
             {/* Input Stasiun Asal */}
            <div className="relative" ref={originRef}>
              <label className="block font-bold text-gray-700 mb-1">Stasiun Asal</label>
              <span className="absolute left-3 top-9">
                <img src="/images/train.png" alt="Train Icon" className="w-6 h-6" />
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

          <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="relative">
              <label className="block font-bold text-gray-700 mb-1">Tanggal Keberangkatan</label>
              <span className="absolute left-3 top-9">
                <img src="/images/calendar.png" alt="calendar Icon" className="w-7 h-7" />
              </span>
              <input
                type="date"
                className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="relative">
              <label className="block font-bold text-gray-700 mb-1">Tanggal Kembali</label>
              <span className="absolute left-3 top-9">
                <img src="/images/calendar.png" alt="calendar Icon" className="w-7 h-7" />
              </span>
              <input
                type="date"
                className="w-full pl-12 px-3 py-2 border border-gray-300 rounded"
                disabled={tripType === 'one-way'}
              />
            </div>
          </div>

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

            <div className="relative mb-4">
            <label className="block font-bold text-gray-700 mb-1">Kelas</label>
            <span className="absolute left-3 top-9">
                <img src="/images/train.png" alt="Train Icon" className="w-6 h-6" />
              </span>
            <select className="w-full pl-12 px-3 py-2 border border-gray-300 rounded">
              <option>Pilih kelas</option>
              <option>Ekonomi</option>
              <option>Bisnis</option>
              <option>Eksekutif</option>
              <option>Luxury</option>
            </select>
          </div>
          </div>

          <a href="/pencarian" // ganti dengan URL tujuan yang sesuai
            className="bg-teal-500 text-white font-semibold text-center mt-10 hover:bg-teal-600 hover:shadow-lg transition-all duration-200"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              width: '170px', 
              height: '38px', 
              borderRadius: '25px', 
              lineHeight: '38px',
              position: 'absolute',
              bottom: '90px',
              right: '150px',
              display: 'inline-block',
              textAlign: 'center',
              border: '1px solid black',
            }}
          >
          Cari Kereta
          </a>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
