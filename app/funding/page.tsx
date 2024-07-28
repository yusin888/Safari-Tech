'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { MapPin, Users, DollarSign, Calendar, Briefcase } from 'lucide-react';

interface Investor {
  investor: string;
  totalInvestments: number;
  fields: { field: string; count: number }[];
}

interface FieldAnalysis {
  field: string;
  count: number;
  totalFunding: number;
}

interface BiggestStartup {
  name: string;
  totalFunding: number;
  field: string;
}

interface AnalysisData {
  sortedInvestorAnalysis: Investor[];
  biggestStartup: BiggestStartup;
  biggestField: FieldAnalysis;
  fieldAnalysis: FieldAnalysis[];
}

export default function Dashboard() {
  const [data, setData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://safari-tech-backend.vercel.app/investor-analysis')
      .then(response => response.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!data) return <div className="flex items-center justify-center h-screen bg-white">Error loading data</div>;

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <Head>
        <title>Startup Investor Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Startup Investor Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Biggest Startup Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border-b-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <Briefcase className="w-6 h-6 text-yellow-500 mr-2" />
              Biggest Startup
            </h2>
            <p className="text-3xl font-bold text-gray-800">{data.biggestStartup.name}</p>
            <p className="text-gray-600">Field: {data.biggestStartup.field}</p>
            <p className="text-green-600 font-semibold">
              Total Funding: ${data.biggestStartup.totalFunding.toFixed(2)}M
            </p>
          </div>

          {/* Biggest Field Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border-b-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <MapPin className="w-6 h-6 text-yellow-500 mr-2" />
              Biggest Field
            </h2>
            <p className="text-3xl font-bold text-gray-800">{data.biggestField.field}</p>
            <p className="text-gray-600">Number of Startups: {data.biggestField.count}</p>
            <p className="text-green-600 font-semibold">
              Total Funding: ${data.biggestField.totalFunding.toFixed(2)}M
            </p>
          </div>

          {/* Top Investor Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border-b-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <Users className="w-6 h-6 text-yellow-500 mr-2" />
              Top Investor
            </h2>
            <p className="text-3xl font-bold text-gray-800">{data.sortedInvestorAnalysis[0].investor}</p>
            <p className="text-gray-600">
              Investments: {data.sortedInvestorAnalysis[0].totalInvestments}
            </p>
            <p className="text-blue-600 font-semibold">
              Top Field: {data.sortedInvestorAnalysis[0].fields[0].field}
            </p>
          </div>
        </div>

        {/* Field Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10 border-b-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <DollarSign className="w-6 h-6 text-yellow-500 mr-2" />
            Field Analysis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Startups
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Funding
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.fieldAnalysis.map((field) => (
                  <tr key={field.field}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{field.field}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{field.count}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">${field.totalFunding.toFixed(2)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Investors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
            <Calendar className="w-6 h-6 text-yellow-500 mr-2" />
            Top Investors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.sortedInvestorAnalysis.slice(0, 6).map((investor) => (
              <div key={investor.investor} className="bg-white rounded-lg shadow-md p-6 border-b-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{investor.investor}</h3>
                <p className="text-gray-600">Investments: {investor.totalInvestments}</p>
                <p className="text-blue-600 font-semibold">
                  Top Field: {investor.fields[0].field} ({investor.fields[0].count})
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}