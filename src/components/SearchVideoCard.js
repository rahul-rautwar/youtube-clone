import React from "react";
import { Link } from "react-router-dom";
import VideoResultsCard from "./VideoResultsCard";

const SearchVideoCard = ({ data }) => {
  return (
    <Link key={data.id.videoId} to={`/watch?v=` + data.id.videoId}>
      <VideoResultsCard data={data} />;
    </Link>
  );
};

export default SearchVideoCard;
