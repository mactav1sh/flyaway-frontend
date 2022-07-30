import React from 'react';
import { Link } from 'react-router-dom';

const BrowseGalleryItem = () => {
  // TODO: REPLACE DIV WITH A LINK

  return (
    <li>
      <img
        src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="min-w-[18rem] bg-cover mb-2"
      />
      <div>
        <p className="font-bold">Hotels</p>
        <p className="text-sm text-gray-500">878,39 hotels</p>
      </div>
    </li>
  );
};

export default BrowseGalleryItem;
