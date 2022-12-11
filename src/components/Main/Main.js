import React from 'react';
import { Outlet } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Banner from '../Navbar/Banner/Banner';
import Myself from '../Navbar/Banner/Myself/Myself';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';


const Main = () => {
    return (
        <div  >

            <Outlet></Outlet>
        </div>
    );
};

export default Main;