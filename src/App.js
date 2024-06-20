import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import HeroSec from "./components/HeroSec";
import Footer from "./components/common/Footer";
import Offer from "./pages/Offer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <main className="mx-auto">
      <HeroSec />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;