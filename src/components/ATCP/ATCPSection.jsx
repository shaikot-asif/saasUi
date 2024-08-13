import React from "react";
import { images } from "../../constants";
import ATCP from "./ATCP";

const ATCPSection = () => {
  return (
    <div className="container mx-auto pl-5 flex  gap-[36px] my-44 flex-row">
      <div className="w-[48%]">
        <ATCP
          icon={images.like}
          title={"Accessible"}
          paragraph={"All components strictly follow WAI-ARIA standards."}
          parentClasses={"flex flex-col gap-3"}
          classes={"flex flex-col gap-3"}
        />
      </div>
      <div className="w-[48%]">
        <ATCP
          icon={images.themable}
          title={"Themable"}
          paragraph={
            "Fully customize all components to your brand with theme support and style props."
          }
          parentClasses={"flex flex-col gap-3"}
          classes={"flex flex-col gap-3"}
        />
      </div>
      <div className="w-[48%]">
        <ATCP
          icon={images.composable}
          title={"Composable"}
          paragraph={
            "Compose components to fit your needs and mix them together to create new ones."
          }
          parentClasses={"flex flex-col gap-3"}
          classes={"flex flex-col gap-3"}
        />
      </div>
      <div className="w-[48%]">
        <ATCP
          icon={images.like}
          title={"Productive"}
          paragraph={
            "Designed to reduce boilerplate and fully typed, build your product at speed."
          }
          parentClasses={"flex flex-col gap-3"}
          classes={"flex flex-col gap-3"}
        />
      </div>
    </div>
  );
};

export default ATCPSection;
