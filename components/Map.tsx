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
  specializations: string[];
}

interface MapProps {
  hubs: Hub[];
  onHubClick: (lat: number, lng: number) => void;
}

const Map: React.FC<MapProps> = ({ hubs, onHubClick }) => {
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Nairobi coordinates
  const nairobiPosition: [number, number] = [-1.286389, 36.817223];

  return (
    <MapContainer 
      center={nairobiPosition}
      zoom={12}
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
          icon={redIcon}
          eventHandlers={{
            click: () => onHubClick(hub.lat, hub.lng),
          }}
        >
          <Popup>
            <div className="text-sm">
              <h2 className="font-bold text-lg mb-1">{hub.name}</h2>
              <p className="mb-1"><span className="font-semibold">Type:</span> {hub.type}</p>
              <p><span className="font-semibold">Specializations:</span> {hub.specializations.join(', ')}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;