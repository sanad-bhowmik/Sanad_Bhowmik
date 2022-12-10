import React from 'react';
import coder from '../../../../Assets/coder.gif'
import linkedin from '../../../../Assets/icons/linkedin.png'
import github from '../../../../Assets/icons/github.png'
import facebook from '../../../../Assets/icons/facebook.png'
import insta from '../../../../Assets/icons/insta.png'

const Myself = () => {
    return (
        <div id='about' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className='mb-12' >
                <div className="hero min-h-full py-32 text-white container w-full mx-auto "
                >
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <img src={coder} alt='' className="h-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-6xl font-bold heading">LET ME <span className='title'>INTRODUCE</span> MYSELF</h1>
                            <p className="py-6  text-xl " >I'm passionate MERN Stack web developer having an experience of web applications. <br />
                                My field of Interest's are building new  Web Technologies and Products and also in areas related to Artificial Intelligence.
                                <br />

                                Whenever possible, I also apply my passion for developing products with Node.js, ExpressJS,MongoDB and Modern Javascript Library and Frameworks  like React.js
                            </p>
                            <div className='text-center'>
                                <h3 className='text-3xl font-bold'>FIND ME ON</h3>
                                <p>Feel free to <span className='title font-bold'>connect</span> with me</p>
                                <div className='flex  w-full justify-center mt-5  gap-2 mx-auto'>
                                    <a href="https://www.linkedin.com/in/biplob971/" >
                                        <img className='h-8' src={linkedin} alt="" />
                                    </a>
                                    <a href="https://github.com/biplob2358" >
                                        <img className='h-8' src={github} alt="" />
                                    </a>
                                    <a href="https://www.facebook.com/biplob.971/" >
                                        <img className='h-8' src={facebook} alt="" />
                                    </a>
                                    <a href="https://www.w3schools.com" >
                                        <img className='h-8' src={insta} alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Myself;