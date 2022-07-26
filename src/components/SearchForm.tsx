import React from 'react';
import { IoBed, IoPersonSharp } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const SearchForm = () => {
  return (
    <section className=" bg-brandBlue flex justify-center pt-60 md:pt-20 relative">
      <div className="max-w-6xl absolute -translate-y-48 w-full md:-translate-y-1/2">
        <form className="mx-2">
          <div className="w-full p-1 shadow-md bg-brandYellow rounded-sm grid md:grid-rows-1 md:grid-cols-4 md:gap-x-1 gap-y-1 md:gap-y-0">
            {/* input1 */}
            <div className="flex items-center">
              <input
                type="text"
                name=""
                id="destination"
                placeholder="Where are you going?"
                className="w-full h-full p-3.5 pl-11 placeholder:text-black rounded-sm focus:outline-none focus:placeholder:text-gray-400 hover:outline-2
              hover:outline
            hover:outline-brandYellowDark
            "
              />
              <IoBed className="absolute ml-2 h-5 w-5 text-gray-300" />
            </div>
            {/* input2 */}
            <div className="flex items-center bg-white px-3.5 p-3.5 space-x-3.5">
              <BiCalendar className="h-6 w-6 text-gray-300" />
              <span>date to date</span>
            </div>
            {/* input3 */}
            <div className="flex items-center bg-white px-3.5 p-3.5 space-x-3.5">
              <IoPersonSharp className="h-6 w-6 text-gray-300" />
              <span>2 adult · children · one room</span>
            </div>
            {/* end */}
            <button
              type="submit"
              className="py-3 text-xl font-semibold bg-brandBlueSec100 text-white hover:bg-brandBlueSec200"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
