'use client';
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, MapPin, Users, DollarSign, Calendar, Briefcase } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface FundingStage {
  stage: string;
  amount: number;
  date: string;
}

interface Startup {
  _id: string;
  name: string;
  field: string;
  headquarters: string;
  founded: number;
  recent_funding: string;
  founders?: string[];
  founder?: string;
  funding_stages: FundingStage[];
  investors: string[];
}

const StartupProfile = () => {
  const [startup, setStartup] = useState<Startup | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const startupName = params.name as string;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/startups/${startupName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch startup data');
        }
        const data: Startup = await response.json();
        setStartup(data);
      } catch (error) {
        console.error("Error fetching the startup data", error);
        setError('Failed to load startup data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [startupName]);

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
        <Link href="/startups">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            Back to Startup List
          </button>
        </Link>
      </div>
    );
  }

  if (!startup) {
    return null;
  }

  const getFounders = () => {
    if (startup.founders && startup.founders.length > 0) {
      return startup.founders;
    } else if (startup.founder) {
      return [startup.founder];
    }
    return [];
  };

  const founders = getFounders();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="bg-yellow-500 text-white p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-bold">{startup.name}</h1>
          <p className="text-xl mt-2 opacity-90">{startup.field}</p>
        </div>

        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <MapPin className="w-6 h-6 text-yellow-500 mr-3" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Location</h2>
                <p className="text-gray-600">{startup.headquarters}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <Calendar className="w-6 h-6 text-yellow-500 mr-3" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Founded</h2>
                <p className="text-gray-600">{startup.founded}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <DollarSign className="w-6 h-6 text-yellow-500 mr-3" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Funding</h2>
                <p className="text-gray-600">{startup.recent_funding}</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="w-6 h-6 text-yellow-500 mr-2" />
              {founders.length > 1 ? 'Founders' : 'Founder'}
            </h2>
            <div className="flex flex-wrap gap-4">
              {founders.length > 0 ? (
                founders.map((founder, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-2 rounded-full">
                    <img
                      src={`https://ui-avatars.com/api/?name=${founder}&background=random`}
                      alt={founder}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <span className="text-gray-700 font-medium">{founder}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No founder information available.</p>
              )}
            </div>
          </div>

          {startup.funding_stages && startup.funding_stages.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 text-yellow-500 mr-2" />
                Funding History
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {startup.funding_stages.map((stage, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stage.stage}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stage.amount.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stage.date}</td>
                      </tr>
                    ))}
                    <tr className="bg-yellow-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Total</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{startup.recent_funding}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 text-yellow-500 mr-2" />
                Funding History
              </h2>
              <p className="text-gray-600">No funding history available.</p>
            </div>
          )}

          <Link href="/startups">
            <button className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center text-lg font-semibold">
              {/* View Other Startup  */}
              Donote
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;