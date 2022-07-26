import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Hotel from './pages/Hotel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:hotelId" element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
