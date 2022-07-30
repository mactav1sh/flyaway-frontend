import React from 'react';
import BrowsePropertyItem from './BrowseGalleryItem';

interface IProps {
  title?: string;
}

const BrowseGalleryList = ({ title = 'Browse' }: IProps) => {
  return (
    <section className="max-w-6xl mb-20 mx-2 md:mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="overflow-x-auto no-x-scroll-bar">
        <div className="flex space-x-3">
          <BrowsePropertyItem />
          <BrowsePropertyItem />
          <BrowsePropertyItem />
          <BrowsePropertyItem />
          <BrowsePropertyItem />
          <BrowsePropertyItem />
          <BrowsePropertyItem />
        </div>
      </ul>
    </section>
  );
};

export default BrowseGalleryList;
