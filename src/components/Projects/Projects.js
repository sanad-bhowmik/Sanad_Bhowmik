import React from 'react';
import './Projects.css'
import project1 from '../../Assets/project1.png'
import project2 from '../../Assets/project2.png'
import project3 from '../../Assets/project3.png'

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
                                            <h3 className="text-3xl font-bold">Moto Vintage</h3>
                                            <p className="my-6 dark:text-gray-400">Moto Vintage is an E-commerce website with a lot of functions.
                                                Buyers can purchase products and Sellers can add new products.
                                                Admin can delete buyer's and seller's accounts and also can delete reported items.</p>
                                            <p className='mb-2'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: HTML, CSS, Tailwinds,daisyUI,React.js, Firebase, React Router,Node.js, ExpressJS,
                                                MongoDB</p>
                                            <div>
                                                <a href="https://moto-vintage.web.app/" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Live Site
                                                        </span>
                                                    </button>
                                                </a>
                                                <a href="https://github.com/biplob2358/moto-vintage-client" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Client Site
                                                        </span>
                                                    </button>
                                                </a>
                                                <a href="https://github.com/biplob2358/moto-vintage-server" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Server Site
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up-left" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                                        <img src={project2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                                            <h3 className="text-3xl font-bold">
                                                Shutter Up</h3>
                                            <p className="my-6 dark:text-gray-400"> Shutter Up is a photographic website that offers some photography packages.
                                                The user can see the package's details and previous reviews.
                                                After login, the user can give a review and also add new packages that will show on the home page.</p>
                                            <p className='mb-2'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: HTML,CSS, Tailwinds,daisyUI, React.js, React Router, Firebase, Node.js, ExpressJS,
                                                MongoDB.</p>
                                            <div>
                                                <a href="https://shutter-up-cadac.web.app/" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Live Site
                                                        </span>
                                                    </button>
                                                </a>
                                                <a href="https://github.com/biplob2358/shutter-up-server" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Client Site
                                                        </span>
                                                    </button>
                                                </a>
                                                <a href="https://github.com/biplob2358/shutter-up-client" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Server Site
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up-right" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                        <img src={project3} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                            <h3 className="text-3xl font-bold">
                                                COURSE GURU</h3>
                                            <p className="my-6 dark:text-gray-400">Course Guru is an Educational Website that includes some courses.
                                                The user can choose a subject, view details, and can download the course summary in pdf format.
                                                The user can get premium access but the user must be sign in.</p>
                                            <p className='mb-2'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: HTML, CSS, Bootstrap, React. js, React Router, React Bootstrap, Firebase, Node. js, ExpressJS</p>
                                            <div>
                                                <a href="https://course-guru-94acd.web.app/" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Live Site
                                                        </span>
                                                    </button>
                                                </a>
                                                <a href="https://github.com/biplob2358/course-guru-client" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Client Site
                                                        </span>
                                                    </button>
                                                </a>
                                                <a href="https://github.com/biplob2358/course-guru-server" target="_blank" rel="noopener noreferrer">

                                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Sever Site
                                                        </span>
                                                    </button>
                                                </a>

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