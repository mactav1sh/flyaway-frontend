import React from 'react';
import { Link } from 'react-router-dom';
import { BiBed, BiCar } from 'react-icons/bi';
import { IoAirplaneOutline } from 'react-icons/io5';
import { TbBuildingCarousel } from 'react-icons/tb';

const Header = () => {
  return (
    <header className="bg-brandBlue text-white">
      <div className="max-w-6xl mx-auto px-2">
        <ul className=" overflow-x-auto no-x-scroll-bar">
          <div className="flex items-center space-x-3 px-1 pt-2 mb-20">
            <li>
              <Link to="#">
                <div className="flex items-center space-x-1 px-3 py-2 border rounded-full border-white bg-brandBlue300">
                  <BiBed className="w-6 h-6" />
                  <span>Stays</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-brandBlue300">
                  <IoAirplaneOutline className="w-5 h-5" />
                  <span>Flights</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="flex items-center space-x-1 w-32 px-3 py-2 rounded-full hover:bg-brandBlue300">
                  <BiCar className="w-5 h-5" />
                  <span>Car rentals</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-brandBlue300">
                  <TbBuildingCarousel className="w-5 h-5" />
                  <span>Attractions</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="flex items-center space-x-1 w-40 px-3 py-2 rounded-full hover:bg-brandBlue300 ">
                  <span className="uppercase text-[0.6rem] border-t border-b ">
                    taxi
                  </span>
                  <span>Airport taxis</span>
                </div>
              </Link>
            </li>
          </div>
        </ul>
        {/* Main title */}
        <h1 className="text-4xl font-bold mb-3 md:text-5xl">
          Find your next stay
        </h1>
        <h2 className="text-xl md:text-2xl md:max-w-none">
          Search deals on hotels, homes, and much more...
        </h2>
      </div>
    </header>
  );
};

export default Header;
