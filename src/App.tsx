import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Property from './pages/Property';
import Signin from './pages/Signin';
import Register from './pages/Register';
import SearchProvider from './contexts/SearchContext';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:propertyId" element={<Property />} />
          </Routes>
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
