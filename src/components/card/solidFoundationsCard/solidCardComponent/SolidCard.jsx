import React from "react";
import SolidCardComponent from "../SolidCardComponent";

const SolidCard = () => {
  return (
    <div>
      <div>
        <SolidCardComponent
          title={"Solid foundations"}
          text="We don't like to re-invent the wheel, neither should you. We selected the most productive and established tools in the scene and build Saas UI on top of it."
        />
      </div>
    </div>
  );
};

export default SolidCard;
