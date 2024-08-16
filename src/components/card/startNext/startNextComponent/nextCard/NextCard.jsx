import React from "react";
import { images } from "../../../../../constants";
import SolidCardComponent from "../../../solidFoundationsCard/SolidCardComponent";

const NextCard = ({ parentClasses }) => {
  return (
    <div className={`${parentClasses}`}>
      <SolidCardComponent
        name={"Asif Ahmed"}
        title={"Founder & CEO"}
        avatar={images.ASIF}
        text={
          "“Saas UI helped us set up a beautiful modern UI in no time. It saved us hundreds of hours in development time and allowed us to focus on business logic for our specific use-case from the start.”"
        }
        parentClasses={
          "bg-[linear-gradient(to_bottom_right,_rgba(243,_185,_211,_0.8),_rgba(137,_82,_224,_0.8))] opacity-60 "
        }
        classes="text-white"
      />
    </div>
  );
};

export default NextCard;
