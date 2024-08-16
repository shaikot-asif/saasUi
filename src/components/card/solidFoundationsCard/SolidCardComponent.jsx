import React from "react";

const SolidCardComponent = ({
  avatar,
  title,
  name,
  text,
  classes,
  parentClasses,
}) => {
  return (
    <div
      className={` bg-dark-cardBackground lg:h-[300px] shadow-lg p-10 gap-9 flex flex-col justify-stretch rounded-md ${parentClasses}`}
    >
      <div>
        {avatar && name ? (
          <div className="flex flex-row gap-5">
            <div className="w-12 h-12 rounded-full">
              <img
                className="rounded-full w-[100%] h-[100%]"
                src={avatar}
                alt={name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-inter text-white leading-6 font-semibold">
                {name}
              </h3>
              <p className="font-normal font-inter leading-5 text-sm text-white">
                {title}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-inter font-bold leading-7 text-[24px] text-white">
              {title}
            </h2>
          </div>
        )}
      </div>
      <div>
        <p
          className={`text-dark-textDarkLight font-inter font-normal leading-6 text-[16px] ${classes}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default SolidCardComponent;
