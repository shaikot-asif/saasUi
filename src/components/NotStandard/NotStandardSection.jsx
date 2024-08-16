import React from "react";
import textTitle from "../../constants/text.js";
import ATCP from "../ATCP/ATCP.jsx";

const NotStandardSection = () => {
  return (
    <div>
      <div className="container w-[80%] m-auto mb-[100px] sm:mb-[200px]">
        <div className="lg:w-[68%]">
          <h2 className="font-inter font-bold leading-10 text-[30px] text-white">
            Not your standard <br /> dashboard template.
          </h2>
          <p className="mt-6 mb-28 font-normal text-dark-textDarkLight sm:leading-8 sm:text-[22px]">
            Saas UI Pro includes everything you need to build modern frontends.
            Use it as a template for your next product or foundation for your
            design system.
          </p>
        </div>
        <div className="flex flex-wrap flex-col sm:flex-row sm:gap-10">
          {textTitle.map((item, index) => (
            <div key={index} className={" sm:w-[45%] mb-5 lg:w-[30%]"}>
              <ATCP
                parentClasses={"flex gap-4 items-center"}
                icon={item.icon}
                paragraph={item.text}
                bTitle={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotStandardSection;
