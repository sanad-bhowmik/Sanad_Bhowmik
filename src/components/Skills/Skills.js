import React from 'react';
import '../Navbar/Banner/Banner.css';
import js from '../../Assets/icons/JS.png';
import react from '../../Assets/icons/react.png';
import node from '../../Assets/icons/node.png';
import express from '../../Assets/icons/express.png';
import mongo from '../../Assets/icons/mongo.png';
import firebase from '../../Assets/icons/firebase.png';
import tailwinds from '../../Assets/icons/tailwind.png';
import bootstrap from '../../Assets/icons/bootstrap.png';
import html from '../../Assets/icons/html.png';
import css from '../../Assets/icons/css.png';
import jwt from '../../Assets/icons/jwt.png';
import './Skill.css'

const Skills = () => {
  return (
    <div data-aos="zoom-in">
      <div className='mb-12 hero container w-full mx-auto'>
        <div className='min-h-full py-32 text-white'>
          <h1 className="text-6xl font-bold text-center heading mb-4">
            My <span className='title'>Skills</span>
          </h1>
          <div className='gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col'>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in">
              <figure>
                <img className='rounded-xl h-32 pt-10' src={react} alt="React" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">React</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '100ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={node} alt="Node.js" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Node.js</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '200ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={express} alt="Express.js" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Express.js</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '300ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={mongo} alt="MongoDB" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">MongoDB</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '400ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={firebase} alt="Firebase" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Firebase</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '500ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={js} alt="JavaScript" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">JavaScript</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '600ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={tailwinds} alt="Tailwind CSS" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Tailwind CSS</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '700ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={bootstrap} alt="Bootstrap" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Bootstrap</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '800ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={html} alt="HTML" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">HTML</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '900ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={css} alt="CSS" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">CSS</h2>
              </div>
            </div>
            <div className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in" style={{ animationDelay: '1000ms' }}>
              <figure>
                <img className='rounded-xl h-32 pt-10' src={jwt} alt="JWT" />
              </figure>
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
