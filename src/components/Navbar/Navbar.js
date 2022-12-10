import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='text-white'>
            <a href="#home"><AiOutlineHome /></a>
            <a href="#about" ><AiOutlineUser /></a>
            <a href="#portfolio"><RiServiceLine /></a>
            <a href="#contact" ><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Navbar;