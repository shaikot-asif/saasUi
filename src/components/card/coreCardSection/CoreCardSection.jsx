import React from "react";
import CoreCard from "../coreComponentCard/CoreComponent3/CoreCard";
import SolidCard from "../solidFoundationsCard/solidCardComponent/SolidCard";
import FounderCard from "../startNext/founderComponent/founderCard/FounderCard";
import NextCard from "../startNext/startNextComponent/nextCard/NextCard";

const CoreCardSection = () => {
  return (
    <div className="w-[1260px] m-auto mb-[200px] flex flex-col gap-6">
      <div className="flex flex-row justify-stretch gap-6">
        <div className="w-auto">
          <CoreCard />
        </div>
        <div>
          <div className="w-[420px]">
            <SolidCard />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-stretch gap-6">
        <div className="w-[420px] block">
          <NextCard />
        </div>
        <div className="w-[815px]">
          <FounderCard />
        </div>
      </div>
    </div>
  );
};

export default CoreCardSection;
