import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import SearchVideoCard from "./SearchVideoCard";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getResults();
  }, [searchParams]);

  const getResults = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + "&q=" + searchParams.get("q")
    );
    const json = await data.json();
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
