import React from "react";
import "./Projects.css";
import project1 from "../../Assets/Projects/Moto/4.png";
import project2 from "../../Assets/Projects/Shutter/1.png";
import project3 from "../../Assets/Projects/CoureseGuru/1.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="project">
      <div className="">
        <div className="hero min-h-full py-32 text-white container w-full mx-auto ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div>
              <h1 className="text-6xl font-bold text-center heading mb-4">
                My Recent <span className="title"> Works</span>{" "}
              </h1>
              <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                  <div
                    data-aos="fade-up-right"
                    className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
                  >
                    <img
                      src={project1}
                      alt=""
                      className="h-80 dark:bg-gray-500 aspect-video"
                    />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                      <h3 className="text-3xl font-bold">Amader Bazar</h3>
                      <p className="my-6 dark:text-gray-400">
                        AmaderBazar.net is a comprehensive online marketplace in
                        Bangladesh, providing a diverse selection of products,
                        from electronics to fashion, groceries, and more, aiming
                        to offer a convenient and reliable shopping experience
                        for customers across the country.
                      </p>
                      <p className="mb-2">
                        𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: PHP, Laravel, HTML, CSS, JavaScript,
                        Tailwind, Livewire, SQL.
                      </p>
                      <div>
                        <Link to="/motovintage">
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              View Details
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-left"
                    className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
                  >
                    <img
                      src={project2}
                      alt=""
                      className="h-80 dark:bg-gray-500 aspect-video"
                    />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                      <h3 className="text-3xl font-bold">F & S BD</h3>
                      <p className="my-6 dark:text-gray-400">
                        The website "fnsbd.shop" is an e-commerce platform
                        offering a wide range of fashion, lifestyle, and other
                        consumer products, providing customers with an easy and
                        convenient online shopping experience.
                      </p>
                      <p className="mb-2">
                        𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: PHP, Laravel, HTML, CSS, JavaScript,
                        Tailwind, Livewire, SQL.
                      </p>
                      <div>
                        <Link to="/shutterup">
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              View Details
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-right"
                    className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
                  >
                    <img
                      src={project3}
                      alt=""
                      className="h-80 dark:bg-gray-500 aspect-video"
                    />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                      <h3 className="text-3xl font-bold">All House Work's</h3>
                      <p className="my-6 dark:text-gray-400">
                        Ahw.playon24.com.bd is a specialized platform offering a
                        comprehensive suite of services, including advanced
                        digital solutions, interactive tools, and tailored
                        support for businesses seeking to enhance their online
                        presence and operational efficiency.
                      </p>
                      <p className="mb-2">
                        𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: PHP, Laravel, HTML, CSS, JavaScript,
                        Tailwind, Livewire, SQL.
                      </p>
                      <div>
                        <Link to="/courseguru">
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              View Details
                            </span>
                          </button>
                        </Link>
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
