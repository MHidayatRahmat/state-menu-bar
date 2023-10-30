import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapContainer() {
  const defaultProps = {
    center: {
      lat: 	3.1526588996672693, // Latitude for Malaysia
      lng: 101.70222049999998, // Longitude for Malaysia
    },
    zoom: 11, // You can adjust the zoom level as needed
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAxXPmi2ob0fDL5kEZftv2gxwx7n9qKX30" }} // Replace with your API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="Malaysia"
        />
      </GoogleMapReact>
    </div>
  );
}
