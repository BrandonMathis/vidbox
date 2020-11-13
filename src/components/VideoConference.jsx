import maleVideo from "../images/male-video.svg";
import femaleVideo from "../images/female-video.svg";

export default function VideoConference({ handRaised, isRecording }) {
  return (
    <div className="vconf">
      <div className="vconf__main-video">
        <div
          style={{
            boxShadow: `${handRaised ? "yellow" : "red"} 0em 0em 3px 3px inset`,
            opacity: handRaised || isRecording ? "1" : "0",
            transition: "opacity 0.5s",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            pointerEvents: "none",
          }}
        />
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
