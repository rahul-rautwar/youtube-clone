import React from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { addVideos } from "../utils/videosSlice";

const Button = ({ name, channelId }) => {
  const dispatch = useDispatch();

  const getVideos = (channelId) => {
    getChannel(channelId);
  };

  const getChannel = async (channelId) => {
    const data = await fetch(
      YOUTUBE_VIDEOS_API + "&videoCategoryId=" + channelId
    );
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  return (
    <button
      className="px-5 py-2 m-2 bg-gray-200 rounded"
      onClick={() => {
        getVideos(channelId);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
