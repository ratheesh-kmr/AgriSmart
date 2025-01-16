import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const MapView = ({ marketplaces }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default map center
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {marketplaces?.map((marketplace, index) => (
        <Marker key={index} position={[marketplace.lat, marketplace.lng]}>
          <Popup>{marketplace.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
