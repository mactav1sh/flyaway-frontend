import React from 'react';

const HotelsListItem = () => {
  return (
    <li className="p-4 border border-gray-300 flex flex-col space-y-12 lg:space-x-7 lg:flex-row lg:space-y-0">
      {/* IMAGE AND DESC */}
      <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
        <img
          src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover w-full h-40 rounded-md md:h-56 md:w-52"
        />
        {/* - Full Desc */}
        <div>
          {/* -- hotel name */}
          <h3 className="text-xl font-bold text-brandBlueSec100">
            World's Greatest Hotel
          </h3>
          {/* location */}
          <div className="flex items-end space-x-2 mb-4 lg:mb-2">
            <span className="underline font-semibold text-brandBlueSec100">
              Downtown, cairo
            </span>
            <span className="font-bold text-gray-300">•</span>
            <span className="text-sm">10 km from center</span>
          </div>
          {/* -- hotel description */}
          <div className="py-0.5 pl-3 border-l-[3px]">
            <p className="font-bold">Standard Twin Room with Garden View</p>
            {/* TODO: ADD A FUNC TO REPLACE , WITH • IN <P> FOR ROOM DESC BELOW */}
            <p>2 twin beds</p>
            <p className="font-bold text-brandGreen200">
              FREE cancellation • No prepayment needed
            </p>
            <p className="text-brandGreen100">
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        </div>
      </div>

      {/* - Reviews and Prices */}
      <div className="flex flex-col space-y-8 lg:space-y-2">
        {/* -- Review score and price */}
        <div className="flex space-x-10 justify-center lg:space-y-16 lg:flex-col lg:self-end lg:space-x-0">
          <div className="flex space-x-2.5 ">
            {/* --- score text */}
            <div>
              <p className="font-semibold">Review score</p>
              <p className="text-sm text-gray-500 text-end">494 reviews</p>
            </div>
            {/* --- score number */}
            <div className="flex items-center bg-brandBlue px-2 rounded-r-md rounded-tl-md">
              <span className="text-xl font-semibold text-white">9.8</span>
            </div>
          </div>
          {/* -- price */}

          <div>
            <p className="text-xl text-end font-semibold">EGP 1,500</p>
            <p className="text-sm text-gray-400 text-end">
              Includes taxes and fees
            </p>
          </div>
        </div>

        <button className="py-3 text-lg bg-brandBlueSec100 text-white hover:bg-brandBlueSec200 lg:w-44">
          See availability {'>'}
        </button>
      </div>
    </li>
  );
};

export default HotelsListItem;
