import React from "react";
import { FaCheck } from "react-icons/fa6";

const PriceCardComponent = ({
  title,
  text,
  money,
  iconClr = false,
  arrOfIconText,
  parentClass,
  anotherTag,
}) => {
  return (
    <div>
      <div
        className={`${parentClass} ${
          iconClr && "border-purpleLight"
        } font-inter container bg-dark-cardBackground p-8 border border-[#2D3032]  rounded-lg m-11`}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-[16px] leading-5       ">
            {title}
          </h3>
          <p className="text-dark-textDarkLight font-normal text-[16px] leading-6   ">
            {text}
          </p>
          <h3 className="text-white font-bold my-2 leading-7 text-[20px]">
            {typeof money === "number" ? (
              <div>
                <span className="text-[12px] line-through text-dark-textDarkLight ">
                  ${money}.
                </span>
                <span> ${money}</span>
              </div>
            ) : (
              money
            )}
          </h3>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          {arrOfIconText?.map((item, index) => (
            <div className="flex flex-row items-center gap-2" key={index}>
              <span>
                <FaCheck className="text-[14px] text-purpleLight" />
              </span>{" "}
              <p className="text-white text-[13px] leading-5 font-normal ">
                {item}
              </p>
            </div>
          ))}

          {anotherTag &&
            anotherTag.map((item, index) => (
              <div className="flex flex-row items-center gap-2" key={index}>
                <span>
                  <FaCheck className="text-[14px] text-blue-800" />
                </span>{" "}
                <p className="text-white text-[13px] leading-5 font-normal ">
                  {item}
                </p>
              </div>
            ))}
        </div>
        <button className="py-2 px-3 rounded-md transition-all duration-500 hover:bg-hoverColor bg-buttonColor mt-10 text-white font-semibold leading-4 text-[13px] ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PriceCardComponent;
