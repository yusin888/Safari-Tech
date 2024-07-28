// components/Map.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Hub {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  specialization: string;
}

interface MapProps {
  hubs: Hub[];
}

const Map: React.FC<MapProps> = ({ hubs }) => {
  const customIcon = new L.Icon({
    iconUrl: '/image/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer 
      center={[-1.286389, 36.817223]} 
      zoom={7} 
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hubs.map((hub) => (
        <Marker 
          key={hub.id} 
          position={[hub.lat, hub.lng]} 
          icon={customIcon}
        >
          <Popup>
            <div>
              <h2 className="font-bold">{hub.name}</h2>
              <p>Type: {hub.type}</p>
              <p>Specialization: {hub.specialization}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;