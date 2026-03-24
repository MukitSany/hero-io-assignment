import React from 'react';
import Headerimg from '../../assets/logo.png'
import { Github } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navber = () => {

    const link = <>
        <NavLink to={"/"}><li className='m-2 '>Home</li></NavLink>
        <NavLink to="/apps"><li className='m-2'>Apps</li></NavLink>
        <NavLink to="installation"><li className='m-2'>Installation</li></NavLink>
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow [&_a]:hover:underline [&_a.active]:text-purple-700">
        {
            link
        }
      </ul>
    </div>
    <Link to="/"><p className="btn btn-ghost text-xl"><img className='h-8 w-auto' src={Headerimg} alt=""/><span className='text-3xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Hero.IO</span></p></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 [&_a]:hover:border-2 font-bold active [&_a.active]:text-red-500">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/MukitSany' target='_blank' className="btn btn-primary"><Github /><span>Contributr</span></a>
  </div>
</div>
        </div>
    );
};

export default Navber;