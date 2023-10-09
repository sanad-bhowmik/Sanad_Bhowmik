import React from 'react';
import './Banner.css'
import profile1 from '../../../Assets/profile1.png'
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <div className='mb-24 ' id="home" data-aos="fade-down">
            <div className="hero   text-white container w-full mx-auto "
            >
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={profile1} alt='' className="h-96 rounded-lg shadow-2xl " data-aos="fade-left" />
                    <div data-aos="fade-right">
                        <h2 className='text-3xl font-bold'>Hey! I am </h2>
                        <h1 className="text-6xl font-bold heading title">Sanad Bhowmik</h1>
                        <p className="py-6 heading text-4xl " >
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={[' MERN Stack Developer', 'Font-End Developer']}
                                    loop={30}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </p>
                        <a href="SanadBhowmik.pdf" target='_blank'>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Find CV
                                </span>
                            </button>
                        </a>
                        <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;