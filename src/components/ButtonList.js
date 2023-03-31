import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Cricket",
  "Sports",
  "Live",
  "News",
  "Cooking",
  "Movies",
  "Commedy",
  "Gaming",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
