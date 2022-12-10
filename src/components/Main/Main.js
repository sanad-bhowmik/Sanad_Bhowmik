import React from 'react';
import Contact from '../Contact/Contact';
import Banner from '../Navbar/Banner/Banner';
import Myself from '../Navbar/Banner/Myself/Myself';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';


const Main = () => {
    return (
        <div  >
            <Navbar></Navbar>
            <Banner></Banner>
            <Myself></Myself>
            <Projects></Projects>
            <Contact></Contact>



        </div>
    );
};

export default Main;