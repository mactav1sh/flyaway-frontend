import React from 'react';
import LoctaionsGalleryItem from './LoctaionsGalleryItem';
interface IProps {
  cities: [string, string, string, string, string];
  data?: any[];
  imgs?: {};
}

const LoctaionsGalleryList = ({ data, imgs = [], cities }: IProps) => {
  console.log(data);
  return (
    <div className="max-w-6xl mx-auto">
      <ul>
        <div className="grid grid-cols-12 grid-rows-2 gap-y-4 gap-x-4 mx-2 lg:mx-0 grid-flow-row border-b pb-12 md:pb-0 mb-6 md:mb-10">
          {data?.map((property) => {
            if (cities.includes(property._id)) {
              return (
                <LoctaionsGalleryItem
                  title={property._id}
                  img={imgs[property._id as keyof typeof imgs]}
                  count={property.count}
                />
              );
            } else return null;
          })}
        </div>
      </ul>
    </div>
  );
};

export default LoctaionsGalleryList;
