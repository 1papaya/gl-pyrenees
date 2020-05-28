import React, { useState, useEffect } from "react";
import MapGL, { GeolocateControl, Marker, Source, Layer } from "react-map-gl";

import mapStyle from "./style/style-dev.json";

import GdvPin from "./style/gDv-pin.svg";

const Map = (props) => {
  let [viewport, setViewport] = useState({
    longitude: 0.5572895,
    latitude: 42.6993485,
    zoom: 7,
  });

  let gdvPinHeight = 50;
  let gdvPinRatio = 76 / 62;

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={setViewport}
      mapStyle={mapStyle}
    >
      {props.updates.features.map((upd, idx) => {
        // markers for previous waypoints
        if (idx !== props.updates.features.length - 1) {
          return;
        } else {
          // marker for current waypoint
          return (
            <Marker
              key={idx}
              longitude={upd.geometry.coordinates[0]}
              latitude={upd.geometry.coordinates[1]}
              offsetTop={-gdvPinHeight}
              offsetLeft={(-gdvPinHeight/2) / gdvPinRatio}
              height={gdvPinHeight}
              width={gdvPinHeight / gdvPinRatio}
            >
              <GdvPin
                height={gdvPinHeight}
                width={gdvPinHeight / gdvPinRatio}
              />
            </Marker>
          );
        }
      })}
      <Source id="gdv_tracks" type="geojson" data={props.tracks}>
        <Layer
          id="gdv_tracks"
          type="line"
          paint={{
            "line-color": "#4b4b4b",
            "line-width": 2
          }}
        />
      </Source>
      <Source id="gdv_waypoints" type="geojson" data={props.waypoints}>
        <Layer
          id="gdv_waypoints"
          type="circle"
        />
      </Source>
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
    </MapGL>
  );
};

export default Map;
