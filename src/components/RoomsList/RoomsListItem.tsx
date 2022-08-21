import React, { ChangeEvent, useCallback, useContext } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { ReservationContext } from '../../contexts/ReservationContext';

interface IRoom {
  _id: string;
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  unavailableDates: Date[];
}

interface IProps {
  room: IRoom;
}

const RoomsListItem = ({ room }: IProps) => {
  const { dispatch, selectedRoomIds, selectedDays } =
    useContext(ReservationContext);
  const isNotAvailable = useCallback(
    (unavailableDates: Date[], selectedDays: number[]): boolean => {
      // Checks if any of the selected days is included in the unavailableDates array and returns a boolean
      return unavailableDates.some((date) =>
        selectedDays.includes(new Date(date).getTime())
      );
    },

    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const roomId = event.target.value;
    const cost = room.price * selectedDays.length;

    if (event.target.checked) {
      dispatch({
        payload: [...selectedRoomIds, roomId],
        type: 'SET_ROOMS_IDS',
      });
      dispatch({
        payload: cost,
        type: 'ADD_COST',
      });
    }

    if (!event.target.checked) {
      const newPayload = [
        ...selectedRoomIds.filter((value) => value !== roomId),
      ];

      dispatch({
        payload: newPayload,
        type: 'SET_ROOMS_IDS',
      });
      dispatch({
        payload: cost,
        type: 'SUBTRACT_COST',
      });
    }
  };

  const reserved = isNotAvailable(room.unavailableDates, selectedDays);

  return (
    <li className="flex justify-between md:min-w-[40rem] mb-4 pb-3 border-b last:border-b-0 last:mb-0">
      {/*  desc */}
      <div className="px-3 min-w-[12rem] md:min-w-[35rem]">
        <p className="text-2xl font-semibold text-brandBlue200 capitalize max-w-sm">
          {room.title}
        </p>
        <p className="max-w-sm text-sm md:max-w-lg mb-4">{room.desc}</p>
        <div className="flex items-center space-x-1">
          <IoPersonSharp />
          <span>x {room.maxPeople}</span>
        </div>
        <p className="font-semibold">EGP {room.price}/Night</p>
      </div>
      {/*  check */}
      <div className="flex flex-col justify-center items-center space-y-1 pr-3 w-16 ">
        {reserved ? (
          <label className="text-sm text-brandBlueSec200">Reserved</label>
        ) : (
          <label className="text-sm">select</label>
        )}
        <input
          value={room._id}
          disabled={reserved}
          onChange={handleChange}
          type="checkbox"
          className="h-5 w-5"
        />
      </div>
    </li>
  );
};

export default RoomsListItem;
