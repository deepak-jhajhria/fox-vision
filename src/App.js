import "./App.css";
import HeroSec from "./components/HeroSec";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <NavBar />
      <HeroSec />
    </div>
  );
}

export default App;
