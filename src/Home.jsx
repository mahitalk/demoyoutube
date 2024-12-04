import { useEffect } from "react";
import videoData from "./data";
import VideoCard from "./components/VideoCard";

function Home() {
  useEffect(() => {
    console.log("dummyData", videoData);
  }, []);
  return (
    <div>
      <VideoCard videoData={videoData} />
    </div>
  );
}
export default Home;
