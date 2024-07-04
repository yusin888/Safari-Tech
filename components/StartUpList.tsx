import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// useRouter();


interface StartupListProps {
  startups: {
    _id: string;
    name: string;
    field: string;
    headquarters: string;
    founded: string;
    // logo: string;
  }[];
}

const StartupList: React.FC<StartupListProps> = ({ startups }) => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Startups in Kenya</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <div
            key={startup._id}
            className="rounded-xl shadow-xl overflow-hidden bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center justify-center">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                //   src={startup.logo || '/images/default.png'}
                  src={'/image/default.png'}
                  alt={startup.name}
                  onError={(e) => {
                    e.currentTarget.src = '/images/default.png';
                  }}
                />
              </div>
              <div className="col-span-3">
                <h3 className="text-xl font-semibold text-gray-900 truncate">{startup.name}</h3>
                <p className="text-sm text-gray-700 truncate">{startup.field}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <p className="text-sm text-gray-700">Headquarters: {startup.headquarters}</p>
                  <p className="text-sm text-gray-700">Founded: {startup.founded}</p>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <button className="text-gray-700 hover:text-yellow-500">
                  <Link href={`http://localhost:8000/startups/${startup.name}`}><span className="sr-only">Star</span>             
                  {/* <Link href="/startup-profile"><span className="sr-only">Star</span>              */}

                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                  </svg>
                  </Link> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupList;
