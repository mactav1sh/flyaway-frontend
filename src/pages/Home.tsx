import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import BrowsePropertyList from '../components/BrowseGalleryList/BrowseGalleryList';
import LoctaionsGalleryList from '../components/LocationsGalleryList/LoctaionsGalleryList';
import MailList from '../components/MailList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <SearchForm />
      <BrowsePropertyList title="Browse by property type" />
      <LoctaionsGalleryList />
      <BrowsePropertyList title="Connect with other travelers" />
      <MailList />
      <Footer />
    </>
  );
};

export default Home;
