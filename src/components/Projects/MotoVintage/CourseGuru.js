import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import Header from "../../Header/Header";
import course1 from "../../../Assets/Projects/CoureseGuru/1.png";
import course2 from "../../../Assets/Projects/CoureseGuru/2.png";
import course3 from "../../../Assets/Projects/CoureseGuru/4.png";

const CourseGuru = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <Header />
      <section className="pt-6 w-full mx-auto dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
              <img
                onClick={() => openModal(course1)}
                data-aos="fade-up-right"
                className="object-cover w-full dark:bg-gray-500 cursor-pointer"
                src={course1}
                alt=""
                title="Click for full image"
              />
              <img
                onClick={() => openModal(course2)}
                data-aos="flip-down"
                className="object-cover w-full dark:bg-gray-500 cursor-pointer"
                src={course2}
                alt=""
                title="Click for full image"
              />
              <img
                onClick={() => openModal(course3)}
                data-aos="fade-up-left"
                className="object-cover w-full dark:bg-gray-500 cursor-pointer"
                src={course3}
                alt=""
                title="Click for full image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="card hero container w-full mx-auto text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl mb-4">All House Works</h2>
          <p className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            <span>
              Discover a range of services and solutions tailored for managing
              and enhancing various aspects of housework.
            </span>
          </p>
          <p className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            <span>
              Access professional support and tools for efficient home
              management and maintenance.
            </span>
          </p>
          <p className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            <span>
              Utilize comprehensive services for organizing, cleaning, and
              maintaining your home environment.
            </span>
          </p>
          <p className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            <span>
              Benefit from user-friendly interfaces and responsive support for a
              seamless experience.
            </span>
          </p>
          <p className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            <span>
              Explore detailed options and personalized services to fit your
              home management needs.
            </span>
          </p>
          <p className="flex">
            <span className="mr-2">
              <FaHandPointRight />
            </span>
            <span>
              Contact customer support for assistance with any service-related
              queries or issues.
            </span>
          </p>

          <p className="mb-2 text-xl">
            𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐔𝐬𝐞𝐝: PHP, Laravel, HTML, CSS, JavaScript, Tailwind,
            Livewire, SQL.
          </p>
          <div className="card-actions">
            <a
              href="https://www.amaderbazar.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Live Site
                </span>
              </button>
            </a>
            <a
              href="https://github.com/sanad-bhowmik/AmaderBazar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Github
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              className="max-w-full max-h-full"
              src={modalImage}
              alt="Enlarged"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black text-white rounded-full p-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseGuru;
