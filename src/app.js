import React from "react";
import ReactDOM from "react-dom";

import Map from "./map";
import "./app.scss";

// data in public folder to be accessible to Maputnik served
// by webpack-dev-server
let data = {
  tracks: require("../static/data/test/gdv_tracks.geojson"),
  waypoints: require("../static/data/test/gdv_waypoints.geojson"),
  updates: require("../static/data/test/gdv_updates.geojson"),
};

const App = (props) => {
  return <Map data={data} />;
};

ReactDOM.render(<App />, document.body);
