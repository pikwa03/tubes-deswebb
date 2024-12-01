import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import trains from "../data/trains";
import { MdOutlineTrain } from "react-icons/md";
import Header from "./Header";

const PesanTiket = () => {
  const { id } = useParams(); // Get train ID from URL
  const selectedTrain = trains.find((train) => train.id === parseInt(id)); // Get train details based on ID

  const [passengerData, setPassengerData] = useState({
    name: "",
    contact: "",
    travelDate: "2024-12-01",
    travelTime: "07:25",
    adults: 1,
    children: 0,
    route: `${selectedTrain?.origin} - ${selectedTrain?.destination}`,
    trainName: selectedTrain?.name || "",
    price: selectedTrain?.price || "",
  });

  // Calculate the total price
  const calculateTotalPrice = () => {
    const adultPrice = parseInt(passengerData.price.replace(/[^\d]/g, ""));
    const childrenPrice = adultPrice / 2;
    const totalPrice =
      adultPrice * passengerData.adults +
      childrenPrice * passengerData.children;
    return totalPrice;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save passenger data to localStorage on booking
  const handleBooking = () => {
    const totalAmount = calculateTotalPrice();
    const updatedPassengerData = {
      ...passengerData,
      totalAmount: `Rp ${totalAmount.toLocaleString("id-ID")}`,
      priceNumeric: parseInt(passengerData.price.replace(/[^\d]/g, "")), // Tambahkan priceNumeric
    };
    localStorage.setItem("passengerData", JSON.stringify(updatedPassengerData));
    // Save updated data to localStorage
    console.log("Booking data:", updatedPassengerData);
  };

  // Reusable component for displaying the total price
  const TotalPrice = ({ price }) => {
    return (
      <div className="mt-4 text-sm sm:text-base font-bold text-black">
        <p>Total Harga: Rp {price.toLocaleString("id-ID")}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen font-poppins">
      <Header />
      <div className="w-full max-w-3xl bg-[#D8EFD3] p-8 shadow-lg rounded-lg mt-8 sm:mt-12 relative">
        <h2 className="text-xl sm:xl font-bold text-black mb-4">
          Detail Tiket Kereta Api
        </h2>

        {/* Input Form */}
        <div className="mt-4">
          <div className="mb-3">
            <label className="block text-sm sm:text-base font-bold text-black mb-1">
              Nama Penumpang
            </label>
            <input
              type="text"
              name="name"
              value={passengerData.name}
              onChange={handleChange}
              placeholder="Masukkan nama penumpang"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm sm:text-base font-bold text-black mb-1">
              Kontak
            </label>
            <input
              type="text"
              name="contact"
              value={passengerData.contact}
              onChange={handleChange}
              placeholder="Masukkan nomor kontak"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm sm:text-base font-bold text-black mb-1">
              Penumpang Dewasa
            </label>
            <input
              type="number"
              name="adults"
              value={passengerData.adults}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm sm:text-base font-bold text-black mb-1">
              Penumpang Anak
            </label>
            <input
              type="number"
              name="children"
              value={passengerData.children}
              onChange={handleChange}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
        </div>

        {/* Ticket Details */}
        <div className="mt-6">
          <p className="text-sm sm:text-base font-bold text-black">
            Rute Kereta Api
          </p>
          <div className="flex items-center">
            <MdOutlineTrain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <p className="text-xs sm:text-sm text-black">
              {passengerData.route}
            </p>
          </div>

          <p className="mt-3 text-sm sm:text-base font-bold text-black">
            Kereta Api - Harga
          </p>
          <div className="flex items-center mt-2">
            <MdOutlineTrain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <p className="text-xs sm:text-sm text-black">
              {passengerData.trainName} - {passengerData.price}
            </p>
          </div>

          {/* Use the TotalPrice component */}
          <TotalPrice price={calculateTotalPrice()} />
        </div>

        {/* Booking Button */}
        <div className="flex justify-end mt-6">
          <Link
            to={{
              pathname: "/PaymentDetails",
              state: { totalAmount: calculateTotalPrice() }, // Pass the updated passenger data to PaymentDetails
            }}
            className="bg-[#55AD9B] text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-black hover:bg-[#55AD9B]"
            onClick={handleBooking} // Save data to localStorage on booking
          >
            Pesan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PesanTiket;
