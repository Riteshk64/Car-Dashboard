import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './Pages/Home';
import Phone from './Pages/Phone';
import Map from './Pages/Map';
import Voice from './Pages/Voice';
import Music from './Pages/Music';
import Car from './Pages/Car';
import Mirror from './Pages/Mirror';
import './App.css';

function App() {
  return (
    <>
      <div className='main'>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/phone" element={<Phone />} />
              <Route path="/map" element={<Map />} />
              <Route path="/voice" element={<Voice />} />
              <Route path="/music" element={<Music />} />
              <Route path="/car" element={<Car />} />
              <Route path="/mirror" element={<Mirror />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;