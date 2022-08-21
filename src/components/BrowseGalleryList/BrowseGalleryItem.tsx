import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  img?: string;
  title: string;
  count: number;
  description?: string;
  countUnit?: string;
  route: string;
}

const BrowseGalleryItem = ({
  img = '',
  title,
  count,
  description,
  countUnit,
  route,
}: IProps) => {
  const titleWithSpaces = title.includes('_')
    ? title.replaceAll('_', ' ')
    : title;

  return (
    <li>
      <Link to={route}>
        <img
          src={img}
          alt={titleWithSpaces}
          className="min-w-[18rem] w-60 mb-2 h-64 object-cover"
        />
        <div>
          <p className="font-bold capitalize">{titleWithSpaces}</p>
          {/* Description */}
          {description && (
            <p className="capitalize text-sm text-gray-500">{description}</p>
          )}
          {/* Count */}
          <p className="text-sm text-gray-500">
            {count} {countUnit ? countUnit : titleWithSpaces}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default BrowseGalleryItem;
