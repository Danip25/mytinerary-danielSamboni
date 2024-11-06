import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useMemo } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const favoritesCities = useSelector(state => state.favoritesCities);
  const location = useLocation();
  const user = false;

  const setAbsolute = useMemo(() => location.pathname === '/', [location]);

  return (
    <nav
      className="w-full bg-zinc-900 text-white flex px-8 py-2 justify-between items-center z-[10000] flex-col sm:flex-row sm:gap-4"
      style={{
        position: setAbsolute ? 'absolute' : 'relative',
      }}
    >
      <NavLink to="/">
        <span className="flex gap-2 items-center cursor-pointer">
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <h1 className="font-bold cursor-pointer">MyTinerary</h1>
        </span>
      </NavLink>
      <ul className="flex gap-2 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'border-b border-b-white pb-1' : 'pb-1'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) =>
              isActive ? 'border-b border-b-white pb-1' : 'pb-1'
            }
          >
            Cities
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="favorites"
              className={({ isActive }) =>
                isActive ? 'border-b border-b-white pb-1' : 'pb-1'
              }
            >
              <span className="relative">
                <HeartIcon className="w-6 h-6" />
                {favoritesCities?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1">
                    {favoritesCities?.length}
                  </span>
                )}
              </span>
            </NavLink>
          </li>
        )}
        <li>
          <Link
            to="login"
            className="flex gap-4 rounded-md bg-blue-600 p-2 cursor-pointer hover:bg-blue-900"
          >
            <p className="hidden sm:block">Login</p>
            <img
              src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
              alt="profile"
              className="w-6 h-6 rounded-full"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
