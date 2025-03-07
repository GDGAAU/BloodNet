import React, { useState } from 'react';
import RegisterDonor from './RegisterDonor';
import RegisterHospital from './RegisterHospital';

function Navbar({ onSelectUserType }) {
  const [selectedForm, setSelectedForm] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Handle selection
  const handleSelect = (type) => {
    setSelectedForm(type);
    setShowDropdown(false); // Close dropdown after selection
  };
  
  return (
    <div className="flex justify-between items-center text-lg font-normal py-4 px-12 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">🩸</div>

      {/* Navigation Links */}
      <ul className="list-none flex gap-8">
        <li>
          <a href="#" className="no-underline text-black font-semibold relative after:content-[''] after:w-full after:h-0.5 after:bg-black after:absolute after:-bottom-[3px] after:left-0">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-black font-semibold relative hover:text-gray-500">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-black font-semibold relative hover:text-gray-500">
            Find Blood
          </a>
        </li>
        <li className="relative">
          <select 
            className="border-0 rounded-md text-sm font-semibold bg-white flex items-center justify-between min-w-[180px] cursor-pointer focus:outline-none hover:bg-transparent"
          >
            <option className="bg-white rounded-md shadow-md p-1.5">Register as Donor</option>
            <option>Register as Hospital</option>
          </select>
        </li> 
      </ul>
      
      <div className="form-container">
        {selectedForm === "donor" && <RegisterDonor />}
        {selectedForm === "recipient" && <RegisterHospital />}
      </div>

      {/* Log In Button */}
      <button className="border border-black py-2 px-6 bg-white cursor-pointer rounded-md font-black hover:bg-gray-200">
        Log In
      </button>
    </div>
  )
}

export default Navbar
