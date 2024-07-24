import React from 'react';
import Link from 'next/link';
import { User, Building, ArrowRight } from 'lucide-react';

interface Alumnus {
  _id: string;
  Name: string;
  "Company/Industry": string;
}

async function getAlumni(): Promise<Alumnus[]> {
  const res = await fetch('http://localhost:8000/alumni');
  if (!res.ok) {
    throw new Error('Failed to fetch alumni');
  }
  return res.json();
}

export default async function AlumniPage() {
  const alumni = await getAlumni();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Alumni Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus) => (
            <Link href={`/alumni/${encodeURIComponent(alumnus.Name)}`} key={alumnus._id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-yellow-500 p-4">
                  <User className="w-16 h-16 text-white mx-auto" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{alumnus.Name}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Building className="w-4 h-4 mr-2" />
                    <p>{alumnus['Company/Industry']}</p>
                  </div>
                  <div className="flex items-center text-yellow-500 font-semibold hover:text-yellow-600">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
