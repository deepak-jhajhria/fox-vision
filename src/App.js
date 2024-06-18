import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import HeroSec from "./components/HeroSec";
import Footer from "./components/common/Footer";
import Offer from "./pages/Offer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <HeroSec />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;