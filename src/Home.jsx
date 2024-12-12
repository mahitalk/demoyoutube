import "./App.css";
import { useEffect } from "react";
import videoData from "./data";
import VideoCardList from "./components/VideoCardList";

function Home() {
  useEffect(() => {
    console.log("dummyData", videoData);
  }, []);
  return (
    <div className="container text-center video_card">
      <VideoCardList videoData={videoData} />
    </div>
  );
}
export default Home;
