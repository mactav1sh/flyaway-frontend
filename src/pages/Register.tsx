import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
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
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
