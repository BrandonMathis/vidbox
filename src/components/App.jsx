import { useState } from "react";

import Controls from "./Controls";
import VideoConference from "./VideoConference";

const App = () => {
  const [handRaised, raiseHand] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <main>
      <div className="app">
        <Controls
          raiseHand={raiseHand}
          setIsRecording={setIsRecording}
          isRecording={isRecording}
        />

        <VideoConference handRaised={handRaised} isRecording={isRecording} />
      </div>
    </main>
  );
};

export default App;
