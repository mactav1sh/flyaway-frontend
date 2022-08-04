import React from 'react';
import HotelImagesList from './HotelImagesList/HotelImagesList';
import { IoLocationSharp, IoShieldCheckmarkSharp } from 'react-icons/io5';
import { TbLeaf } from 'react-icons/tb';

const HotelGallery = () => {
  return (
    <div className="flex-[3.5] flex flex-col space-y-10">
      {/* TITLE AND RESERVE BUTTON */}
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between">
        {/* - title and location */}
        <div>
          {/* -- title */}
          <div className="flex space-x-1.5 mb-1">
            <span className="bg-gray-500 text-xs rounded-sm text-white px-1 py-0.5 self-center">
              Hotel
            </span>
            <p className="text-2xl font-bold">Heru Pyramids View Hotel</p>
          </div>
          {/* --tags  */}
          <div className="mb-2">
            <div className="flex items-center space-x-1 text-green-700 bg-green-100 px-2 py-0.5 max-w-max text-xs rounded-sm">
              <TbLeaf className="w-4 h-4" />
              <span className="">Travel Sustainable property</span>
            </div>
          </div>

          {/* -- location */}
          <div className="flex items-center space-x-1">
            <IoLocationSharp className="text-brandBlue200" />
            <p>
              Abu Al Houl tourist street Mansourya rd, Haram, Giza, 12557 Cairo,
              Egypt
            </p>
          </div>
        </div>
        {/* - Reservation button */}
        <div className="flex self-start space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 lg:mx-2">
          <button className=" px-5 py-2 text-lg font-semibold  bg-brandBlueSec100 text-white hover:bg-brandBlueSec200 rounded-sm">
            Reserve
          </button>
          <div className="flex items-center space-x-1">
            <IoShieldCheckmarkSharp className="text-brandBlueSec100" />
            <span>We Price Match</span>
          </div>
        </div>
      </div>
      {/* IMAGE GALLERY */}
      <div className="">
        <HotelImagesList />
      </div>
    </div>
  );
};

export default HotelGallery;
