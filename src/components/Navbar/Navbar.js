import React from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='text-white'>
            <a href="#home"><AiOutlineHome /></a>
            <a href="#about" ><AiOutlineUser /></a>
            <a href="#project"> <AiOutlineFundProjectionScreen /></a>
            <a href="#contact" ><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Navbar;