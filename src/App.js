import './App.css';
import './output.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Executive from './Executive.js';
import Recruit from './Recruit.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-950 text-white">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/executive' element={<Executive />} />
          <Route path='/recruit' element={<Recruit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;