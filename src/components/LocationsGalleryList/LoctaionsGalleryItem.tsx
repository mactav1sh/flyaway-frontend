import React from 'react';

const LoctaionsGalleryItem = () => {
  return (
    <li className="galleryCol">
      <div className="relative hover:outline hover:outline-1 hover:outline-brandYellow rounded-sm overflow-hidden group h-full">
        <img
          src="https://images.pexels.com/photos/2359/sand-desert-statue-pyramid.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover h-full md:h-auto"
        />
        {/* IMAGE SHADOW EFFECT */}
        <div className="bg-gradient-to-b from-black opacity-40 to-transparent top-0 absolute h-20 w-full group-hover:from-black group-hover:opacity-60"></div>

        {/* TEXT */}
        <div className="text-white absolute top-4 left-4 textShadow">
          <div className="flex items-end space-x-2">
            <p className="text-3xl font-bold ">Cairo</p>
            {/* FLAG */}
            <img
              src="https://cdn.pixabay.com/photo/2012/04/10/23/13/egypt-26909_960_720.png"
              alt=""
              className="w-5 mb-1.5 rounded-sm shadow-lg"
            />
          </div>
          <p>100 properties</p>
        </div>
      </div>
    </li>
  );
};

export default LoctaionsGalleryItem;
