import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Portfolio from "./pages/portfolio/Portfolio";
import HeroSec from "./components/HeroSec";
import Footer from "./components/common/Footer";
import Aboutus from "./pages/aboutus/Aboutus";


function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <HeroSec />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
