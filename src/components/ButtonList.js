import React, { useEffect, useState } from "react";
import { YOUTUBE_CATEGORIES } from "../utils/constant";
import Button from "./Button";

const tempList = [
  "Music",
  "Sports",
  "Movies",
  "Comedy",
  "Gaming",
  "Education",
  "Family",
  "Trailers",
  "Shorts",
  "Thriller",
];
const ButtonList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await fetch(YOUTUBE_CATEGORIES);
    const json = await data.json();

    setList(json.items);
  };
  return (
    <div className="flex">
      {list.map((item, index) => {
        return (
          tempList.includes(item?.snippet?.title) && (
            <Button
              key={index}
              name={item?.snippet?.title}
              channelId={item?.snippet?.channelId}
            />
          )
        );
      })}
    </div>
  );
};

export default ButtonList;
