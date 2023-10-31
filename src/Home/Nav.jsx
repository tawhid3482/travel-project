import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";

const Nav = () => {
  const {user}  = useState(null); 
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const links = (
    <>
      <li>
        <Link to="/" className="flex justify-center hover:bg-white" >Home</Link>
      </li>
      <li>
        <Link to="/about" className="flex justify-center hover:bg-white">About</Link>
      </li>
      {/* Add more links as needed */}
    </>
  );

  return (
    <div className="mt-60 m-10">
      <div className="navbar bg-gray-300 dark:bg-slate-700 dark:text-slate-100">
        <div className="navbar-start">
          {user ? (
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/path/to/user-avatar" alt="user-avatar" />
                </div>
              </label>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/profile" className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-60">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center  mr-5 md:mr-4 lg:mr-0">
            <button onClick={handleTheme} className="btn btn-sm rounded-3xl">
              {theme === 'dark' ? <BsSun /> : <GiNightSleep />} 
            </button>
            <a className="btn btn-ghost normal-case text-xl">Logo</a>
          </div>

          <div className="dropdown">
            <label onClick={toggleMenu} tabIndex={0} className="btn btn-ghost lg:hidden">
              {isMenuVisible ? <RxCross2 className="text-2xl" /> : <AiOutlineMenuUnfold className="text-2xl" />}
            </label>
            {isMenuVisible && (
              <ul className="menu menu-sm dropdown-content right-1 mt-2 z-[1] p-2 shadow bg-blue-300 rounded-lg w-64 mx-auto text-center">
                {links}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
