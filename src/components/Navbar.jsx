/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl">Wanderlust Ventures</h1>
        <form className="flex items-center bg-white p-3 rounded-full shadow-md space-x-2">
          <input type="text" placeholder="Source" className="border rounded-full w-40 px-3 py-2 focus:outline-none focus:ring-0" required />
          <input type="text" placeholder="Destination" className="border rounded-full w-40 px-3 py-2 focus:outline-none focus:ring-0" required />
          <input type="date" className="border rounded-full w-36 px-3 py-2 focus:outline-none focus:ring-0" required />
          <input type="number" placeholder="Persons" className="border rounded-full w-24 px-3 py-2 focus:outline-none focus:ring-0" />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200">Search</button>
        </form>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-200">Flights</a>
          <a href="#" className="text-white hover:text-gray-200">Hotels</a>
          <a href="#" className="text-white hover:text-gray-200">Trains</a>
          <a href="#" className="text-white hover:text-gray-200">Buses</a>

          {/* Adjusted Login button */}
          <button
            className="bg-white text-blue-500 py-1 px-4 rounded-lg hover:bg-gray-100 focus:outline-none"
            onClick={openModal}
          >
            Login
          </button>
        </div>
      </div>

      {/* Show LoginModal when showModal is true */}
      {showModal && <LoginModal closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
