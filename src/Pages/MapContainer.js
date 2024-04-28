import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const AnyReactComponent = () => <div className="text-red-500 text-xl"><FmdGoodIcon/></div>;

async function fetchDataFromFirebase(setTestData, setLoading,item) {
  try {
    setLoading(true);
    const response = await axios.get(
      `https://react-malaysia-state-default-rtdb.firebaseio.com/location/${item.id}.json`
    );
    const data = response.data;
    setTestData(data);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
}

export default function MapContainer({item}) {
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDataFromFirebase(setTestData, setLoading, item );
  }, []);

  const defaultCenter = {
    lat: testData.length > 0 ? testData.Latitude : 3.1526588996672693,
    lng: testData.length > 0 ? testData.Longitude : 101.70222049999998,
  };


  const defaultProps = {
    center: defaultCenter,
    zoom: 11,
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAxXPmi2ob0fDL5kEZftv2gxwx7n9qKX30", // Replace with your Google Maps API key
          }}
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
    </>
  );
}
