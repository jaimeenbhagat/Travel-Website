/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const LoginModal = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check for the correct credentials
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      closeModal(); // This closes the modal after successful login
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div id="loginModal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
        
        <form id="loginForm" className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <p className="text-sm text-gray-500">Username: <strong>admin</strong></p>
          <p className="text-sm text-gray-500">Password: <strong>password</strong></p>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </form>
        
        {/* Close button */}
        <button
          onClick={closeModal}
          className="mt-4 bg-gray-500 text-white p-2 rounded-lg w-full hover:bg-gray-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
  