import { TbSwimming, TbBus } from 'react-icons/tb';
import {
  MdOutlineRoomService,
  MdOutlineCoffeeMaker,
  MdOutlineCoffee,
} from 'react-icons/md';
import { IoLogoNoSmoking } from 'react-icons/io5';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import { TbBrandProducthunt } from 'react-icons/tb';

interface IProps {
  tag: string;
}

const TagListItem = ({ tag }: IProps) => {
  const tagsIcons = {
    swimming: <TbSwimming />,
    airport: <TbBus />,
    roomService: <MdOutlineRoomService />,
    noSmoking: <IoLogoNoSmoking />,
    restuarant: <GiForkKnifeSpoon />,
    freeParking: <TbBrandProducthunt className="w-5 h-5" />,
    coffeeMaker: <MdOutlineCoffeeMaker />,
    bar: <BiDrink />,
    breakfast: <MdOutlineCoffee />,
  };
  const tagsText = {
    swimming: ' Swimming pool',
    airport: 'Airport shuttle',
    roomService: 'Room service',
    noSmoking: 'Non-smoking rooms',
    restuarant: 'Restaurant',
    freeParking: 'Free parking',
    coffeeMaker: 'Tea/Coffee Maker in All Rooms',
    bar: 'Bar',
    breakfast: 'Breakfast',
  };

  return (
    <li className="flex items-center space-x-1 text-green-700 mr-4 mt-2">
      {tagsIcons[tag as keyof typeof tagsIcons]}
      <span className="text-black text-sm">
        {tagsText[tag as keyof typeof tagsText]}
      </span>
    </li>
  );
};

export default TagListItem;
