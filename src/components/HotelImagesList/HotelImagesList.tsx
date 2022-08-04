import React, { useEffect, useState } from 'react';
import HotelImagesListItem from './HotelImagesListItem';

const HotelImagesList = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const hotelImages = [
    'https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg',
    'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  useEffect(() => {
    setSelectedImage(hotelImages[0]);
  }, []);

  return (
    <div className="flex flex-col space-y-4 items-center justify-center mx-1">
      {/* single slide */}
      <img
        src={selectedImage}
        alt=""
        className="h-72 md:h-80 lg:h-96  object-cover"
      />
      {/* slides */}
      <div className="flex  space-x-1 lg:max-w-3xl">
        {hotelImages.map((imageUrl) => (
          <HotelImagesListItem
            key={Math.random()}
            imageUrl={imageUrl}
            setImage={setSelectedImage}
            selectedImage={selectedImage}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelImagesList;
