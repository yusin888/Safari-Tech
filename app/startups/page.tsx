// app/startups/page.tsx
"use client";


import { useEffect, useState } from 'react';
import StartupList from '../../components/StartUpList';

interface Startup {
  _id: string;
  name: string;
  field: string;
  headquarters: string;
  founded: string;

}

const StartupsPage = () => {
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    const fetchStartups = async () => {
      const res = await fetch('http://localhost:8000/startups');
      const data: Startup[] = await res.json();
      setStartups(data);
    };

    fetchStartups();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* <h1>Startups in Kenya</h1> */}
      <StartupList startups={startups} />
    </div>
  );
};

export default StartupsPage;
