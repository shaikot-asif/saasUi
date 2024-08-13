import React from "react";
import { images } from "../../constants";
import LovePeopleCard from "./LovePeopleCard";

const LoveByTec = () => {
  return (
    <div>
      <LovePeopleCard
        avatar={images.ASIF}
        name={"Asif Ahmed"}
        title="Founder Saas Ui"
        text={
          "“With SaaS UI I am able to produce high quality dashboard apps and internal tools without a lot of design skills. The ROI really is amazing.”"
        }
      />
    </div>
  );
};

export default LoveByTec;
