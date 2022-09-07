import { useEffect, useState } from 'react';
import PropertiesImagesListItem from './PropertiesImagesListItem';
interface IProps {
  data: string[];
}

const PropertiesImagesList = ({ data }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    setSelectedImage(data[0]);
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
      <div className="flex max-w-xs md:max-w-sm space-x-1 lg:max-w-3xl overflow-x-auto no-x-scroll-bar p-1">
        {data.map((imageUrl) => (
          <PropertiesImagesListItem
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

export default PropertiesImagesList;
