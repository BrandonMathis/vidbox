import maleVideo from "../images/male-video.svg";
import femaleVideo from "../images/female-video.svg";

export default function VideoConference() {
  return (
    <div className="vconf">
      <div className="vconf__main-video">
        <div className="stream">
          <img alt="user video" src={maleVideo} />
        </div>
      </div>

      <div className="vconf__secondary-videos">
        <div className="stream">
          <img alt="user video" src={femaleVideo} />
        </div>
        <div className="stream">
          <img alt="user video" src={maleVideo} />
        </div>
        <div className="stream">
          <img alt="user video" src={femaleVideo} />
        </div>
        <div className="stream">
          <img alt="user video" src={maleVideo} />
        </div>
      </div>
    </div>
  );
}
