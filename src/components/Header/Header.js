import React from 'react';
import './Header.css'
import logo from '../../Assets/logo.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div id='home'>
            <div className="navbar container w-full text-white mx-auto header lg:mb-10 mb-24 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content hero mt-3 p-2 shadow  rounded-box w-52">
                            <li><a a href='/'>Home</a></li>
                        </ul>
                    </div>
                    <Link to='/' className='btn btn-ghost normal-case text-xl'><img className='h-12 rounded-xl' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold'> <Link to='/'>Home</Link> </li>
                        <a href="/resume_sanad.pdf" download>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Resume
                                </span>
                            </button>
                        </a>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;