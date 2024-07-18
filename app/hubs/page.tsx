// pages/hubs/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import { MapContainer as LeafletMapContainer, MapContainerProps } from 'react-leaflet';
import { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

interface Hub {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  specialization: string;
}

const Hubs = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [specialization, setSpecialization] = useState('');
  const [mapReady, setMapReady] = useState(false);
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null);

  useEffect(() => {
    setMapReady(true);
  }, []);

  const hubs: Hub[] = [
    {
      id: 1,
      name: 'iHub',
      lat: -1.2897, 
      lng: 36.7819,
      type: 'Innovation Hub',
      specialization: 'Tech Startups, AI, IoT'
    },
    {
      id: 2,
      name: 'Nairobi Garage',
      lat: -1.2636,
      lng: 36.8039,
      type: 'Co-working Space',
      specialization: 'Tech Startups, Digital Innovation'
    },
    {
      id: 3,
      name: 'Nailab',
      lat: -1.2867,
      lng: 36.8233,
      type: 'Incubator',
      specialization: 'Tech Entrepreneurship'
    },
    {
      id: 4,
      name: 'GrowthAfrica',
      lat: -1.2614,
      lng: 36.8031,
      type: 'Accelerator',
      specialization: 'Business Scaling, Entrepreneurship'
    },
    {
      id: 5,
      name: 'Gearbox',
      lat: -1.2897,
      lng: 36.7958,
      type: 'Makerspace',
      specialization: 'Hardware Prototyping, IoT'
    },
    {
      id: 6,
      name: 'Metta Nairobi',
      lat: -1.2633,
      lng: 36.8007,
      type: 'Innovation Hub',
      specialization: 'Entrepreneurship, Networking'
    },
    {
      id: 7,
      name: 'iBiz Africa',
      lat: -1.2697,
      lng: 36.7584,
      type: 'Incubator',
      specialization: 'ICT Innovation, Entrepreneurship'
    },
    {
      id: 8,
      name: 'Villgro Kenya',
      lat: -1.2921,
      lng: 36.7815,
      type: 'Incubator',
      specialization: 'Healthcare Innovation'
    },
    {
      id: 9,
      name: 'Lake Hub',
      lat: -0.0917,
      lng: 34.7680,
      type: 'Innovation Hub',
      specialization: 'Tech Innovation, Entrepreneurship'
    },
    {
      id: 10,
      name: 'SwahiliBox',
      lat: -4.0435,
      lng: 39.6682,
      type: 'Tech Hub',
      specialization: 'Software Development, Tech Innovation'
    }
  ];

  const filteredHubs = hubs.filter(hub => {
    return (
      (filter === 'All' || hub.type === filter) &&
      (specialization === '' || hub.specialization.includes(specialization)) &&
      hub.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const customIcon = new L.Icon({
    iconUrl: '/image/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const handleHubClick = (lat: number, lng: number) => {
    if (mapInstance) {
      mapInstance.setView([lat, lng], 15);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hubs in Kenya</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-wrap space-x-2">
        <select
          className="p-2 border rounded mb-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Accelerator">Accelerator</option>
          <option value="Incubator">Incubator</option>
          <option value="Co-working Space">Co-working Space</option>
          <option value="Innovation Hub">Innovation Hub</option>
          <option value="Tech Hub">Tech Hub</option>
          <option value="Makerspace">Makerspace</option>
        </select>
        <select
          className="p-2 border rounded mb-2"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Specialization</option>
          <option value="AI">AI</option>
          <option value="IoT">IoT</option>
          <option value="Tech Startups">Tech Startups</option>
          <option value="Entrepreneurship">Entrepreneurship</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>
      <div className="mb-4 flex flex-wrap space-x-2">
        {['AI', 'IoT', 'Tech Startups', 'Entrepreneurship', 'Healthcare'].map(spec => (
          <button
            key={spec}
            className={`p-2 border rounded ${specialization === spec ? 'bg-yellow-500 text-white' : ''}`}
            onClick={() => setSpecialization(specialization === spec ? '' : spec)}
          >
            {spec}
          </button>
        ))}
      </div>
      <div className="mb-4">
        {filteredHubs.map((hub) => (
          <button
            key={hub.id}
            className="m-1 p-2 bg-yellow-500 text-white rounded"
            onClick={() => handleHubClick(hub.lat, hub.lng)}
          >
            {hub.name}
          </button>
        ))}
      </div>
      <div className="h-96">
        {mapReady && (
          <MapContainer 
            center={[-1.286389, 36.817223]} 
            zoom={7} 
            className="h-full w-full"
            whenReady={() => {}}
            ref={(map: LeafletMap | null) => {
              if (map) {
                setMapInstance(map);
              }
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredHubs.map((hub) => (
              <Marker 
                key={hub.id} 
                position={[hub.lat, hub.lng]} 
                icon={customIcon}
                eventHandlers={{
                  click: () => handleHubClick(hub.lat, hub.lng),
                }}
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
        )}
      </div>
    </div>
  );
};

export default Hubs;