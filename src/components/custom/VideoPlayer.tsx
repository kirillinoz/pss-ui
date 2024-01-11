import { FC } from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  videosrc: string;
  className?: string;
};

const VideoPlayer: FC<VideoPlayerProps> = ({ videosrc, className }) => {
  return (
    <div className={className}>
      <ReactPlayer
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        width="100%"
        height="100%"
        onSeek={(e) => console.log("onSeek", e)}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
