import { useEffect } from 'react';
import Footer from '../components/Footer';
import SigninForm from '../components/SigninForm';
import Navigation from '../components/Navigation';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // If signedin redirect to home
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <SigninForm />
      <Footer />
    </div>
  );
};

export default Signin;
