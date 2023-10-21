import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <>
      <div className='main'>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;