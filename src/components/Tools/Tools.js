import React from "react";
import "../Tools/Tools.css";
import "../Navbar/Banner/Banner.css";
import vscode from "../../Assets/icons/vscode.png";
import postman from "../../Assets/icons/postman.png";
import cpanel from "../../Assets/icons/cpanel.png";
import figma from "../../Assets/icons/figma.png";
import git from "../../Assets/icons/git.png";
import remote from "../../Assets/icons/remote.png";
import netlify from "../../Assets/icons/netlify.png";
import canva from "../../Assets/icons/canva.png";

const Tools = () => {
  return (
    <div data-aos="zoom-in">
      <div className="mb-12 hero container w-full mx-auto">
        <div className="min-h-full py-32 text-white">
          <h1 className="text-6xl font-bold text-center heading mb-4">
            Too<span className="title">ls</span>
          </h1>
          <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col">
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "1000ms" }}
            >
              <figure>
                <img
                  className="rounded-xl h-32 pt-10"
                  src={vscode}
                  alt="laravel"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">VS Code</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={postman} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Postman</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={cpanel} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">CPanel</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={figma} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Figma</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={git} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Git</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={remote} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Remote</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={netlify} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Netlify</h2>
              </div>
            </div>
            <div
              className="card card-compact w-64 border shadow-xl hover:bg-white hover:text-black transition-colors duration-500 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <figure>
                <img className="rounded-xl h-32 pt-10" src={canva} alt="Php" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Canva</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
