import RoomsListItem from './RoomsListItem';

interface IRoom {
  _id: string;
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  unavailableDates: Date[];
}

interface IProps {
  data: IRoom[];
}

const RoomsList = ({ data }: IProps) => {
  return (
    <ul className="py-3 mb-8 mt-5 max-h-96 overflow-y-scroll border rounded-sm simple-scrollbar">
      {data.map((room) => {
        return <RoomsListItem key={room._id} room={room} />;
      })}
    </ul>
  );
};

export default RoomsList;
