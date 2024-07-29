// components/Navbar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, DollarSign, Rocket, Cpu, GraduationCap, LucideIcon } from 'lucide-react';

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
      <span className="mt-1 text-sm font-medium">{text}</span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between mb-8">
      <NavButton href="/hubs" icon={MapPin} text="Hubs" />
      <NavButton href="/funding" icon={DollarSign} text="Funding" />
      <NavButton href="/startups" icon={Rocket} text="Startups" />
      <NavButton href="/alumni" icon={Cpu} text="Deep Tech" />
      <NavButton href="/internship" icon={GraduationCap} text="Internship" />
    </nav>
  );
};

export default Navbar;