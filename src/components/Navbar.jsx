import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useMemo } from "react";

const Navbar = () => {
    const location = useLocation();

    const setAbsolute = useMemo(()=> location.pathname === "/" , [location])
    
  return (
    <nav className="w-full bg-zinc-900 text-white flex px-8 py-2 justify-between items-center z-[10000] flex-col sm:flex-row sm:gap-4" style={{
        position: setAbsolute ? "absolute" : "relative"
    }}>
      <span className="flex gap-2 items-center">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        <h1 className="font-bold">MyTinerary</h1>
      </span>
      <ul className="flex gap-2 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cities">Cities</Link>
        </li>
        <li>
            <Link to="about"  className="flex gap-4 rounded-md bg-blue-600 p-2 cursor-pointer hover:bg-blue-900">
            <p className="hidden sm:block">Login</p>
            <img src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1" alt="profile" className="w-6 h-6 rounded-full"/>
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
