import React from "react";
import CoreComponents from "../../../coreComponentCard/CoreComponents";
const tags = [
  "authentication",
  "navigation",
  "crud",
  "settings",
  "multi-tenancy",
  "layouts",
  "billing",
  "a11y testing",
  "server-side rendering",
  "documentation",
  "onboarding",
  "storybooks",
  "theming",
  "upselling",
  "unit testing",
  "feature flags",
  "responsiveness",
];
const FounderCard = ({ parentClass }) => {
  return (
    <div className={`${parentClass}`}>
      <CoreComponents
        arrOfTags={tags}
        title={"Start your next idea two steps ahead"}
        text={
          "We took care of all your basic frontend needs, so you can start building functionality that makes your product unique."
        }
      />
    </div>
  );
};

export default FounderCard;
