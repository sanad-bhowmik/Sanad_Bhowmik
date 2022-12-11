import React from 'react';
import Header from '../Header/Header';
import '../Navbar/Banner/Banner.css'
import comming from '../../Assets/coming.gif'
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <Header></Header>
            <div className='text-white hero  container w-full mx-auto' id='blogs' >
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        </h1>
                        <img className='mt-4' src={comming} alt="" />
                        <div className="flex flex-wrap mt-4 justify-center">
                            <Link to='/'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Back To Home
                                </span>
                            </button></Link>
                        </div>
                    </div>
                </section>
            </div>

        </>


    );
};

export default Blogs;