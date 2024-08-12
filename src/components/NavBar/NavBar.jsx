import React, { useEffect, useState } from "react";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset >= 100) {
      setScrolled(true);
      console.log(offset, "offser");
    } else {
      setScrolled(false);
    }
  };

  console.log(scrolled);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        scrolled
          ? "fixed top-0 left-0 right-0 bg-[#1d2025] opacity-75 z-20 w-[100%] h-[60px] transition-all duration-200 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div
        className={`fixed top-0 left-0 right-0 container bg-transparent z-50  max-w-[1280px] font-inter mx-auto my-4 flex flex-raw flex-nowrap justify-between `}
      >
        <div className="bg-transparent w-[6.4rem]">
          <a href="#" className="w-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 550 172"
              className="bg-transparent"
            >
              <path
                fill="#8952e0"
                d="M117.67 16.59h-54c-1.86 0-3.36 1.5-3.36 3.36V46.2c0 2.11-.89 4.11-2.46 5.52l-.1.09a7.438 7.438 0 0 1-4.96 1.9H20.24c-1.86 0-3.36 1.5-3.36 3.36v38.44c0 1.86 1.5 3.36 3.36 3.36h34.536V59.25c0-2.11.89-4.11 2.46-5.52a7.438 7.438 0 0 1 4.96-1.9h52.15c1.86 0 3.36-1.5 3.36-3.36V19.95a3.37 3.37 0 0 0-3.37-3.36z"
              ></path>
              <path
                fill="#8952e0"
                d="M117.67 72.78h-34.5c-1.86 0-3.36 1.5-3.36 3.36v36.27c0 2.11-.89 4.11-2.46 5.52a7.438 7.438 0 0 1-4.96 1.9H20.24c-1.86 0-3.36 1.5-3.36 3.36v28.56c0 1.86 1.5 3.36 3.36 3.36h54c1.86 0 3.36-1.5 3.36-3.36v-26.3c0-2.11.89-4.11 2.46-5.52l.1-.09a7.438 7.438 0 0 1 4.96-1.9h32.54c1.86 0 3.36-1.5 3.36-3.36V76.13a3.337 3.337 0 0 0-3.35-3.35z"
              ></path>
              <path
                fill="#fff"
                d="m221.7 58.08-5.35 10.82c-5.99-3.69-13.5-5.99-19.48-5.99-5.73 0-9.93 1.91-9.93 6.75 0 12.48 36.04 5.73 35.91 30.31 0 13.88-12.35 20.12-25.98 20.12-9.93 0-20.5-3.31-27.25-9.42l5.22-10.44c5.86 5.22 15.28 8.4 22.67 8.4 6.24 0 11.08-2.17 11.08-7.26 0-13.88-35.66-6.11-35.53-30.56 0-13.75 11.97-19.61 24.96-19.61 8.53 0 17.57 2.55 23.68 6.88zM277.38 111.31c-4.84 5.99-12.61 8.91-22.41 8.91-14.64 0-23.81-9.04-23.81-21.01 0-12.35 9.3-20.25 25.6-20.37h20.5V76.8c0-8.53-5.48-13.63-16.17-13.63-6.49 0-13.24 2.29-19.99 6.88l-5.98-10.19c9.42-5.6 16.3-8.53 29.16-8.53 17.45 0 27.25 8.91 27.38 23.81l.13 44.44H277.4v-8.27zm-.13-15.54v-6.24h-18.34c-9.55 0-14.01 2.55-14.01 9.04 0 6.11 4.97 10.06 13.12 10.06 10.45 0 18.47-5.47 19.23-12.86zM349.38 111.31c-4.84 5.99-12.61 8.91-22.41 8.91-14.64 0-23.81-9.04-23.81-21.01 0-12.35 9.3-20.25 25.6-20.37h20.5V76.8c0-8.53-5.48-13.63-16.17-13.63-6.49 0-13.24 2.29-19.99 6.88l-5.98-10.19c9.42-5.6 16.3-8.53 29.16-8.53 17.45 0 27.25 8.91 27.38 23.81l.13 44.44H349.4v-8.27zm-.12-15.54v-6.24h-18.34c-9.55 0-14.01 2.55-14.01 9.04 0 6.11 4.97 10.06 13.12 10.06 10.44 0 18.46-5.47 19.23-12.86zM425.59 58.08l-5.35 10.82c-5.99-3.69-13.5-5.99-19.48-5.99-5.73 0-9.93 1.91-9.93 6.75 0 12.48 36.04 5.73 35.91 30.31 0 13.88-12.35 20.12-25.98 20.12-9.93 0-20.5-3.31-27.25-9.42l5.22-10.44c5.86 5.22 15.28 8.4 22.67 8.4 6.24 0 11.08-2.17 11.08-7.26 0-13.88-35.66-6.11-35.53-30.56 0-13.75 11.97-19.61 24.96-19.61 8.53 0 17.57 2.55 23.68 6.88zM472.9 120.02c-8.55 0-15.12-2.22-19.51-6.6-4.39-4.37-6.62-10.91-6.62-19.43V51.87h8.8V88.6c0 8.73 1.31 14.71 4 18.28 2.71 3.59 7.28 5.41 13.59 5.41 6.3 0 10.85-1.8 13.52-5.35 2.65-3.52 3.93-9.52 3.93-18.34V51.87h8.54V94c0 8.56-2.22 15.1-6.61 19.46-4.39 4.35-11 6.56-19.64 6.56zM514.66 51.87h8.54v67.66h-8.54z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex gap-5 bg-transparent">
          <ul className="flex gap-8 bg-transparent flex-nowrap">
            <li className="bg-transparent cursor-pointer text-dark-textDarkLight leading-8 font-medium text-[13px] hover:text-white transition-all duration-500">
              <a className="bg-transparent" href="#">
                Features
              </a>
            </li>
            <li className="bg-transparent cursor-pointer text-dark-textDarkLight leading-8 font-medium text-[13px] hover:text-white transition-all duration-500">
              <a className="bg-transparent" href="#">
                Pricing
              </a>
            </li>
            <li className="bg-transparent cursor-pointer text-white leading-8 font-medium text-[13px]">
              <a className="bg-transparent" href="#">
                FAQ
              </a>
            </li>
            <li className="bg-transparent cursor-pointer text-dark-textDarkLight leading-8 font-medium text-[13px] hover:text-white transition-all duration-500">
              <a className="bg-transparent" href="#">
                Login
              </a>
            </li>
          </ul>

          <ul className="bg-transparent flex gap-x-3">
            <li className="px-3 rounded-md bg-buttonColor hover:bg-hoverColor transition-all duration-500 cursor-pointer text-white leading-8 text-[13px] ">
              <a href="#" className="bg-inherit">
                Sign Up
              </a>
            </li>
            <li className="bg-transparent flex justify-center mt-2">
              <a className="bg-transparent" href="#">
                {/* <CiDark className="text-xl size-4 text-white" /> */}
                <CiLight className="bg-transparent text-xl size-5 text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
