import React from "react";
import ReactDOM from "react-dom";

import Map from "./map";

ReactDOM.render(
  <Map
    data={{
      tracks: require("./data/test/gdv_tracks.geojson"),
      updates: require("./data/test/gdv_updates.geojson"),
    }}
  />,
  document.getElementById("app")
);
