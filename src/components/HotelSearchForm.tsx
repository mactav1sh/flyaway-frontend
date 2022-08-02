import React, { useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import format from 'date-fns/format';
import { IoBed, IoPersonSharp } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import PersonsCount from './PersonsCount';

const HotelSearchForm = () => {
  // TODO: Refactor this component and SearchForm Compononent into single component

  // CALENDAR
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // PERSONS
  const [openCount, setOpenCount] = useState<boolean>(false);
  const [roomOptions, setRoomOptions] = useState({
    adults: 2,
    children: 0,
    room: 1,
  });

  // FORM
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  let days;
  if (date[0].startDate && date[0].endDate) {
    days = date[0].endDate.getDay() - date[0].startDate.getDay();
  }

  return (
    <aside className="bg-brandYellow flex-[1] p-5 rounded-sm md:self-start">
      <p className="text-xl font-semibold mb-2">Search</p>
      <form onSubmit={handleSubmit}>
        <div className="bg-brandYellow rounded-sm flex flex-col space-y-4">
          {days ? days : null}
          {/* INPUT 1 - LOCATION */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="destination" className="text-xs">
              Destination/property name:
            </label>
            <div className="flex items-center ">
              <input
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
          <div className="flex flex-col space-y-2">
            <label htmlFor="destination" className="text-xs">
              Check-in/Check-out date
            </label>
            <div className="flex items-center bg-white  space-x-3.5 relative px-2">
              <BiCalendar className="h-6 w-6 text-gray-300" />
              <span
                onClick={() => {
                  setOpenCount(false);
                  setOpenCalendar(!openCalendar);
                }}
                className="w-full cursor-pointer text-sm py-2"
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
          <div className="flex flex-col space-y-2">
            <label htmlFor="destination" className="text-xs">
              Number of persons
            </label>
            <div className="flex items-center bg-white space-x-3.5 relative px-2">
              <IoPersonSharp className="h-6 w-6 text-gray-300" />
              <span
                className="w-full cursor-pointer text-sm py-2"
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
                  styleClasses="absolute -left-3.5 top-16 shadow-xl"
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
    </aside>
  );
};

export default HotelSearchForm;
