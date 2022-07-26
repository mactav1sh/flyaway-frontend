import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-brandBlue">
      <div className="flex justify-between px-5 py-4 max-w-6xl text-white mx-auto">
        <p className="text-lg font-bold md:text-2xl ml-2">Booking.com</p>
        <ul>
          <div className="flex space-x-2 ">
            <li>
              <Link
                to="/register"
                className="px-4 py-1 font-semibold text-brandBlue200 bg-white border border-brandBlue200 rounded-sm hover:bg-blue-50 active:outline active:outline-brandBlue300"
              >
                Register
              </Link>
            </li>

            <li>
              <Link
                to="/sign-in"
                className="px-4 py-1 font-semibold text-brandBlue200 bg-white border border-brandBlue200 rounded-sm hover:bg-blue-50 active:outline active:outline-brandBlue300"
              >
                Sign in
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
