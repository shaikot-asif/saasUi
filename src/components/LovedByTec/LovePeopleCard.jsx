import React from "react";

const LovePeopleCard = ({ avatar, name, title, text }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-14 h-14">
          <img
            className="rounded-full h-[100%] w-[100%]"
            src={avatar}
            alt={name}
          />
          <div>
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default LovePeopleCard;
