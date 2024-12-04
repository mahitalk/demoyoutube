import "./VideoCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";

function VideoCard({ videoData }) {
  const { id, snippet } = videoData[0];
  const publishedAt = snippet.publishedAt;
  const timeAgo = moment(publishedAt).fromNow();
  return (
    <div class="video_container" style={{ width: "368px" }}>
      <iframe
        title="youtube-video"
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      <div class="row">
        <div class="col-2">
          <img
            src="/images/youtube_logo.jpg"
            alt="YouTube Logo"
            className="youtube_logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </div>
        <div class="col-9">
          <div className="youtube_heading">{videoData[0].snippet.title}</div>
          <div>{videoData[0].snippet.channelTitle}</div>
          <div>521K views . {timeAgo}</div>
        </div>
        <div class="col-1">
          <BsThreeDotsVertical />
        </div>
      </div>
      <p></p>
      <p></p>
    </div>
  );
}
export default VideoCard;
