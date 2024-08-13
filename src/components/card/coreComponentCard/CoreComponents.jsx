import React from "react";

const CoreComponents = ({ title, text, arrOfTags, tag }) => {
  return (
    <div>
      <div className="h-[300px] my-auto mx-auto flex flex-col gap-9 shadow-xl bg-dark-cardBackground p-[32px] rounded-md">
        <div>
          <h3 className="text-white font-inter font-bold leading-7 text-[24px]">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-dark-textDarkLight  font-inter font-normal leading-7 text-[16px]">
            {text}
          </p>
        </div>
        <div>
          {arrOfTags ? (
            <div className="flex flex-row gap-x-3 gap-y-2 mt-[-24px] flex-wrap font-inter">
              {arrOfTags.map((item, index) => (
                <span
                  className="text-[13px] text-[#d3bef4] leading-4 font-medium bg-[#3A3A46] px-4 py-1 rounded-full "
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <div>
              <p className="font-inter mt-[-7px] w-[250px] p-3 rounded-full pl-7 bg-dark-backgroundDarkHard text-[#fbc434] leading-7 text-[16px] font-normal ">
                {tag}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreComponents;
