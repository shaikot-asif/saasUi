import React from "react";
import CoreComponents from "../CoreComponents";

const CoreCard = ({ parentClass }) => {
  return (
    <div className={`${parentClass}`}>
      <CoreComponents
        tag={[
          "yarn add ",
          <span className="text-[#a2deee]">@saas-ui/react</span>,
        ]}
        title="Core components"
        text={[
          "Get started for free with ",
          <span className="text-white">30+ open source components.</span>,
          "Including authentication screens with Clerk, Supabase and Magic. Fully functional forms with React Hook Form. Data tables with React Table.",
        ]}
      />
    </div>
  );
};

export default CoreCard;
