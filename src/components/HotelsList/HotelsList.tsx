import React from 'react';
import HotelsListItem from './HotelsListItem';

const HotelsList = () => {
  return (
    <ul className="flex-[3.5] flex flex-col space-y-4">
      <HotelsListItem />
      <HotelsListItem />
      <HotelsListItem />
      <HotelsListItem />
      <HotelsListItem />
      <HotelsListItem />
      <HotelsListItem />
    </ul>
  );
};

export default HotelsList;
