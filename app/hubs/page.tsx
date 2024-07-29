// pages/hubs/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './../../components/Navbar'


interface Hub {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  specializations: string[];
}

const Map = dynamic(() => import('../../components/Map'), { 
  ssr: false,
  loading: () => <p className="text-center py-4">Loading map...</p>
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
    {
      id: 1,
      name: 'iHub',
      lat: -1.2897, 
      lng: 36.7819,
      type: 'Innovation Hub',
      specializations: ['Tech Startups', 'AI', 'IoT']
    },
    {
      id: 2,
      name: 'Nairobi Garage',
      lat: -1.2636,
      lng: 36.8039,
      type: 'Co-working Space',
      specializations: ['Tech Startups', 'Digital Innovation']
    },
    {
      id: 3,
      name: 'Nailab',
      lat: -1.2867,
      lng: 36.8233,
      type: 'Incubator',
      specializations: ['Tech Entrepreneurship']
    },
    {
      id: 4,
      name: 'GrowthAfrica',
      lat: -1.2614,
      lng: 36.8031,
      type: 'Accelerator',
      specializations: ['Business Scaling', 'Entrepreneurship']
    },
    {
      id: 5,
      name: 'Gearbox',
      lat: -1.2897,
      lng: 36.7958,
      type: 'Makerspace',
      specializations: ['Hardware Prototyping', 'IoT']
    },
    {
      id: 6,
      name: 'Metta Nairobi',
      lat: -1.2633,
      lng: 36.8007,
      type: 'Innovation Hub',
      specializations: ['Entrepreneurship', 'Networking']
    },
    {
      id: 7,
      name: 'iBiz Africa',
      lat: -1.2697,
      lng: 36.7584,
      type: 'Incubator',
      specializations: ['ICT Innovation', 'Entrepreneurship']
    },
    {
      id: 8,
      name: 'Villgro Kenya',
      lat: -1.2921,
      lng: 36.7815,
      type: 'Incubator',
      specializations: ['Healthcare Innovation']
    },
    {
      id: 9,
      name: 'Lake Hub',
      lat: -0.0917,
      lng: 34.7680,
      type: 'Innovation Hub',
      specializations: ['Tech Innovation', 'Entrepreneurship']
    },
    {
      id: 10,
      name: 'SwahiliBox',
      lat: -4.0435,
      lng: 39.6682,
      type: 'Tech Hub',
      specializations: ['Software Development', 'Tech Innovation']
    }
  ];

  const filteredHubs = hubs.filter(hub => {
    return (
      (filter === 'All' || hub.type === filter) &&
      (specialization === '' || hub.specializations.some(spec => 
        spec.toLowerCase() === specialization.toLowerCase()
      )) &&
      hub.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleHubClick = (lat: number, lng: number) => {
    // This function will be passed to the Map component
  };

  const allSpecializations = Array.from(new Set(hubs.flatMap(hub => hub.specializations)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Hubs in Kenya</h1>
      <Navbar/>
      <div className="space-y-6">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          placeholder="Search hubs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-4">
          <select
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Accelerator">Accelerator</option>
            <option value="Incubator">Incubator</option>
            <option value="Co-working Space">Co-working Space</option>
            <option value="Innovation Hub">Innovation Hub</option>
            <option value="Tech Hub">Tech Hub</option>
            <option value="Makerspace">Makerspace</option>
          </select>
          <select
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="">All Specializations</option>
            {allSpecializations.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {allSpecializations.map(spec => (
            <button
              key={spec}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                ${specialization === spec 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white'}`}
              onClick={() => setSpecialization(specialization === spec ? '' : spec)}
            >
              {spec}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredHubs.map((hub) => (
            <button
              key={hub.id}
              className="p-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors duration-200 ease-in-out"
              onClick={() => handleHubClick(hub.lat, hub.lng)}
            >
              {hub.name}
            </button>
          ))}
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
          {mapReady && <Map hubs={filteredHubs} onHubClick={handleHubClick} />}
        </div>
      </div>
    </div>
  );
};

export default Hubs;