import React from 'react';
import Header from '../../Header/Header';
import '../../../components/Navbar/Banner/Banner.css'
import { FaHandPointRight } from "react-icons/fa";
import moto1 from '../../../Assets/Projects/Moto/1.png'
import moto2 from '../../../Assets/Projects/Moto/2.png'
import moto3 from '../../../Assets/Projects/Moto/3.png'

const MotoVintage = () => {
    return (
        <div>
            <Header></Header>
            <section className="pt-6 w-full mx-auto dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                            <img data-aos="fade-up-right" className="object-cover w-full dark:bg-gray-500 aspect-square" src={moto1} alt='' />
                            <img data-aos="flip-down" className="object-cover w-full dark:bg-gray-500 aspect-square" src={moto2} alt='' />
                            <img data-aos="fade-up-left" className="object-cover  w-full dark:bg-gray-500 aspect-square" src={moto3} alt='' />

                        </div>
                    </div>
                </div>
            </section>
            <div className="card hero container w-full mx-auto text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-4xl mb-4">Dish Detective</h2>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Explore a vast collection of traditional Indian food recipes, ranging from appetizers to desserts.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Learn about the best chefs in India, their stories, and their cooking techniques.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Discover the recipes and ingredients used by the top chefs in India.
                    </span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Get international reviews and ratings for various Indian food recipes and chefs.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Click on the recipe to view the details, including the list of ingredients and the cooking instructions.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Gather all the required ingredients and utensils.</span></p>
                    <p className='mb-2 text-xl'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: HTML, CSS, JavaScript, Tailwind, Daisy UI, React.js, React router, firebase, Nodejs.</p>
                    <div className="card-actions">
                        <a href="https://dish-detective.web.app/" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Live Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/sanad-bhowmik/DishDetective" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Client Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/sanad-bhowmik/dishdetective-server" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Server Site
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotoVintage;