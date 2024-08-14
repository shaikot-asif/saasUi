import React from "react";

const LovePeopleCard = ({ avatar, name, title, text }) => {
  return (
    <div className=" bg-[#25272A] p-[18px] rounded-md  flex flex-col gap-8 border border-[#2D3032]">
      <div className="flex flex-row gap-4 items-center">
        <img className="h-12 rounded-full w-12" src={avatar} alt={name} />

        <div className="flex flex-col gap-0">
          <h3 className="text-white font-inter font-medium text-[16px] leading-6">
            {name}
          </h3>
          <p className="text-dark-textDarkLight font-normal text-sm font-inter">
            {title}
          </p>
        </div>
      </div>
      <div>
        <p className="font-normal font-inter leading-5 text-white text-[13px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LovePeopleCard;
