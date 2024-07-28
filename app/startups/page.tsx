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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStartups = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://safari-tech-backend.vercel.app/startups');
        if (!res.ok) {
          throw new Error('Failed to fetch startups');
        }
        const data: Startup[] = await res.json();
        setStartups(data);
      } catch (error) {
        console.error("Error fetching startups", error);
        setError('Failed to load startups. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchStartups();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <StartupList startups={startups} />
    </div>
  );
};

export default StartupsPage;