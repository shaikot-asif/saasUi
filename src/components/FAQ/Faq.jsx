import React from "react";
import faq from "../../constants/faq";
import FaqComponent from "./FaqComponent";

const Faq = () => {
  return (
    <div className="font-inters mb-[100px] sm:mb-[200px]">
      <p className="text-white font-bold leading-9 text-[30px] text-center pb-10">
        Frequently asked questions
      </p>
      <div className=" lg:mx-[150px] flex flex-col  lg:flex-row gap-y-9 flex-wrap justify-between ">
        {faq.map((item, index) => (
          <div key={index} className="w-[80%] sm:w-[40%] m-auto ">
            <FaqComponent key={index} text={item.text} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
