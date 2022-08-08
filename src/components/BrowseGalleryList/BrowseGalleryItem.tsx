import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  img?: string;
  title: string;
  count: number;
  description?: string;
  countUnit?: string;
}

const BrowseGalleryItem = ({
  img = '',
  title,
  count,
  description,
  countUnit,
}: IProps) => {
  // TODO: REPLACE DIV WITH A LINK

  return (
    <li>
      <img
        src={img}
        alt={title}
        className="min-w-[18rem] w-60 mb-2 h-64 object-cover"
      />
      <div>
        <p className="font-bold capitalize">{title}</p>
        {/* Description */}
        {description && (
          <p className="capitalize text-sm text-gray-500">{description}</p>
        )}
        {/* Count */}
        <p className="text-sm text-gray-500">
          {count} {countUnit ? countUnit : title}
        </p>
      </div>
    </li>
  );
};

export default BrowseGalleryItem;
