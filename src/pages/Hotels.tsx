import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HotelSearchForm from '../components/HotelSearchForm';
import HotelsList from '../components/HotelsList/HotelsList';
import MailList from '../components/MailList';
import Footer from '../components/Footer';

const Hotels = () => {
  return (
    <>
      <Navigation />
      <Header showTitle={false} />
      <main className="max-w-6xl my-5 mx-2 lg:mx-auto flex flex-col justify-center space-x-0 space-y-8 md:space-y-0 md:flex-row md:space-x-4">
        <HotelSearchForm />
        <HotelsList />
      </main>
      <MailList />
      <Footer />
    </>
  );
};

export default Hotels;
