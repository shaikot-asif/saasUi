import React from "react";
import priceCardContents from "../../constants/priceCardContent";
import PriceCardComponent from "./priceCardComponent/PriceCardComponent";

const PriceCard = () => {
  return (
    <div className="mb-[100px] sm:mb-[200px]">
      <div
        className={` w-[100%] h-[100%] overflow-hidden relative  opacity-70 bg-[radial-gradient(at_top_left,_#4f1d9e_30%,_transparent_80%),_radial-gradient(at_bottom,_#2ab4d9_0%,_transparent_60%),_radial-gradient(at_bottom_left,_#2ab4d9_0%,_transparent_50%),_radial-gradient(at_top_right,_#1d979e,_transparent),_radial-gradient(at_bottom_right,_#4f1d9e_0%,_transparent_50%)] bg-blend-saturation`}
      >
        <div className=" bg-[linear-gradient(0deg,_#171a1d_60%,_transparent_100%)]">
          <div>
            <h2 className="font-bold font-inter leading-9 text-white mt-[100px] text-[26px] sm:text-[30px] text-center">
              Pricing for every stage
            </h2>
            <p className="leading-7 sm:text-[20px] font-inter font-normal text-dark-textDarkLight text-center pt-4 pb-8 ">
              Pay once and get life-time access to our high quality components.
            </p>
          </div>
          <div className=" flex w-[90%] flex-col lg:flex-row  gap-4 flex-wrap mx-auto justify-center ">
            {priceCardContents.map((item, index) => (
              <PriceCardComponent
                text={item.text}
                title={item.title}
                money={item.money}
                iconClr={item.iconClr}
                arrOfIconText={item.tags}
                anotherTag={item.anotherTag}
                key={index}
                parentClass={" sm:w-[50%]  sm:m-auto lg:w-[25%]"}
              />
            ))}
          </div>
          <p className="mt-[25px] w-[90%] mx-auto text-center font-normal font-inter leading-6 text-[16px] text-dark-textDarkLight">
            VAT may be applicable depending on your location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
