import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { IoPersonCircleSharp } from 'react-icons/io5';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    await signOut();
    navigate('/signin');
  };

  return (
    <nav className="bg-brandBlue">
      <div className="flex justify-between px-5 py-4 max-w-6xl text-white mx-auto">
        <Link to="/" className="text-lg font-bold md:text-2xl ml-2">
          Booking
        </Link>

        <ul>
          <div className="flex space-x-2 items-center flex-wrap ">
            {user && (
              <>
                <li>
                  <Link to="/" className="">
                    <div className="flex items-center space-x-1 hover:bg-brandBlue300 md:py-2 md:px-2 mr-1 rounded-sm">
                      {/* image */}
                      <div className="relative">
                        <div className="h-7 w-7 absolute border-brandYellow border-2 right-0.5 top-0.5 rounded-full"></div>
                        <IoPersonCircleSharp className="h-8 w-8  rounded-full" />
                      </div>
                      {/* text */}
                      <p className="font-semibold capitalize text-sm md:text-base">
                        {user.name}
                      </p>
                    </div>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleClick}
                    type="button"
                    className="px-2 py-0.5 text-sm font-semibold text-white bg-brandBlue border border-white rounded-sm hover:bg-brandBlue300 active:outline active:outline-brandBlue300 md:px-4 md:text-base "
                  >
                    Sign out
                  </button>
                </li>
              </>
            )}

            {!user && (
              <>
                <li>
                  <Link
                    to="/register"
                    className="px-2 py-0.5 text-sm md:px-4 md:py-1 font-semibold text-brandBlue200 bg-white border border-brandBlue200 rounded-sm hover:bg-blue-50 active:outline active:outline-brandBlue300"
                  >
                    Register
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signin"
                    className="px-2 py-0.5 text-sm md:px-4 md:py-1 font-semibold text-brandBlue200 bg-white border border-brandBlue200 rounded-sm hover:bg-blue-50 active:outline active:outline-brandBlue300"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
