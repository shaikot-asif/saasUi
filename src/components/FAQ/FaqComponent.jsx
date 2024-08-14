import React from "react";

const FaqComponent = ({ title, text }) => {
  return (
    <div>
      <h2 className="leading-6 text-[16px] text-white font-inter font-semibold ">
        {title}
      </h2>
      <p className=" text-dark-textDarkLight leading-6 font-inter font-normal text-[16px]">
        {text}
      </p>
    </div>
  );
};

export default FaqComponent;
