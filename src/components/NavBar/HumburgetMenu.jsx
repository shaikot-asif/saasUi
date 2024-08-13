import React from "react";

const HumburgerMenu = ({ mobileMenu }) => {
  console.log(mobileMenu, "hamburger menu");
  return (
    <div
      className={`fixed transition-all duration-500 bg-black top-[60px] bg-opacity-80 left-0 bottom-0 text-center w-[100%] h-[100vh] z-50 `}
    >
      <ul className="md:hidden mt-10 flex flex-col  gap-8 md:bg-transparent md:flex-nowrap">
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

        <li className="bg-transparent cursor-pointer text-dark-textDarkLight leading-8 font-medium text-[13px] hover:text-white transition-all duration-500">
          <a className="bg-transparent" href="#">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HumburgerMenu;
