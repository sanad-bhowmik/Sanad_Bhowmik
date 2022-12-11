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

                            <li><a href='/blogs'>Blogs</a></li>
                        </ul>
                    </div>
                    <Link to='/' className='btn btn-ghost normal-case text-xl'><img className='h-12 rounded-xl' src={logo} alt="" /></Link>
                    {/* <a className="btn btn-ghost normal-case text-xl" href='/'> <img className='h-12 rounded-xl' src={logo} alt="" /> </a> */}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold'> <Link to='/'>Home</Link> </li>


                        <li className='font-bold'><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;