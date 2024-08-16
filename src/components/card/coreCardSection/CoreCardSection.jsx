import React from "react";
import CoreCard from "../coreComponentCard/CoreComponent3/CoreCard";
import SolidCard from "../solidFoundationsCard/solidCardComponent/SolidCard";
import FounderCard from "../startNext/founderComponent/founderCard/FounderCard";
import NextCard from "../startNext/startNextComponent/nextCard/NextCard";

const CoreCardSection = () => {
  return (
    <div className="container m-auto px-[20px] mb-[100px] sm:mb-[200px] flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row  gap-6">
        <CoreCard parentClass={"lg:w-[65%]"} />

        <SolidCard parentClass={" lg:w-[35%]"} />
      </div>

      <div className="flex flex-col lg:flex-row justify-stretch gap-6">
        <NextCard parentClasses={"lg:w-[35%]"} />

        <FounderCard parentClass={"lg:w-[65%]"} />
      </div>
    </div>
  );
};

export default CoreCardSection;
