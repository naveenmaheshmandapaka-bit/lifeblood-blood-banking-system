import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import DonorRegistration from "./pages/DonorRegistration";
import BloodInventory from "./pages/BloodInventory";
import BloodRequest from "./pages/BloodRequest";
import Requests from "./pages/Requests";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
<Route path="/home" element={<Home />} />
        <Route path="/donor" element={<DonorRegistration />} />
        <Route path="/inventory" element={<BloodInventory />} />
        <Route path="/request" element={<BloodRequest />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;