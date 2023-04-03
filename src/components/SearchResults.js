import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import SearchVideoCard from "./SearchVideoCard";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + "&q=iphone");
    const json = await data.json();
    console.log("video results", json.items);
    setResults(json.items);
  };
  return (
    <div className="">
      {results.map((it) => {
        return <SearchVideoCard data={it} />;
      })}
    </div>
  );
};

export default SearchResults;
