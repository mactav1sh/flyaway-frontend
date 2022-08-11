import {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  ReactNode,
} from 'react';
import { Range } from 'react-date-range';

interface IProps {
  children?: ReactNode;
}

interface IRoom {
  adults: number;
  children: number;
  room: number;
  minPrice?: number;
  maxPrice?: number;
}

interface IContext {
  date: Range[];
  setDate: Dispatch<SetStateAction<Range[]>>;
  roomOptions: IRoom;
  setRoomOptions: Dispatch<SetStateAction<IRoom>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<IContext>({
  date: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ],
  roomOptions: {
    adults: 2,
    children: 0,
    room: 1,
    minPrice: 100,
    maxPrice: 10000000,
  },
  searchInput: '',
  setDate: function () {},
  setRoomOptions: function () {},
  setSearchInput: function () {},
});

const SearchProvider = ({ children }: IProps) => {
  // date options
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  // room options
  const [roomOptions, setRoomOptions] = useState<IRoom>({
    adults: 2,
    children: 0,
    room: 1,
    minPrice: 100,
    maxPrice: 10000000,
  });
  // search input
  const [searchInput, setSearchInput] = useState('');

  const value = {
    date,
    setDate,
    roomOptions,
    setRoomOptions,
    searchInput,
    setSearchInput,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
