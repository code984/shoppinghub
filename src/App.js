import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './component/js/Header';
import Shopping from './component/js/Shopping'
import Checkout from './component/js/Cheakout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Headers />} />
          <Route path="/Shopping" element={<Shopping />} />
          <Route path="/Shopping/Cheakout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
