import React, { useState, useContext, useRef, LegacyRef } from 'react';
import { DateRange, Range } from 'react-date-range';
import { Link, useNavigate } from 'react-router-dom';
import format from 'date-fns/format';
import { IoBed, IoPersonSharp } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { TbInfoCircle } from 'react-icons/tb';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import PersonsCount from './PersonsCount';
import { SearchContext } from '../contexts/SearchContext';
import useOnOutsideClick from '../hooks/useOnOutsideClick';

const PropertySearchForm = () => {
  // Refs
  const personsMenuRef = useRef<HTMLDivElement>();
  const calendarMenuRef = useRef<HTMLDivElement>();
  // Navigate
  const navigate = useNavigate();
  // Calendar menu
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  // Persons menu
  const [openCount, setOpenCount] = useState<boolean>(false);
  // Search context
  const {
    date,
    setDate,
    roomOptions,
    setRoomOptions,
    searchInput,
    setSearchInput,
  } = useContext(SearchContext);

  // Close on click outside
  useOnOutsideClick(personsMenuRef, setOpenCount);
  useOnOutsideClick(calendarMenuRef, setOpenCalendar);

  // Form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      `/properties?location=${searchInput}&minPrice=${roomOptions.minPrice}&maxPrice=${roomOptions.maxPrice}&limit=10`
    );
    setSearchInput('');
  };

  // Count of nights
  let days;
  if (date[0].startDate && date[0].endDate) {
    days = date[0].endDate.getDay() - date[0].startDate.getDay();
  }

  return (
    <aside className="bg-brandYellow flex-[1] p-5 rounded-sm md:self-start relative">
      <p className="text-xl font-semibold mb-2">Search</p>
      <form onSubmit={handleSubmit}>
        <div className="bg-brandYellow rounded-sm flex flex-col space-y-4">
          {/* INPUT 1 - LOCATION */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="destination" className="text-xs">
              Destination/property name:
            </label>
            <div className="flex items-center ">
              <input
                required
                minLength={4}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                id="destination"
                placeholder="Where are you going?"
                className="w-full h-full p-2 pl-11 placeholder:text-black placeholder:text-sm rounded-sm focus:outline-none focus:placeholder:text-gray-400 hover:outline-2
              hover:outline
              hover:outline-brandYellowDark
              "
              />
              <IoBed className="absolute ml-2 h-5 w-5 text-gray-300" />
            </div>
          </div>

          {/* INPUT 2 - DATES */}
          <div
            ref={calendarMenuRef as LegacyRef<HTMLDivElement>}
            className="flex flex-col space-y-2"
          >
            <label htmlFor="destination" className="text-xs">
              Check-in/Check-out date
            </label>
            <div className="flex items-center bg-white space-x-3.5 relative px-2">
              <BiCalendar className="h-6 w-6 text-gray-300" />
              <span
                onClick={() => {
                  setOpenCount(false);
                  setOpenCalendar(!openCalendar);
                }}
                className="w-full cursor-pointer text-sm py-2 min-w-max"
              >
                {format(date[0].startDate as Date, 'iii, MMM dd')}
                {' · '}
                {format(date[0].endDate as Date, 'iii, MMM dd')}
              </span>

              {/* calendar */}
              {openCalendar ? (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="absolute -left-3.5 top-10 shadow-xl z-10"
                />
              ) : null}
            </div>

            {(days as number) > 0 && (
              <p className="text-xs">{days}-night stay</p>
            )}
          </div>

          {/* INPUT 3 - ROOM OPTIONS */}
          <div
            ref={personsMenuRef as LegacyRef<HTMLDivElement>}
            className="flex flex-col space-y-2"
          >
            <label htmlFor="destination" className="text-xs">
              Number of persons
            </label>
            <div className="flex items-center bg-white space-x-3.5 relative px-2">
              <IoPersonSharp className="h-6 w-6 text-gray-300" />
              <span
                className="w-full cursor-pointer text-sm py-2 min-w-[12.7rem]"
                onClick={() => {
                  setOpenCalendar(false);
                  setOpenCount(!openCount);
                }}
              >
                {roomOptions.adults > 1
                  ? `${roomOptions.adults} adults`
                  : `${roomOptions.adults} adult`}{' '}
                · {roomOptions.children} children ·{' '}
                {roomOptions.room > 1
                  ? `${roomOptions.room} rooms`
                  : `${roomOptions.room} room`}{' '}
              </span>
              {/* room options */}
              {openCount ? (
                <PersonsCount
                  roomOptions={roomOptions}
                  setRoomOptions={setRoomOptions}
                  styleClasses="absolute -left-3.5 top-10 shadow-xl"
                />
              ) : null}
            </div>
          </div>

          {/* MAX AND MIN PRICE */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="minPrice" className="text-xs">
                Min price/night
              </label>
              <input
                value={roomOptions.minPrice}
                onChange={(e) =>
                  setRoomOptions((prevState) => ({
                    ...prevState,
                    minPrice: +e.target.value,
                  }))
                }
                id="minPrice"
                min={0}
                type="number"
                className="w-full py-1.5 px-2 placeholder:text-black placeholder:text-sm rounded-sm focus:outline-none focus:placeholder:text-gray-400 hover:outline-2
              hover:outline
              hover:outline-brandYellowDark"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="minPrice" className="text-xs">
                Max price/night
              </label>
              <input
                value={roomOptions.maxPrice}
                onChange={(e) =>
                  setRoomOptions((prevState) => ({
                    ...prevState,
                    maxPrice: +e.target.value,
                  }))
                }
                id="maxPrice"
                min={0}
                type="number"
                className="w-full py-1.5 px-2 placeholder:text-black placeholder:text-sm rounded-sm focus:outline-none focus:placeholder:text-gray-400 hover:outline-2
              hover:outline
              hover:outline-brandYellowDark"
              />
            </div>
          </div>
          {/* end */}
          <button
            type="submit"
            className="py-3 text-lg bg-brandBlueSec100 text-white hover:bg-brandBlueSec200"
          >
            Search
          </button>
        </div>
      </form>
      {/* MAP */}

      <div className="hidden lg:flex lg:items-center lg:space-x-2 border bg-orange-100 rounded-sm w-full h-20 absolute -bottom-24 left-0 p-4">
        <TbInfoCircle className="h-10 w-10 text-orange-900" />
        <p className="text-xs font-semibold">
          Check the latest COVID-19 restrictions before you travel.
        </p>
      </div>
    </aside>
  );
};

export default PropertySearchForm;
