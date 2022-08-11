import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Property from './pages/Property';
import SearchProvider from './contexts/SearchContext';

function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:propertyId" element={<Property />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
