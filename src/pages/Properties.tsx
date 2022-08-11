import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PropertySearchForm from '../components/PropertySearchForm';
import PropertiesList from '../components/PropertiesList/PropertiesList';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

const Properties = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  const { data, loading } = useFetch(
    `http://localhost:5000/api/v1/properties?location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&limit=10`
  );

  console.log(data.properties);
  return (
    <>
      <Navigation />
      <Header showTitle={false} />
      <main className="max-w-6xl my-5 mx-2 lg:mx-auto flex flex-col justify-center space-x-0 space-y-8 md:space-y-0 md:flex-row md:space-x-4">
        <PropertySearchForm />
        {loading ? <h1>loading...</h1> : <PropertiesList data={data} />}
      </main>
      <MailList />
      <Footer />
    </>
  );
};

export default Properties;
