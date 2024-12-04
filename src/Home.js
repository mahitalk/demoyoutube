import { useEffect } from "react";
import dummyData from "./data";

function Home() {
  useEffect(() => {
    console.log("dummyData", dummyData);
  }, []);
  return (
    <div>
      <iframe
        title="youtube-test-video"
        width="420"
        height="345"
        src="https://www.youtube.com/embed/s2skans2dP4"
      ></iframe>
    </div>
  );
}
export default Home;
