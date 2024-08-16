import React from "react";

const ATCP = ({ icon, title, paragraph, classes, parentClasses, bTitle }) => {
  return (
    <div className={`${parentClasses} `}>
      <div className="h-8 w-8 bg-purpleLight bg-opacity-20 relative rounded-full">
        <img
          className="w-4 h-4 m-auto absolute top-0 left-0 bottom-0 right-0"
          src={icon}
          alt=""
        />
        <div className="relative bg-[#a379e7] w-8 h-8 rounded-full bg-opacity-30"></div>
      </div>
      <div className={`${classes}`}>
        <div>
          <h3 className="font-inter text-[16px] font-bold text-white leading-5">
            {title}
          </h3>
        </div>
        <div>
          <p className="font-normal leading-6 text-[16px] font-inter text-dark-textDarkLight">
            {bTitle
              ? [<span className="text-white">{bTitle}</span>]
              : paragraph}{" "}
            {bTitle && paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ATCP;
