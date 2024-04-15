import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />

      <Routes>
        <Route index element={<Navigate to="/bags" />} />
        <Route path='/:category' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
