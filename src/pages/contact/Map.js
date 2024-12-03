/** @format */

import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
//import { IoMdArrowUp} from "react-icons/io";
import img from "../../public/coder.jpg";

const mapStyle = {
  width: "100%",
  height: "100%",
};
function Map() {
  const center = {
    lat: 8.8795,
    lng: 7.2276,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
  });

  return (
    <div className="map-con">
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={18}
            center={{ lat: 8.8846715, lng: 7.235209 }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              fullscreenControl: false,
            }}
          >
            <Marker
              position={{ lat: 8.8846715, lng: 7.235209 }}
            />
          </GoogleMap>
        ) : (
          <h1>Loading Map...</h1>
        )}
      </div>
    </div>
  );
}

export default Map;
