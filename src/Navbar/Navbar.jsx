import {  NavLink } from "react-router-dom";
import logo from '../../public/images/Unique-and-Modern-Travel-Logo-Design-Graphics-31283238-1-580x387.jpg'

const Navbar = () => {



  const links = (
    <>
      <li><NavLink  to='/' activeClassName="bg-red-500">Home</NavLink></li>
      <li><NavLink to='/Packages' activeClassName="text-red-500">Packages</NavLink></li>
      <li><NavLink to='/Shop' activeClassName="text-red-500">Shop</NavLink></li>
      <li><NavLink to='/About' activeClassName="text-red-500">About</NavLink></li>
      <li><NavLink to='/Pages' activeClassName="text-red-500">Pages</NavLink></li>
      <li><NavLink to='/News' activeClassName="text-red-500">News</NavLink></li>
      <li><NavLink to='/Contact' activeClassName="text-red-500">Contact</NavLink></li>
    </>
  )
    



  return (
    <div className="fixed w-full z-10 ">
      <div className="navbar bg-base-200 dark:bg-gray-800 dark:text-white" >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            {links}
            </ul>
          </div>
            <img src={logo} className="h-16 w-36" alt="" />
        </div>
        <div className="navbar-center ml-96 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-cyan-400 text-white rounded-3xl">Book now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
