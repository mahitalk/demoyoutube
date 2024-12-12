import "./VideoCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";

function VideoCard({ item }) {
  // const { id, snippet } = videoData[0];
  const publishedAt = item.snippet.publishedAt;
  const timeAgo = moment(publishedAt).fromNow();
  return (
    <div className="video_container">
      <img
        src={item.snippet.thumbnails.high.url}
        alt="YouTube Logo"
        className="youtube_logo"
        style={{ width: "100%", height: "192px" }}
      />
      <div className="row">
        <div className="col-2">
          <img
            src="/images/youtube_logo.jpg"
            alt="YouTube Logo"
            className="youtube_logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-9">
          <div className="youtube_heading">{item.snippet.title}</div>
          <div className="channel_title">{item.snippet.channelTitle}</div>
          <div>521K views . {timeAgo}</div>
        </div>
        <div className="col-1">
          <BsThreeDotsVertical />
        </div>
      </div>
      <p></p>
      <p></p>
    </div>
  );
}
export default VideoCard;
