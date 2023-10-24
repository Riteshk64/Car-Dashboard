import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './Pages/Home';
import Phone from './Pages/Phone';
import Map from './Pages/Map';
import Voice from './Pages/Voice';
import Music from './Pages/Music';
import Car from './Pages/Car';
import Mirror from './Pages/Mirror';
import Settings from './Pages/Settings';
import styled from 'styled-components';

function App() {
  return (
    <>
      <MainWrapper>
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
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </HashRouter>
      </MainWrapper>
    </>
  );
}

export default App;

const MainWrapper = styled.div`
width: 1000px;
height: 600px;
background-color: rgb(18,18,25);

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;