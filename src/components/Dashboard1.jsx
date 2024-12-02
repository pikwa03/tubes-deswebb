import React, { useState, useEffect, useRef } from 'react';
import Header1 from './Header';
import { MdOutlineTrain } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import trains from '../data/trains'; // Importing train data

const Jadwalkereta = () => {
  const [tripType, setTripType] = useState('one-way');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  
  const [originStation, setOriginStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [classType, setClassType] = useState('');
  
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

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

  const handleSearchTrains = () => {
    if (!originStation || !destinationStation || !departureDate || (tripType === 'round-trip' && !returnDate) || !classType) {
      alert('Harap isi semua data yang diperlukan.');
      return;
    }

    if (originStation === destinationStation) {
      alert('Stasiun asal dan tujuan tidak boleh sama.');
      return;
    }

    // Filter trains based on the search criteria
    const filteredResults = trains.filter((train) => {
      return (
        train.origin.toLowerCase() === originStation.toLowerCase() &&
        train.destination.toLowerCase() === destinationStation.toLowerCase() &&
        (train.class === classType || classType === '') // Filter by class if specified
      );
    });

    setScheduleResults(filteredResults);
    setShowResults(true);
  };

  return ( 
    <div className="App">
      <Header1 />
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

          {/* Input Tanggal */}
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

          {/* Input Kelas dan Pencarian */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block font-bold text-gray-700 mb-1">Kelas</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                >
                  <option value="">Pilih Kelas</option>
                  <option value="ekonomi">Ekonomi</option>
                  <option value="bisnis">Bisnis</option>
                  <option value="eksekutif">Eksekutif</option>
                </select>
              </div>

              <div className="relative">
                <button
                  onClick={handleSearchTrains}
                  className="w-full px-4 py-2 text-white bg-[#1E4D2B] rounded"
                >
                  Cari Tiket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display Results */}
      {showResults && (
        <div className="mt-8">
          {scheduleResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {scheduleResults.map((train, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded-md">
                  <h3 className="text-lg font-semibold">{train.origin} → {train.destination}</h3>
                  <p>{train.departureTime} | {train.class}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Tidak ada jadwal kereta yang tersedia untuk pencarian ini.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Jadwalkereta;
