// components/Header.tsx
import React from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="w-24"> {/* Placeholder for balance */}
        {/* You can add a logo or other content here if needed */}
      </div>
      <h1 className="text-3xl font-bold text-center flex-grow">{title}</h1>
      <div className="w-24 flex justify-end">
        <button className="p-2 rounded-full hover:bg-yellow-700 transition duration-300">
          <User size={28} />
        </button>
      </div>
    </div>
  </header>
);

export default Header;