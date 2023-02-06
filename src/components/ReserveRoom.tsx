import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import RoomsList from '../components/RoomsList/RoomsList';
import { ReservationContext } from '../contexts/ReservationContext';
import { SearchContext } from '../contexts/SearchContext';
import useAuth from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';

interface IProps {
  openModal: Dispatch<SetStateAction<boolean>>;
  propertyId: string;
}

const ReserveRoom = ({ openModal, propertyId }: IProps) => {
  const { selectedRoomIds, selectedDays, dispatch, cost } =
    useContext(ReservationContext);
  const { date } = useContext(SearchContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, loading } = useFetch(`rooms/property/${propertyId}`);

  const listOfEachDay = useCallback((startDate: Date, endDate: Date) => {
    // A fn that takes two dates and returns an array of the days between the start and end dates
    let list: number[] = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    let date = new Date(start.getTime());

    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  }, []);

  // On mount check if user is signed in or not, if not redirect to sign in page
  useEffect(() => {
    if (!user) navigate('/signin');
  });
  // On mount set the number of nights
  useEffect(() => {
    const daysArr = listOfEachDay(
      date[0].startDate as Date,
      date[0].endDate as Date
    );
    dispatch({ type: 'SET_DAYS', payload: daysArr });
  }, [date, dispatch, listOfEachDay]);

  const handleClose = () => {
    openModal(false);
    dispatch({ type: 'RESET', payload: [] });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedRoomIds.length < 0) {
      dispatch({ type: 'RESET', payload: [] });
      openModal(false);
    }

    const roomReservationPromises = selectedRoomIds.map((roomId) => {
      return fetch(`${process.env.REACT_APP_API}rooms/${roomId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dates: selectedDays }),
      });
    });
    await Promise.all(roomReservationPromises);
    openModal(false);
    dispatch({ type: 'RESET', payload: [] });
  };
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm">
      {/* Modal */}
      <div className="bg-white shadow-2xl p-4 mx-2 md:mx-0 max-w-6xl relative rounded-sm border-2 border-brandYellow">
        {/* - Close button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute right-2.5 top-2.5"
        >
          <FaWindowClose className="h-4 w-4 text-brandBlueSec100" />
        </button>
        {/* - Form and room list */}
        <form onSubmit={handleSubmit}>
          {loading ? (
            <div className="flex items-center justify-center p-16">
              <CgSpinnerTwoAlt className="w-7 h-7 animate-spin" />
            </div>
          ) : (
            <RoomsList data={data.rooms} />
          )}

          {/* -- button and total */}
          <div className="w-full flex justify-center items-center space-x-10">
            <div className="w-40">
              <p className="font-semibold">
                <span className="font-normal">Stay:</span> {selectedDays.length}
                -Nights
              </p>
              <p className="font-semibold">
                <span className="font-normal">Total:</span> {cost} EGP
              </p>
            </div>
            <button
              type="submit"
              className="py-2 px-4 tracking-wide font-bold bg-brandBlueSec100 text-white hover:bg-brandBlueSec200 rounded-sm "
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveRoom;
