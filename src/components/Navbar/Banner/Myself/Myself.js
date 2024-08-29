import React from "react";
import coder from "../../../../Assets/coder.gif";
import linkedin from "../../../../Assets/icons/linkedin.png";
import github from "../../../../Assets/icons/github.png";
import facebook from "../../../../Assets/icons/facebook.png";
import insta from "../../../../Assets/icons/insta.png";
import mail from "../../../../Assets/icons/gmail.png";
import "./Myself.css";

const Myself = () => {
  return (
    <div
      id="about"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="mb-12">
        <div className="hero min-h-full py-32 text-white container w-full mx-auto ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img src={coder} alt="" className="h-96 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-6xl font-bold heading">
                LET ME <span className="title">INTRODUCE</span> MYSELF
              </h1>
              <p className="py-6 text-xl">
                I'm a passionate PHP Laravel developer with extensive experience
                in building dynamic and robust web applications. <br />
                My areas of interest include developing scalable and secure web
                solutions, and I’m particularly enthusiastic about working with
                the Laravel framework and its ecosystem. <br />
                Whenever possible, I apply my expertise in crafting efficient
                and maintainable code using Laravel, along with modern front-end
                technologies and tools.
              </p>

              <div className="text-center">
                <h3 className="text-3xl font-bold">FIND ME ON</h3>
                <p>
                  Feel free to <span className="title font-bold">connect</span>{" "}
                  with me
                </p>
                <div className="flex  w-full justify-center mt-5  gap-6 mx-auto">
                  <a
                    href="https://www.linkedin.com/in/sanad-bhowmik-366b20199/"
                    target="_blank"
                  >
                    <img className="h-12" src={linkedin} alt="" />
                  </a>
                  <a href="https://github.com/sanad-bhowmik">
                    <img className="h-12" src={github} alt="" target="_blank" />
                  </a>
                  <a
                    href="https://www.facebook.com/sonod.bhoumik"
                    target="_blank"
                  >
                    <img className="h-12" src={facebook} alt="" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img className="h-12" src={insta} alt="" target="_blank" />
                  </a>
                  <a href="mailto:sanadbhowmik93@gmail.com">
                    <img className="h-12" src={mail} alt="Email Icon" />
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
