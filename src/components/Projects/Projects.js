import React from 'react';
import './Projects.css'
import project1 from '../../Assets/Projects/Moto/4.png'
import project2 from '../../Assets/Projects/Shutter/1.png'
import project3 from '../../Assets/Projects/CoureseGuru/1.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='project'>
            <div className='' >
                <div className="hero min-h-full py-32 text-white container w-full mx-auto "
                >
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <div>
                            <h1 className="text-6xl font-bold text-center heading mb-4">My Recent <span className='title'> Works</span> </h1>
                            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                                <div className="container mx-auto space-y-12">
                                    <div data-aos="fade-up-right" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                        <img src={project1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                            <h3 className="text-3xl font-bold">Dish Detective</h3>
                                            <p className="my-6 dark:text-gray-400">Dish Detective is a chef’s website where you can see Indian popular chefs and their recipe and
                                                ingredient. Recipe list available and click on the recipe to view details include ingredients and cooking
                                                instructions.</p>
                                            <p className='mb-2'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: HTML, CSS, JavaScript, Tailwind, Daisy UI, React.js, React router, firebase, Nodejs.</p>
                                            <div>
                                                <Link to='/motovintage'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                        View Details
                                                    </span>
                                                </button></Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up-left" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                                        <img src={project2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                                            <h3 className="text-3xl font-bold">
                                                Sangeet Sadhana</h3>
                                            <p className="my-6 dark:text-gray-400">Music school where user can book class and also see the instructor of the class. There are different
                                                dashboard for admin, students, instructors</p>
                                            <p className='mb-2'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝:HTML, CSS, JavaScript, Tailwind, Daisy UI, React.js, React router, firebase, Nodejs,
                                                Mongodb, stripeJS.</p>
                                            <div>
                                                <Link to='/shutterup'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                        View Details
                                                    </span>
                                                </button></Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up-right" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                        <img src={project3} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                            <h3 className="text-3xl font-bold">
                                            Toylandia</h3>
                                            <p className="my-6 dark:text-gray-400">A visually Stunning website that enchants toy enthusiasts with its captivating design. Explore a vast
                                                collection of toys and personalized features.
                                                The user can get premium access but the user must be sign in.</p>
                                            <p className='mb-2'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: HTML, CSS, JavaScript, Tailwind, Daisy UI, React.js, React router, firebase, Nodejs,
                                                Mongodb.</p>
                                            <div>
                                                <Link to='/courseguru'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                        View Details
                                                    </span>
                                                </button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;