import './App.css';
import './output.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Recruit from './Recruit.js';
import Management from './Management.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{backgroundColor:'#121212'}}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/management' element={<Management />} />
          <Route path='/recruit' element={<Recruit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;