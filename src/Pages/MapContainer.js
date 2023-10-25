import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Set your initial map center
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY' // Replace with your actual API key
})(MapContainer);
