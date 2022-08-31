import BrowsePropertyItem from './BrowseGalleryItem';

interface IProps {
  title?: string;
  data?: any[];
  imgs?: {};
  route?: string;
}

const BrowseGalleryList = ({
  title = 'Browse',
  data = [],
  imgs = {},
  route,
}: IProps) => {
  return (
    <section className="max-w-6xl mb-20 mx-2 lg:mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="overflow-x-auto no-x-scroll-bar">
        <div className="flex space-x-3">
          {data.map((data) => (
            <BrowsePropertyItem
              key={data._id}
              img={imgs[data._id as keyof typeof imgs]}
              title={data._id}
              count={data.count}
              // Optional Data
              description={data.description ? data.description : null}
              countUnit={data.countUnit ? data.countUnit : null}
              route={`${route}${data._id}`}
            />
          ))}
        </div>
      </ul>
    </section>
  );
};

export default BrowseGalleryList;
