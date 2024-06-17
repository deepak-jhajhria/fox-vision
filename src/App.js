import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
