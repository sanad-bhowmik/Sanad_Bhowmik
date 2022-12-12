import React from 'react';
import '../Navbar/Banner/Banner.css'
import js from '../../Assets/icons/JS.png'
import react from '../../Assets/icons/react.png'
import node from '../../Assets/icons/node.png'
import express from '../../Assets/icons/express.png'
import mongo from '../../Assets/icons/mongo.png'
import firebase from '../../Assets/icons/firebase.png'
import tailwinds from '../../Assets/icons/tailwind.png'
import bootstrap from '../../Assets/icons/bootstrap.png'
import html from '../../Assets/icons/html.png'
import css from '../../Assets/icons/css.png'
import jwt from '../../Assets/icons/jwt.png'

const Skills = () => {
    return (
        <div data-aos="zoom-in">

            <div className='mb-12 hero container  w-full mx-auto' >


                <div className=" min-h-full py-32 text-white  ">
                    <h1 className="text-6xl font-bold text-center heading mb-4">My <span className='title'> Skills</span> </h1>
                    <div className='gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col' >

                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={react} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">React</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={node} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Node Js</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={express} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Express Js</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={mongo} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Mongo DB</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={firebase} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Firebase</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={js} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Javascript</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={tailwinds} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Tailwinds CSS</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={bootstrap} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">Bootstrap</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={html} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">HTML</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={css} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">CSS</h2>

                            </div>
                        </div>
                        <div className="card card-compact w-64 border shadow-xl">
                            <figure><img className=' rounded-xl h-32 pt-10' src={jwt} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-center">JWT</h2>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;