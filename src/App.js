import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Portfolio from "./pages/portfolio/Portfolio";
import HeroSec from "./components/HeroSec";
import Footer from "./components/common/Footer";
import Offer from "./pages/offer/Offer";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutUs from "./pages/aboutUs/Aboutus";


function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <HeroSec />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/offer' element={<Offer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
