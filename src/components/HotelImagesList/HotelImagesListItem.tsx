import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  imageUrl: string;
  selectedImage: string;
  setImage: Dispatch<SetStateAction<string>>;
}

const HotelImagesListItem = ({ imageUrl, setImage, selectedImage }: IProps) => {
  return (
    <div className="cursor-pointer" onClick={() => setImage(imageUrl)}>
      <img
        src={imageUrl}
        alt=""
        className={`object-cover h-12 md:h-24 max-w-xs rounded-md ${
          imageUrl === selectedImage
            ? ' p-0.5 outline outline-1 outline-brandYellow cursor-default rounded-md'
            : null
        }`}
      />
    </div>
  );
};

export default HotelImagesListItem;
