import React from 'react';
import './Banner.css'
import profile1 from '../../../Assets/profile1.png'


const Banner = () => {
    return (
        <div >
            <div className="hero min-h-full  text-white container w-full mx-auto "
            >
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={profile1} alt='' className="h-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl font-bold heading">Biplob Kumer Ghosh</h1>
                        <p className="py-6 heading text-2xl " >MERN Stack Developer</p>
                        <p className="py-6  text-xl " >I'm passionate MERN Stack web developer having an experience of web applications. <br />
                            My field of Interest's are building new  Web Technologies and Products and also in areas related to Artificial Intelligence.
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products with Node.js ,ExpressJS,MongoDB and Modern Javascript Library and Frameworks  like React.js
                        </p>
                        <a href="Biplob_Resume.pdf">
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    RESUME
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;