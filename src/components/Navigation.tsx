import { Link } from 'react-router-dom';
import { BiBed, BiCar } from 'react-icons/bi';
import { IoAirplaneOutline } from 'react-icons/io5';
import { TbBuildingCarousel } from 'react-icons/tb';

interface IProps {
  showTitle?: boolean;
}

const Navigation = ({ showTitle = true }: IProps) => {
  return (
    <nav className="bg-brandBlue text-white">
      <div className="max-w-6xl mx-auto px-2">
        <ul className="overflow-x-auto no-x-scroll-bar">
          <div
            className={`flex items-center  space-x-3 px-1 pt-2 ${
              showTitle ? 'mb-20' : 'mb-3'
            }`}
          >
            <li className="shrink-0">
              <Link to="#">
                <div className="flex items-center space-x-1 py-1 px-2 md:px-3 md:py-2 border rounded-full border-white bg-brandBlue300 ">
                  <BiBed className="h-5 w-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">Stays</span>
                </div>
              </Link>
            </li>

            <li className="shrink-0">
              <Link to="#">
                <div className="flex items-center space-x-1 py-1 px-2 md:px-3 md:py-2 rounded-full hover:bg-brandBlue300 cursor-not-allowed">
                  <IoAirplaneOutline className="w-5 h-5" />
                  <span className="text-sm md:text-base">Flights</span>
                </div>
              </Link>
            </li>
            <li className="shrink-0">
              <Link to="#">
                <div className="flex items-center space-x-1 py-1 px-2 md:px-3 md:py-2 rounded-full hover:bg-brandBlue300 cursor-not-allowed">
                  <BiCar className="w-5 h-5" />
                  <span className="text-sm md:text-base">Car rentals</span>
                </div>
              </Link>
            </li>

            <li className="shrink-0">
              <Link to="#">
                <div className="flex items-center space-x-1 py-1 px-2 md:px-3 md:py-2 rounded-full hover:bg-brandBlue300 cursor-not-allowed">
                  <TbBuildingCarousel className="w-5 h-5" />
                  <span className="text-sm md:text-base">Attractions</span>
                </div>
              </Link>
            </li>

            <li className="shrink-0">
              <Link to="#">
                <div className="flex items-center space-x-1  py-1 px-2 md:px-3 md:py-2 rounded-full hover:bg-brandBlue300 cursor-not-allowed ">
                  <span className="uppercase text-[0.6rem] border-t border-b ">
                    taxi
                  </span>
                  <span className="text-sm md:text-base">Airport taxis</span>
                </div>
              </Link>
            </li>
          </div>
        </ul>

        {/* TITLE AND DESC */}
        {showTitle && (
          <>
            <h1 className="text-4xl font-bold mb-3 md:text-5xl">
              Find your next stay
            </h1>
            <h2 className="text-xl md:text-2xl md:max-w-none">
              Search deals on hotels, homes, and much more...
            </h2>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
