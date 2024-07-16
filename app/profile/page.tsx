// E:\Jkuat units\External Attachment\Safari Tech\Kenya Digital  Ecosystem Mapping\JHUB AFRICA\safari-tech\app\profile\page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, MapPin, Users, DollarSign, Calendar, Briefcase } from 'lucide-react';

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
  founders: string[];
  funding_stages: FundingStage[];
  investors: string[];
}

const StartupProfile = () => {
  const [startup, setStartup] = useState<Startup | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/startups/BasiGo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Startup = await response.json();
        setStartup(data);
      } catch (error) {
        console.error("Error fetching the startup data", error);
      }
    };
    fetchData();
  }, []);

  if (!startup) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  const totalFunding = startup.funding_stages.reduce((sum, stage) => sum + stage.amount, 0);

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
                <p className="text-gray-600">${startup.recent_funding}</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="w-6 h-6 text-yellow-500 mr-2" />
              Founders
            </h2>
            <div className="flex flex-wrap gap-4">
              {startup.founders.map((founder, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-2 rounded-full">
                  <img
                    src={`https://ui-avatars.com/api/?name=${founder}&background=random`}
                    alt={founder}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="text-gray-700 font-medium">{founder}</span>
                </div>
              ))}
            </div>
          </div>

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

          <button className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center text-lg font-semibold">
            View More Startups
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;