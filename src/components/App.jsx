import { useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Controls from "./Controls";
import UIComponents from "./UIComponents";
import VideoConference from "./VideoConference";

const App = () => {
  const [handRaised, raiseHand] = useState(false);

  return (
    <main>
      <div className="app">
        <Controls raiseHand={raiseHand} />
        <div className="app__body">
          <Switch>
            <Route path="/">
              <VideoConference handRaised={handRaised} />
            </Route>
            <Route path="/components">
              <UIComponents />
            </Route>
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default App;
