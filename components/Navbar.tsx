// components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, DollarSign, Rocket, Cpu, GraduationCap, Menu, X, LucideIcon } from 'lucide-react';

interface NavButtonProps {
  href: string;
  icon: LucideIcon;
  text: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, icon: Icon, text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`flex flex-col items-center p-2 ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-600'}`}>
      <Icon size={24} />
      <span className="mt-1 text-sm font-medium hidden sm:block">{text}</span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800">Kenya Digital Ecosystem</span>
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavButton href="/hubs" icon={MapPin} text="Hubs" />
              <NavButton href="/funding" icon={DollarSign} text="Funding" />
              <NavButton href="/startups" icon={Rocket} text="Startups" />
              <NavButton href="/alumni" icon={Cpu} text="DeepTech" />
              <NavButton href="/internship" icon={GraduationCap} text="Internship" />
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavButton href="/hubs" icon={MapPin} text="Hubs" />
            <NavButton href="/funding" icon={DollarSign} text="Funding" />
            <NavButton href="/startups" icon={Rocket} text="Startups" />
            <NavButton href="/alumni" icon={Cpu} text="DeepTech" />
            <NavButton href="/internship" icon={GraduationCap} text="Internship" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;