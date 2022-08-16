import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white py-5 ">
      <ul className="mx-auto mb-4 flex justify-center space-x-4 flex-wrap ">
        <li>
          <Link to="/" className="underline font-bold text-sm">
            Desktop version
          </Link>
        </li>
        <li>
          <Link to="/" className="underline font-bold text-sm">
            Terms & conditions
          </Link>
        </li>
        <li>
          <Link to="/" className="underline font-bold text-sm">
            How We Work
          </Link>
        </li>
        <li>
          <Link to="/" className="underline font-bold text-sm">
            Privacy & Cookies
          </Link>
        </li>
        <li>
          <Link to="/" className="underline font-bold text-sm">
            About Booking
          </Link>
        </li>
      </ul>
      <div className="text-center">
        <span>Copyrights &copy; 2022 - </span>
        <a
          href="https://github.com/mactav1sh"
          className="animate-pulse"
          target="_blank"
          rel="noreferrer"
        >
          @mactav1sh
        </a>
      </div>
    </footer>
  );
};

export default Footer;
