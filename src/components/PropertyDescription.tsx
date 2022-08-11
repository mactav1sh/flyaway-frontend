import React from 'react';
import TagList from './TagList/TagList';
import { GrLocation } from 'react-icons/gr';
import { MdBalcony } from 'react-icons/md';
import { BiBuildings, BiSwim } from 'react-icons/bi';
import { TbBrandProducthunt } from 'react-icons/tb';

const PropertyDescription = () => {
  const description =
    'Heru Pyramids View Hotel provides accommodations with a restaurant and a bar. 1.5 mi from Giza Pyramids, the resort provides a garden and a terrace. The accommodations features a 24-hour front desk. All rooms at the resort are equipped with a seating area and a flat-screen TV. Each room has a private bathroom with a bidet and a hairdryer. At Heru Pyramids View Hotel each room is fitted with bed linen and towels. Great Sphinx is 3.1 mi from the accommodations. Cairo International Airport is 15 mi from the property.';

  return (
    <section className="flex flex-col space-y-10 md:flex-row md:justify-between md:space-y-0 ">
      {/* Text and facilities */}
      <div className="max-w-3xl md:pt-2 md:mr-10">
        {/* - text */}
        <p className="text-sm leading-7 mb-7">{description}</p>
        {/* - facilities */}
        <div className="mb-7">
          <p className="font-bold">Most Popular facilities</p>
          <TagList
            tags={[
              'swimming',
              'airport',
              'roomService',
              'noSmoking',
              'restuarant',
              'freeParking',
              'coffeeMaker',
              'bar',
              'breakfast',
            ]}
          />
        </div>
        {/* - ATM */}
        <p>
          <span className="font-bold">ATM & Currency Exchange: </span>
          Need cash? There's an ATM and a currency exchange service at this
          property.
        </p>
      </div>

      {/* Highlited Features*/}
      <div className="min-w-max p-4 bg-brandLightBlue150 text-gray-700 self-center">
        <p className="font-bold mt-3 mb-2">Property Highlights</p>
        {/* - location reveiw and icon */}
        <div className="flex items-center space-x-2 mb-4">
          <GrLocation className="text-xl" />
          <span className="text-xs max-w-[10rem]">
            Top Location: Highly rated by recent guests
          </span>
        </div>

        {/* - breakfast info */}
        <div className="mb-5">
          <p className="text-sm font-bold mb-3">Breakfast Info</p>
          <p className="text-xs max-w-[15rem]">
            Continental, Vegetarian, Halal, American, Buffet, Breakfast to go
          </p>
        </div>

        {/* - rooms */}
        <div className="mb-4">
          <p className="text-sm font-bold mb-3">Rooms with:</p>
          <ul className="flex flex-col space-y-2.5 px-1">
            <li className="flex items-center space-x-2">
              <MdBalcony />
              <span className="text-xs">Terrace</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiBuildings />
              <span className="text-xs">City view</span>
            </li>
            <li className="flex items-center space-x-2">
              <BiSwim />
              <span className="text-xs">Pool view</span>
            </li>
          </ul>
        </div>

        {/* free private parking */}
        <div className="flex items-center space-x-2 mb-8">
          <TbBrandProducthunt className="w-5 h-5" />
          <span className="text-xs max-w-[10rem]">
            Top Location: Highly rated by recent guests
          </span>
        </div>
        {/* reserve button */}
        <button className="py-1 w-full  font-semibold  bg-brandBlueSec100 text-white hover:bg-brandBlueSec200 rounded-sm">
          Reserve
        </button>
      </div>
    </section>
  );
};

export default PropertyDescription;
