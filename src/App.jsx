import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonorProfile from "./Components/DonerProfile";
import DonorStatus from "./Components/DonerStatus";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import HospitalProfile from "./Components/HospitalProfile";
import RegisterDonor from "./Components/RegisterDonor";
import RegisterHospital from "./Components/RegisterHospital";
import Footer from "./Components/Footer"; // Ensure this is correctly imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<DonorStatus />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
        <Route path="/register-hospital" element={<RegisterHospital />} />
      </Routes>
    </Router>
  );
}

export default App;

