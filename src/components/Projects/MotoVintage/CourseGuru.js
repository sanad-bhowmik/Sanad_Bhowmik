import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import Header from '../../Header/Header';
import course1 from '../../../Assets/Projects/CoureseGuru/1.png'
import course2 from '../../../Assets/Projects/CoureseGuru/2.png'
import course3 from '../../../Assets/Projects/CoureseGuru/4.png'

const CourseGuru = () => {
    return (
        <div>
            <Header></Header>
            <section className="pt-6 w-full mx-auto dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                        <img data-aos="fade-up-right" className="object-cover w-full dark:bg-gray-500 aspect-square" src={course1} alt='' />
                        <img data-aos="flip-down" className="object-cover w-full dark:bg-gray-500 aspect-square" src={course2} alt='' />
                        <img data-aos="fade-up-left" className="object-cover w-full dark:bg-gray-500 aspect-square" src={course3} alt='' />

                    </div>
                </div>
            </section>
            <div className="card hero container w-full mx-auto text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-4xl mb-4">Toy Landia</h2>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>The website features a well-designed and intuitive interface, making it easy for users to navigate through different sections such as Home, All Toys, Blogs, My Toys, and Add A Toy.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>The website offers a secure login system, allowing users to log in using their email/password or Google Sign-in options. It also provides a link to the registration page for new users. Relevant error messages are displayed for any issues encountered during login or registration.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>The home page includes a banner section showcasing a slider or meaningful content, grabbing the user's attention. A gallery section with attractive pictures creates visual appeal, while the shop by category section allows users to explore toys based on different categories and sub-categories.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>The website provides informative blogs answering questions on various topics such as access tokens, SQL vs. NoSQL databases, Express.js, Nest.js, and MongoDB aggregate. These blogs are presented in a dedicated section, offering valuable insights to the users.</span></p>
                    <p className='flex'> <span className='mr-2'><FaHandPointRight></FaHandPointRight> </span> <span>Users can view all toys added by other users in a tabular form on this page. Each row displays toy information including the seller name (if available), toy name, sub-category, price, and available quantity. Non-logged-in users are prompted to log in when they click the view details button. The page also includes a search functionality based on toy names for easy toy discovery.
                    </span></p>
                    <p className='mb-2 text-xl'>𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝:HTML, CSS, JavaScript, Tailwind, Daisy UI, React.js, React router, firebase, Nodejs,
                        Mongodb.</p>
                    <div className="card-actions">
                        <a href="https://toylandia-d1d02.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Live Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/sanad-bhowmik/toylandia-client" target="_blank" rel="noopener noreferrer">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Client Site
                                </span>
                            </button>
                        </a>
                        <a href="https://github.com/sanad-bhowmik/Toylandia-server" target="_blank" rel="noopener noreferrer">

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
    );
};

export default CourseGuru;