import React from 'react';
import PropertiesListItem from './PropertiesListItem';

interface IProps {
  data: any[];
}

const PropertiesList = ({ data }: IProps) => {
  return (
    <ul className="flex-[3.5] flex flex-col space-y-4">
      <PropertiesListItem />
      <PropertiesListItem />
      <PropertiesListItem />
      <PropertiesListItem />
      <PropertiesListItem />
      <PropertiesListItem />
      <PropertiesListItem />
    </ul>
  );
};

export default PropertiesList;
