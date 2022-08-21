import {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  ReactNode,
} from 'react';
import { Range } from 'react-date-range';

// INTERFACES
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

// CREATING CONTEXT
export const SearchContext = createContext<IContext>({} as IContext);

// SEARCH CONTEXT PROVIDER
const SearchProvider = ({ children }: IProps) => {
  // TODO: REPLACE useState with useReducer
  // 1. SearchForm with contain usestates
  // 2. On form submit searchForm will dispatch an action with form values
  // 3. PropertySearchForm will get values from reducer state

  // Date options
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // Room options
  const [roomOptions, setRoomOptions] = useState<IRoom>({
    adults: 2,
    children: 0,
    room: 1,
    minPrice: 100,
    maxPrice: 10000,
  });

  // Search input
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
