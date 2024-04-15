import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />

      <Routes>
        <Route index element={<Navigate to="/products/bags" />} />
        <Route path='/products/:category' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
