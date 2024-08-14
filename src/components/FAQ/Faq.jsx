import React from "react";
import faq from "../../constants/faq";
import FaqComponent from "./FaqComponent";

const Faq = () => {
  return (
    <div className="font-inters mb-[200px]">
      <p className="text-white font-bold leading-9 text-[30px] text-center pb-10">
        Frequently asked questions
      </p>
      <div className="mx-[150px] flex flex-row gap-y-9 flex-wrap justify-between ">
        {faq.map((item, index) => (
          <div key={index} className="w-[40%]  ">
            <FaqComponent key={index} text={item.text} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
