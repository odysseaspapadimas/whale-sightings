import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({ center, zoom, data }) => {
  const markers = data.map((evt) => {
    console.log(evt.latitude, evt.longitude);
    return <Marker key={evt.latitude} lat={evt.latitude} lng={evt.longitude} />;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 48.2611,
    lng: -122.5088,
  },
  zoom: 7,
};

export default Map;
