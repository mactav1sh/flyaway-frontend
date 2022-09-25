import Footer from '../components/Footer';
import Header from '../components/Header';
import { BiError } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <BiError className="h-10 w-10 md:h-16 md:w-16" />
        <p className="text-lg md:text-2xl">Page Not Found</p>
      </main>
      ;
      <Footer />
    </div>
  );
};

export default NotFound;
