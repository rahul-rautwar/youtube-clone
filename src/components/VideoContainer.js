import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { addVideos } from "../utils/videosSlice";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.videos.videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
  return (
    <div className="flex flex-wrap">
      {videoList.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=` + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
