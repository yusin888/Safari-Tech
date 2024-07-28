'use client';
import React, { useEffect, useState } from 'react';
import { User, MapPin, Phone, CreditCard, Building, ArrowUpRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface AlumnusDetails {
  Name: string;
  "Reg No": string;
  "Company/Industry": string;
  Region: string;
  "Contacts (Student)": string;
  "Contacts (Industrial Supervisor)": string;
  Supervisor: string;
}

const AlumnusDetailsPage = () => {
  const [alumnus, setAlumnus] = useState<AlumnusDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const alumnusName = params.name as string;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://safari-tech-backend.vercel.app/alumni/${alumnusName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch alumnus data');
        }
        const data: AlumnusDetails = await response.json();
        setAlumnus(data);
      } catch (error) {
        console.error("Error fetching the alumnus data", error);
        setError('Failed to load alumnus data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [alumnusName]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <Link href="/alumni">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            Back to Alumni List
          </button>
        </Link>
      </div>
    );
  }

  if (!alumnus) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="bg-yellow-500 text-white p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-bold">{alumnus.Name}</h1>
          <p className="text-xl mt-2 opacity-90">{alumnus['Company/Industry']}</p>
        </div>

        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <DetailItem icon={<CreditCard className="w-6 h-6 text-yellow-500 mr-3" />} label="Registration Number" value={alumnus['Reg No']} />
            <DetailItem icon={<MapPin className="w-6 h-6 text-yellow-500 mr-3" />} label="Region" value={alumnus.Region} />
            <DetailItem icon={<Phone className="w-6 h-6 text-yellow-500 mr-3" />} label="Student Contact" value={alumnus['Contacts (Student)']} />
            <DetailItem icon={<Phone className="w-6 h-6 text-yellow-500 mr-3" />} label="Industrial Supervisor Contact" value={alumnus['Contacts (Industrial Supervisor)']} />
            <DetailItem icon={<User className="w-6 h-6 text-yellow-500 mr-3" />} label="Supervisor" value={alumnus.Supervisor} />
          </div>

          <Link href="/alumni">
            <button className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center text-lg font-semibold">
              View Other Alumni
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex items-center">
      {icon}
      <div>
        <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

export default AlumnusDetailsPage;