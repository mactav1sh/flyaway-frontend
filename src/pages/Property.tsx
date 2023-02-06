import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PropertyDescription from '../components/PropertyDescription';
import PropertiesGallery from '../components/PropertiesGallery';
import PropertySearchForm from '../components/PropertySearchForm';
import ReserveRoom from '../components/ReserveRoom';
import MailList from '../components/MailList';
import Navigation from '../components/Navigation';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const Property = () => {
  const [openModal, setOpenModal] = useState(false);
  const { propertyId } = useParams();
  const { data, loading } = useFetch(`properties/${propertyId}`);

  return (
    <>
      <Header />
      <Navigation showTitle={false} />
      {loading ? (
        <div className="flex items-center justify-center h-[50vh]">
          <CgSpinnerTwoAlt className="w-7 h-7 animate-spin" />
        </div>
      ) : (
        <main className="mt-10 mb-20 max-w-5xl mx-2 lg:mx-auto">
          <section className=" flex flex-col justify-center mb-14 space-x-0 space-y-8 md:space-y-0 md:flex-row md:space-x-4">
            <PropertySearchForm />
            <PropertiesGallery openModal={setOpenModal} data={data.property} />
          </section>
          <PropertyDescription
            openModal={setOpenModal}
            description={data.property.desc}
          />
        </main>
      )}
      <MailList />
      <Footer />
      {openModal && (
        <ReserveRoom
          propertyId={propertyId as string}
          openModal={setOpenModal}
        />
      )}
    </>
  );
};

export default Property;
