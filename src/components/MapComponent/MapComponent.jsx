import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

// Fix missing default marker icons
const DefaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ currentLocation, onLocationChange }) => {
  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    onLocationChange([lat, lng]);
  };

  return (
    <div className="map-container">
      <MapContainer
        center={currentLocation}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Utkarsh Tiwari'
        />
        <Marker position={currentLocation}>
          <Popup>
            Latitude: {currentLocation[0]}, Longitude: {currentLocation[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
