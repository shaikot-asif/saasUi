import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { images } from "../../constants";
const Hero = () => {
  return (
    <div className=" z-10 relative mx-auto mt-[150px] overflow-hidden font-inter">
      <div className="flex gap-[20%]">
        <div className="max-w-[40%]">
          <div className=" w-[500px] ml-[64px]  mt-20 ">
            <h1 className="text-white text-[56px] font-extrabold leading-[67px]">
              Built beautiful software faster
            </h1>
            <p className="font-medium leading-[30px] text-[20px] w-[400px] mt-9 text-dark-textDarkLight">
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
            <div className="flex gap-10 align-middle text-center items-center">
              <button className="px-4 py-2 rounded-md bg-buttonColor hover:bg-hoverColor transition-all duration-500 cursor-pointer text-white leading-8 text-[16px] font-semibold">
                <a href="#" className="bg-inherit">
                  Sign Up
                </a>
              </button>
              <button className="flex items-center leading-8 text-dark-textDarkLight border w-[190px] px-4 py-2 hover:bg-[#292C2F] [&>span]:hover:left-2 duration-500 rounded-md justify-center align-middle text-center transition-all content-center gap-2">
                View demo
                <span className="duration-500 transition-all relative">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[600px] max-w-[40%] relative overflow-hidden h-[600px] left-[200px] scale-x-[2] z-10">
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
