import React, { useState } from 'react';

interface IProps {
  styleClasses: string;
  roomOptions: { adults: number; children: number; room: number };
  setRoomOptions: React.Dispatch<
    React.SetStateAction<{ adults: number; children: number; room: number }>
  >;
}

type roomOptions = 'adults' | 'children' | 'room';
type operationOptions = '+' | '-';

const PersonsCount = ({
  styleClasses,
  setRoomOptions,
  roomOptions,
}: IProps) => {
  // const [roomOptions, setRoomOptions] = useState({
  //   adults: 2,
  //   children: 0,
  //   room: 1,
  // });

  const handleClick = (option: roomOptions, operation: operationOptions) => {
    if (operation === '+') {
      setRoomOptions((prevState) => ({
        ...prevState,
        [option]: prevState[option] + 1,
      }));
    } else {
      setRoomOptions((prevState) => ({
        ...prevState,
        [option]: prevState[option] - 1,
      }));
    }
  };

  const minCount = (min: number = 0, option: roomOptions): boolean => {
    if (min === roomOptions[option]) return true;
    return false;
  };

  const maxCount = (min: number = 0, option: roomOptions): boolean => {
    if (min === roomOptions[option]) return true;
    return false;
  };

  return (
    <div className={`bg-white rounded-sm ${styleClasses}`}>
      <div className="p-5 w-80 flex flex-col space-y-4">
        {/* ADULTS COUNT */}
        <div className="flex items-center justify-between border-b pb-4">
          <span>Adults</span>
          {/* Adults buttons */}
          <div className="flex w-32 items-center justify-between">
            <button
              onClick={() => handleClick('adults', '-')}
              disabled={minCount(1, 'adults')}
              className="w-10 h-10 border text-lg text-brandBlueSec100 border-brandBlueSec100 rounded-sm hover:bg-brandLightBlue100 focus:outline focus:outline-[3px] focus:outline-brandLightBlue200 disabled:cursor-not-allowed disabled:text-gray-400 shrink-0"
            >
              -
            </button>
            <span>{roomOptions.adults}</span>
            <button
              onClick={() => handleClick('adults', '+')}
              disabled={maxCount(30, 'adults')}
              className="w-10 h-10 border text-lg text-brandBlueSec100 border-brandBlueSec100 rounded-sm hover:bg-brandLightBlue100 focus:outline focus:outline-[3px] focus:outline-brandLightBlue200 disabled:cursor-not-allowed disabled:text-gray-400 shrink-0"
            >
              +
            </button>
          </div>
        </div>

        {/* CHILDREN COUNT */}
        <div className="flex items-center justify-between border-b pb-4">
          <span>Children</span>
          {/* Childred buttons */}
          <div className="flex w-32 items-center justify-between">
            <button
              onClick={() => handleClick('children', '-')}
              disabled={minCount(0, 'children')}
              className="w-10 h-10 border text-lg text-brandBlueSec100 border-brandBlueSec100 rounded-sm hover:bg-brandLightBlue100 focus:outline focus:outline-[3px] focus:outline-brandLightBlue200 disabled:cursor-not-allowed disabled:text-gray-400 shrink-0"
            >
              -
            </button>
            <span>{roomOptions.children}</span>
            <button
              onClick={() => handleClick('children', '+')}
              disabled={maxCount(10, 'children')}
              className="w-10 h-10 border text-lg text-brandBlueSec100 border-brandBlueSec100 rounded-sm hover:bg-brandLightBlue100 focus:outline focus:outline-[3px] focus:outline-brandLightBlue200 disabled:cursor-not-allowed disabled:text-gray-400 shrink-0"
            >
              +
            </button>
          </div>
        </div>

        {/* ROOMS COUNT */}
        <div className="flex items-center justify-between">
          <span>Rooms</span>
          {/* Room buttons */}
          <div className="flex w-32 items-center justify-between">
            <button
              onClick={() => handleClick('room', '-')}
              disabled={minCount(1, 'room')}
              className="w-10 h-10 border text-lg text-brandBlueSec100 border-brandBlueSec100 rounded-sm hover:bg-brandLightBlue100 focus:outline focus:outline-[3px] focus:outline-brandLightBlue200 disabled:cursor-not-allowed disabled:text-gray-400 shrink-0"
            >
              -
            </button>
            <span>{roomOptions.room}</span>
            <button
              onClick={() => handleClick('room', '+')}
              disabled={maxCount(30, 'room')}
              className="w-10 h-10 border text-lg text-brandBlueSec100 border-brandBlueSec100 rounded-sm hover:bg-brandLightBlue100 focus:outline focus:outline-[3px] focus:outline-brandLightBlue200 disabled:cursor-not-allowed disabled:text-gray-400 shrink-0"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonsCount;
