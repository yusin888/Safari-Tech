// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { MapPin, DollarSign, Rocket, Cpu, GraduationCap, LucideIcon } from 'lucide-react';
import Header from './../components/Headers';
import Footer from './../components/Footer';
import Section from './../components/Section';

interface NavButtonProps {
  href: string;
  icon: LucideIcon;
  text: string;
  active?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ href, icon: Icon, text, active = false }) => (
  <Link href={href} className={`flex flex-col items-center p-2 ${active ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-600'}`}>
    <Icon size={24} />
    <span className="mt-1 text-sm font-medium">{text}</span>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Header title="Kenya Digital Ecosystem Mapping" />
      
      <div className="relative h-80 bg-center bg-no-repeat bg-cover"
           style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/c7d0d84a-e369-4913-b281-9f89b582d4b9.png")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
          <h1 className="text-white text-3xl font-bold leading-tight">
            Understand the digital and entrepreneurial ecosystem in Kenya
          </h1>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <p className="text-gray-600 mb-8">
          We are mapping out the digital and entrepreneurial ecosystem in Kenya to
          help stakeholders understand the landscape, identify opportunities and
          make better decisions.
        </p>
        
        <nav className="flex justify-between mb-8">
          <NavButton href="/hubs" icon={MapPin} text="Hubs" active={true} />
          <NavButton href="/funding" icon={DollarSign} text="Funding" />
          <NavButton href="/startups" icon={Rocket} text="Startups" />
          <NavButton href="/alumni" icon={Cpu} text="Deep Tech" />
          <NavButton href="/internship" icon={GraduationCap} text="Internship" />
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section
            title="Hubs in Kenya Mapping"
            description="Map of startups, investors, hubs, and other key stakeholders in the Kenyan tech ecosystem."
            imgSrc="/image/image 2.png"
            imgAlt="Hubs in Kenya"
            link='/hubs'
            buttonText="Explore Map"
          />
          
          <Section
            title="Funding Ecosystem Mapping"
            description="Mapping of funding into the Kenyan tech ecosystem by source, stage, and sector."
            imgSrc="/image/image 3.png"
            imgAlt="Funding Ecosystem"
            link='/funding'
            buttonText="Explore Map"
          />
          
          <Section
            title="Startups Ecosystem Mapping"
            description="Directory of startups in Kenya, categorized by sector and stage of development."
            imgSrc="/image/image 4.png"
            imgAlt="Startups Ecosystem"
            link='/startups'
            buttonText="Explore Map"
          />
          
          <Section
            title="Deep Tech Mapping"
            description="Mapping of deep tech innovations and stakeholders in Kenya."
            imgSrc="/image/image 5.png"
            imgAlt="Deep Tech"
            link='/deep-tech'
            buttonText="Explore Map"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;