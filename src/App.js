import "./App.css";
import Angebot from "./components/Angebot";
import Mochten from "./components/Mochten";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Angebot />
      <Mochten />
    </div>
  );
}

export default App;
