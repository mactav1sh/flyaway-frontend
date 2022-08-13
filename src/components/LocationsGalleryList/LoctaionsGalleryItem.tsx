import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  img: string;
  count: number;
}

const LoctaionsGalleryItem = ({ title, img, count }: IProps) => {
  return (
    <li className="galleryCol">
      <Link to={`/properties?location=${title}`}>
        <div className="relative hover:outline hover:outline-1 hover:outline-brandYellow rounded-sm overflow-hidden group h-full">
          <img
            src={img}
            alt={title}
            className="object-cover object-top h-full md:h-full w-full"
          />
          {/* IMAGE SHADOW EFFECT */}
          <div className="bg-gradient-to-b from-black opacity-40 to-transparent top-0 absolute h-20 w-full group-hover:from-black group-hover:opacity-60"></div>

          {/* TEXT */}
          <div className="text-white absolute top-4 left-4 textShadow">
            <div className="flex items-end space-x-2">
              <p className="md:text-3xl text-xl font-bold capitalize">
                {title}
              </p>
            </div>
            <p className="text-sm md:text-base">{count} properties</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default LoctaionsGalleryItem;
