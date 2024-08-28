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
                <h2 className="card-title text-4xl mb-4">Amader Bazar</h2>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Browse a wide range of products, including electronics, fashion, groceries, and more.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Enjoy a user-friendly interface for a smooth online shopping experience.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Take advantage of various discounts and offers available on different products.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Access customer reviews and ratings to make informed purchasing decisions.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Experience secure payment methods and reliable delivery services.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span> Contact customer support for any inquiries or assistance needed during your shopping.</span></p>
                    <p className='mb-2 text-xl'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: PHP, Laravel, HTML, CSS, JavaScript, Tailwind, Livewire, SQL.</p>
                    <div className="card-actions">
                        <a href="https://www.amaderbazar.net/" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Live Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/sanad-bhowmik/AmaderBazar" target="_blank" rel="noopener noreferrer">

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Github
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