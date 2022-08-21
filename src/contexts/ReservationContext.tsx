import { createContext, Dispatch, ReactNode, useReducer } from 'react';

// INTERFACES
interface IProps {
  children: ReactNode;
}
interface IContext {
  selectedRoomIds: string[];
  selectedDays: number[];
  dispatch: Dispatch<IAction>;
  cost: number;
}
interface IState {
  selectedRoomIds: string[];
  selectedDays: number[];
  cost: number;
}
interface IAction {
  type: 'SET_DAYS' | 'SET_ROOMS_IDS' | 'ADD_COST' | 'SUBTRACT_COST' | 'RESET';
  payload: number[] | string[] | number;
}

// REDUCER
const INITIAL = {
  selectedRoomIds: [],
  selectedDays: [],
  cost: 0,
};
const reservationReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'SET_DAYS':
      return { ...state, selectedDays: action.payload as number[] };

    case 'SET_ROOMS_IDS':
      return { ...state, selectedRoomIds: action.payload as string[] };
    case 'ADD_COST':
      return { ...state, cost: state.cost + (action.payload as number) };
    case 'SUBTRACT_COST':
      return { ...state, cost: state.cost - (action.payload as number) };
    case 'RESET':
      return { selectedRoomIds: [], selectedDays: [], cost: 0 };

    default:
      throw new Error(`action "${action.type}" is not defined`);
  }
};

// CONTEXT
export const ReservationContext = createContext<IContext>({} as IContext);
const ReservationProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reservationReducer, INITIAL);
  const value = {
    ...state,
    dispatch,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
