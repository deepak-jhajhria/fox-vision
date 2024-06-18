import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Portfolio from "./pages/portfolio/Portfolio";
import HeroSec from "./components/HeroSec";
import Footer from "./components/common/Footer";
import Aboutus from "./pages/aboutUs/Aboutus";
import Offer from "./pages/offer/Offer";


function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <HeroSec />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/contact-us' element={<Aboutus />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/offer' element={<Offer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
