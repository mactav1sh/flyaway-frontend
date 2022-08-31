import PropertiesListItem from './PropertiesListItem';

interface IProps {
  data: any[];
}

const PropertiesList = ({ data }: IProps) => {
  return (
    <ul className="flex-[3.5] flex flex-col space-y-4">
      {data.map((property) => (
        <PropertiesListItem key={property._id} data={property} />
      ))}
    </ul>
  );
};

export default PropertiesList;
