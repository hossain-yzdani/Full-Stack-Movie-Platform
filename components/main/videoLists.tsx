import VideoListWrapper from "./videoListWrapper";

const VideoLists = () => {
  return (
    <div className="">
      <VideoListWrapper title="جدیدترین ها" link="/" />
      <VideoListWrapper title="سینمایی خارجی" link="/" />
      <VideoListWrapper title="سریال های ایرانی" link="/" />
      <VideoListWrapper title="انمیشن و انیمه" link="/" />
    </div>
  );
}
 
export default VideoLists;