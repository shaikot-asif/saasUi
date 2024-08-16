import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { images } from "../../constants";
const Hero = () => {
  return (
    <div className="  z-10 relative md:mx-auto sm:mt-[150px] overflow-hidden font-inter">
      <div className=" lg:flex gap-[20%]">
        <div className="container w-[100%] lg:max-w-[40%]">
          <div className=" lg:w-[500px] px-5 sm:ml-[64px]  mt-20 ">
            <h1 className="text-white text-[32px] sm:text-[56px] font-extrabold md:leading-[67px]">
              Built beautiful software faster
            </h1>
            <p className="font-medium sm:leading-[30px] text-[12px]  sm:text-[20px] sm:w-[400px] mt-9 text-dark-textDarkLight">
              Saas UI is a{" "}
              <span className="text-white">React component library</span> that
              doesn't get in your way and helps you build intuitive SaaS
              products with speed.
            </p>

            <div className="flex align-middle gap-5 my-5">
              <img className="w-10 h-10" src={images.react} alt="React" />
              <img
                className="w-10 h-10"
                src={images.Tailwind}
                alt="tailwindCss"
              />
            </div>
            <div className="flex gap-2 sm:gap-10 align-middle text-center items-center">
              <button className="px-4 py-2 rounded-md bg-buttonColor hover:bg-hoverColor transition-all duration-500 cursor-pointer text-white leading-8 sm:text-[16px] sm:font-semibold">
                <a href="#" className="bg-inherit">
                  Sign Up
                </a>
              </button>
              <button className="flex items-center leading-8 text-dark-textDarkLight border sm:w-[190px] px-4 py-2 hover:bg-[#292C2F] [&>span]:hover:left-2 duration-500 rounded-md justify-center align-middle text-center transition-all content-center gap-2">
                View demo
                <span className="duration-500 transition-all relative">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:block w-[600px] max-w-[40%] relative overflow-hidden h-[600px] hidden left-[200px] scale-x-[2] z-10">
          <img
            className="w-[100%] h-[100%]"
            src={images.vsc}
            alt="visual studio code"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
