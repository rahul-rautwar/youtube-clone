import React, { useEffect, useState } from "react";
import { YOUTUBE_CATEGORIES } from "../utils/constant";
import Button from "./Button";

const tempCategoriesList = [
  "Music",
  "Sports",
  "People & Blogs",
  "Autos & Vehicles",
  "Gaming",
  "Pets & Animals",
  "Film & Animation",
  "News & Politics",
  "Entertainment",
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
          tempCategoriesList.includes(item?.snippet?.title) && (
            <Button
              key={index}
              name={item?.snippet?.title}
              channelId={item?.id}
            />
          )
        );
      })}
    </div>
  );
};

export default ButtonList;
