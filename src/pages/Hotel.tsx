import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotelDesc from '../components/HotelDescription';
import HotelGallery from '../components/HotelGallery';
import HotelImagesList from '../components/HotelImagesList/HotelImagesList';
import HotelSearchForm from '../components/HotelSearchForm';
import MailList from '../components/MailList';
import Navigation from '../components/Navigation';

const Hotel = () => {
  return (
    <>
      <Navigation />
      <Header showTitle={false} />
      <main className="mt-10 mb-20 max-w-5xl mx-2 lg:mx-auto">
        <section className=" flex flex-col justify-center mb-14 space-x-0 space-y-8 md:space-y-0 md:flex-row md:space-x-4 ">
          <HotelSearchForm />
          <HotelGallery />
        </section>
        <HotelDesc />
      </main>
      <MailList />
      <Footer />
    </>
  );
};

export default Hotel;
