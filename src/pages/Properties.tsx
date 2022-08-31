import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PropertySearchForm from '../components/PropertySearchForm';
import PropertiesList from '../components/PropertiesList/PropertiesList';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const Properties = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const minPrice = searchParams.get('minPrice') || 100;
  const maxPrice = searchParams.get('maxPrice') || 10000;
  const type = searchParams.get('type');

  // Check if theres a location or type in params if there's, then add them to the url, notice there's a '&' after location
  const locationParam = location ? `location=${location}&` : '';
  const typeParam = type ? `type=${type}` : '';

  const { data, loading } = useFetch(
    `http://localhost:5000/api/v1/properties?minPrice=${minPrice}&maxPrice=${maxPrice}&limit=10&${locationParam}${typeParam}`
  );

  return (
    <>
      <Navigation />
      <Header showTitle={false} />
      <main className="max-w-6xl mt-5 mb-24 mx-2 lg:mx-auto flex flex-col justify-center space-x-0 space-y-8 md:space-y-0 md:flex-row md:space-x-4">
        <PropertySearchForm />
        {loading ? (
          <div className="flex-[3.5] flex items-center justify-center py-10">
            <CgSpinnerTwoAlt className="w-9 h-9 animate-spin" />
          </div>
        ) : (
          <PropertiesList data={data.properties} />
        )}
      </main>
      <MailList />
      <Footer />
    </>
  );
};

export default Properties;
