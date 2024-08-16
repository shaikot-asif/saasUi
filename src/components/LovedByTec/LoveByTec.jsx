import React from "react";
import { images } from "../../constants";
import LovePeopleCard from "./LovePeopleCard";

const LoveByTec = () => {
  return (
    <div>
      <h2 className="font-inter leading-9 text-[30px] font-bold text-center text-white mb-14">
        Loved by tech people
      </h2>
      <div className="container mx-auto px-[20px] lg:justify-between flex-col lg:flex-row flex gap-8 mb-[100px]">
        <div className=" lg:w-[33%]">
          <LovePeopleCard
            avatar={images.ASIF}
            name={"Asif Ahmed"}
            title="Founder Saas Ui"
            text={
              "“With SaaS UI I am able to produce high quality dashboard apps and internal tools without a lot of design skills. The ROI really is amazing.”"
            }
          />
        </div>
        <div className=" lg:w-[33%]">
          <LovePeopleCard
            avatar={images.ASIF}
            name={"Asif Ahmed"}
            title="Founder Saas Ui"
            text={
              "“Saas UI allows me to build beautiful and functional UI super fast. The components are very well thought out and the Next.js starter kit saved me at least 100 hours of work.”"
            }
          />
        </div>

        <div className=" lg:w-[33%]">
          <LovePeopleCard
            avatar={images.ASIF}
            name={"Shaikot Ahmed Asif"}
            title="Frontend Developer"
            text={
              "“Saas UI gave us a perfect starting point for our project, having the storybooks already set up with beautifully crafted components and fully mocked pages was a treat.”"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoveByTec;
