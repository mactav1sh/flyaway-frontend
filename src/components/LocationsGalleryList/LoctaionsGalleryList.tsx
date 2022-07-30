import React from 'react';
import LoctaionsGalleryItem from './LoctaionsGalleryItem';

const LoctaionsGalleryList = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ul>
        <div className="grid grid-cols-12 grid-rows-2 gap-y-4 gap-x-4 mx-2 lg:mx-0 grid-flow-row border-b pb-12 md:pb-0 mb-6 md:mb-10">
          <LoctaionsGalleryItem />
          <LoctaionsGalleryItem />
          <LoctaionsGalleryItem />
          <LoctaionsGalleryItem />
          <LoctaionsGalleryItem />
        </div>
      </ul>
    </div>
  );
};

export default LoctaionsGalleryList;
