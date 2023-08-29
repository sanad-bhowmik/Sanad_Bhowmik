import React from 'react';
import './Experence.css';
import logo from '../../Assets/experence.png'
const Experence = () => {
    return (
        <div data-aos="zoom-in" className='mb-12 hero container w-full mx-auto'>
            <div className="min-h-full py-32 text-white">
                <h1 className="text-6xl font-bold text-center heading mb-4">
                    Exp<span className='title'>erience</span>
                </h1>
                <section className="container">
                    <section className="card__container">
                        <div className="card__bx card__1">
                            <div className="card__data first">
                                <div className="card__icon">
                                    <div className="card__icon-bx">
                                        <img src="https://playon24.com.bd/img/logo.png" alt="" />
                                    </div>
                                </div>
                                <div className="card__content">
                                    <h3 id='title'>Software Engineer</h3>
                                    <h4 id='company'><a href="https://playon24.com.bd/" target='_blank' style={{color: 'white'}}>PlayOn24 || 2023</a></h4>
                                    <h4 id='company'> Mohammadpur, Dhaka</h4>
                                </div>
                            </div>
                        </div>

                        {/* <div className="card__bx card__2">
                            <div className="card__data">
                                <div className="card__icon">
                                    <div className="card__icon-bx"><i className="fa-solid fa-code"></i></div>
                                </div>
                                <div className="card__content">
                                    <h3>Development</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="card__bx card__3">
                            <div className="card__data">
                                <div className="card__icon">
                                    <div className="card__icon-bx"><i className="fa-solid fa-rocket"></i></div>
                                </div>
                                <div className="card__content">
                                    <h3>Launch</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div> */}
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Experence;