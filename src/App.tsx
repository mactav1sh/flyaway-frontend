import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Property from './pages/Property';
import Signin from './pages/Signin';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import SearchProvider from './contexts/SearchContext';
import AuthProvider from './contexts/AuthContext';
import ReservationProvider from './contexts/ReservationContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ReservationProvider>
          <SearchProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:propertyId" element={<Property />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SearchProvider>
        </ReservationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
