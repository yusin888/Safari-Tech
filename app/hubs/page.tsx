// pages/hubs/page.tsx
"use client";

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Hubs = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [specialization, setSpecialization] = useState('');

  // Dummy data for hubs, replace with your actual data
  const hubs = [
    { id: 1, name: 'Hub 1', lat: -1.286389, lng: 36.817223, type: 'Accelerator', specialization: 'AI' },
    { id: 2, name: 'Hub 2', lat: -1.2921, lng: 36.8219, type: 'Incubator', specialization: 'Blockchain' },
    // Add more hubs as needed
  ];

  const filteredHubs = hubs.filter(hub => {
    return (
      (filter === 'All' || hub.type === filter) &&
      (specialization === '' || hub.specialization === specialization) &&
      hub.name.toLowerCase().includes(search.toLowerCase())
    );
  });

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
          <option value="Co-working space">Co-working space</option>
          <option value="Startup">Startup</option>
        </select>
        <select
          className="p-2 border rounded mb-2"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Specialization</option>
          <option value="AI">AI</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Edtech">Edtech</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>
      <div className="mb-4 flex flex-wrap space-x-2">
        {['AI', 'Blockchain', 'Edtech', 'Healthcare'].map(spec => (
          <button
            key={spec}
            className={`p-2 border rounded ${specialization === spec ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setSpecialization(specialization === spec ? '' : spec)}
          >
            {spec}
          </button>
        ))}
      </div>
      <div className="h-96">
        <MapContainer center={[-1.286389, 36.817223]} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredHubs.map((hub) => (
            <Marker key={hub.id} position={[hub.lat, hub.lng]}>
              <Popup>{hub.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <button className="w-full mt-4 p-2 bg-[#f2a20d] text-white rounded">Explore Map</button>
    </div>
  );
};

export default Hubs;
