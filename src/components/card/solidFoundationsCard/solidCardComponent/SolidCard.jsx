import React from "react";
import SolidCardComponent from "../SolidCardComponent";

const SolidCard = ({ parentClass }) => {
  return (
    <div className={`${parentClass}`}>
      <SolidCardComponent
        title={"Solid foundations"}
        text="We don't like to re-invent the wheel, neither should you. We selected the most productive and established tools in the scene and build Saas UI on top of it."
      />
    </div>
  );
};

export default SolidCard;
