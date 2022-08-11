import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PropertyDescription from '../components/PropertyDescription';
import PropertiesGallery from '../components/PropertiesGallery';
import PropertySearchForm from '../components/PropertySearchForm';
import MailList from '../components/MailList';
import Navigation from '../components/Navigation';

const Property = () => {
  return (
    <>
      <Navigation />
      <Header showTitle={false} />
      <main className="mt-10 mb-20 max-w-5xl mx-2 lg:mx-auto">
        <section className=" flex flex-col justify-center mb-14 space-x-0 space-y-8 md:space-y-0 md:flex-row md:space-x-4 ">
          <PropertySearchForm />
          <PropertiesGallery />
        </section>
        <PropertyDescription />
      </main>
      <MailList />
      <Footer />
    </>
  );
};

export default Property;
