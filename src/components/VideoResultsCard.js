import React from "react";

const VideoResultsCard = ({ data }) => {
  const { snippet } = data;
  return (
    <div className="p-2 m-2 w-full flex">
      <img
        src={snippet.thumbnails.high.url}
        alt="thumbnail"
        className="w-96 h-[250px] rounded-lg"
      />
      <div className=" px-5 flex-col">
        <h3 className="font-bold">{snippet.title}</h3>
        <p>
          <span>580K Views</span> <span>{snippet.publishedAt}</span>
        </p>

        <div className="flex items-center  py-2">
          <img
            className="h-8 "
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
          <span className="font-bold px-2">{"Rahul"}</span>
          <span>{snippet.channelTitle}</span>
        </div>
        <div>
          <p>{snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoResultsCard;
