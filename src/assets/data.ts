// NOTE: after scaling and creating new API models
// these will be removed and data will come from db

// HOME -Data for Section - Browse by property type
export const propertiesTypesImgs = {
  hotels:
    'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  hostels:
    'https://images.pexels.com/photos/5137986/pexels-photo-5137986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  resorts:
    'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  villas:
    'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  cabins:
    'https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?cs=srgb&dl=pexels-pixabay-206648.jpg&fm=jpg',
  apartments:
    'https://images.pexels.com/photos/7028102/pexels-photo-7028102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

// HOME - Data for Section - large locations gallery
// NOTE: locations will be fetched in the future using geospatial data
export const locations: [string, string, string, string, string] = [
  'hurghada',
  'cairo',
  'sharm_el_sheikh',
  'istanbul',
  'dubai',
];

export const locationsImgs = {
  hurghada:
    'https://cf.bstatic.com/xdata/images/city/1680x560/644333.jpg?k=5ef264baf6fb50c13b119d4b378111f7072e30c42996c51ce7e76f2574e1d785&o=',
  cairo:
    'https://images.pexels.com/photos/11010719/pexels-photo-11010719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  sharm_el_sheikh:
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e0/2d/89/view-from-lobby-terrace.jpg?w=1100&h=-1&s=1',

  istanbul:
    'https://images.pexels.com/photos/822472/pexels-photo-822472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

  dubai:
    'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

// HOME - Data for Section - Communities
export const communitesImgs = {
  egypt:
    'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  travel_talk:
    'https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  more_communities:
    'https://img.freepik.com/free-vector/people-holding-connected-copy-space-circle-icons_53876-59904.jpg?w=900&t=st=1659894083~exp=1659894683~hmac=dc47758933370a6a58bf3244ffe6eaedb8954a1a429574b2ba07e06d187216b9',
};

export const communitesData = [
  {
    _id: 'egypt',
    count: 100,
    countUnit: 'travellers',
    description: 'travel community',
  },
  {
    _id: 'travel_talk',
    count: 600,
    countUnit: 'travellers',
    description: 'general discussion',
  },
  {
    _id: 'more_communities',
    countUnit: 'travellers',
    count: 100,
    description: 'view all',
  },
];
