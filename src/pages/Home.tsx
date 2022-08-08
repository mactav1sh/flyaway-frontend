import Navigation from '../components/Navigation';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import BrowseGalleryList from '../components/BrowseGalleryList/BrowseGalleryList';
import LoctaionsGalleryList from '../components/LocationsGalleryList/LoctaionsGalleryList';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import {
  propertiesTypesImgs,
  communitesData,
  communitesImgs,
  locations,
  locationsImgs,
} from '../assets/data';

const Home = () => {
  // Fetching property types
  const { data: propertiesData, loading: loadingProperties } = useFetch(
    'http://localhost:5000/api/v1/properties/types-count'
  );

  // Fetching property types
  const { data: citiesData, loading: loadingCities } = useFetch(
    'http://localhost:5000/api/v1/properties/cities-count'
  );

  return (
    <>
      <Navigation />
      <Header />
      <SearchForm />
      {/* Property types slides */}
      {!loadingProperties && (
        <BrowseGalleryList
          title="Browse by property type"
          data={propertiesData.properties}
          imgs={propertiesTypesImgs}
        />
      )}

      {/* Large gallery */}
      {!loadingCities && (
        <LoctaionsGalleryList
          cities={locations}
          data={citiesData.properties}
          imgs={locationsImgs}
        />
      )}

      {/* community slides */}
      <BrowseGalleryList
        title="Connect with other travelers"
        data={communitesData}
        imgs={communitesImgs}
      />
      <MailList />
      <Footer />
    </>
  );
};

export default Home;
