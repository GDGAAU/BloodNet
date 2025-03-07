import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import RegisterDonor from './RegisterDonor';
import RegisterHospital from './RegisterHospital';

function Navbar() {
    const [selectedForm, setSelectedForm] = useState("");
    const navigate = useNavigate();
  // Handle selection
  const handleSelect = (type) => {
    setSelectedForm(type);
    setShowDropdown(false); // Close dropdown after selection
  };
  
  return (
    <>
        <div className="flex justify-between items-center text-lg font-normal py-4 px-12 bg-white shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold">
                🩸
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6 text-gray-700">
                <Link to="/" className="hover:text-red-500">Home</Link>
                <Link to="/about-us" className="hover:text-red-500">About Us</Link>
                <Link to="/profile" className="hover:text-red-500">Status</Link>
                
            <select 
                className="border-0 rounded-md  font-semibold bg-white flex items-center justify-between min-w-[180px] cursor-pointer focus:outline-none hover:bg-transparent"
            >
                
                <option className="bg-white rounded-md shadow-md p-1.5">Register as Donor</option>
                <option>Register as Hospital</option>
            </select>
            
            </div>
            
        
        <div className="form-container">
            {selectedForm === "donor" && <RegisterDonor />}
            {selectedForm === "recipient" && <RegisterHospital />}
        </div>

        {/* Log In Button */}
        <button className="border border-black py-2 px-6 bg-white cursor-pointer rounded-md font-black hover:bg-gray-200">
            Log In
        </button>
    </div>
    </>
  )
}

export default Navbar

