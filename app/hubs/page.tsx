// pages/hubs/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Define the Hub interface
interface Hub {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  specialization: string;
}

// Dynamically import the Map component
const Map = dynamic(() => import('./../../components/Map'), { 
  ssr: false,
  loading: () => <p>Loading map...</p>
});

const Hubs = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [specialization, setSpecialization] = useState('');
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  const hubs: Hub[] = [
    // ... your hubs data here ...
  ];

  const filteredHubs = hubs.filter(hub => {
    return (
      (filter === 'All' || hub.type === filter) &&
      (specialization === '' || hub.specialization.includes(specialization)) &&
      hub.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hubs in Kenya</h1>
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Filter and specialization dropdowns */}
      <div className="mb-4 flex flex-wrap space-x-2">
        {/* ... your existing filter and specialization dropdowns ... */}
      </div>
      {/* Specialization buttons */}
      <div className="mb-4 flex flex-wrap space-x-2">
        {/* ... your existing specialization buttons ... */}
      </div>
      {/* Hub buttons */}
      <div className="mb-4">
        {filteredHubs.map((hub) => (
          <button
            key={hub.id}
            className="m-1 p-2 bg-yellow-500 text-white rounded"
          >
            {hub.name}
          </button>
        ))}
      </div>
      {/* Map */}
      <div className="h-96">
        {mapReady && <Map hubs={filteredHubs} />}
      </div>
    </div>
  );
};

export default Hubs;