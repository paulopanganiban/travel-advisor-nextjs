import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
const Map = () => {
  const coordinates = { lat: 59.95, lng: 30.33 };
  console.log(process.env.GOOGLE_MAP_API_KEY);
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD4MtqH7o-zitrHn-U3NjW8EG0LTIDMB9Y" }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick{''}
      />
    </MapContainer>
  );
};

export default Map;
const MapContainer = styled.div`
  height: inherit;
`;
