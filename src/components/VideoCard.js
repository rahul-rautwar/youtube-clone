import React from "react";

const VideoCard = ({ info }) => {
  console.log("video info", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul className="">
        <li className="font-bold py-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
