import React from "react";
import VideoCard from "./VideoCard";

function App({ videoData }) {
  return (
    <div className="row">
      {videoData.map((data) => (
        <div className="col-4" key={data.id} style={{ marginBottom: "40px" }}>
          <VideoCard item={data} />
        </div>
      ))}
    </div>
  );
}

export default App;
