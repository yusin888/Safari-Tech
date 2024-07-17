// components/Section.tsx
import React from 'react';
import Link from 'next/link';

interface SectionProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  buttonText: string;
}

const Section: React.FC<SectionProps> = ({ title, description, imgSrc, imgAlt, buttonText, link }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover rounded-lg mb-4" />
    <Link href={link}>
    <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
      {buttonText}
    </button>
    </Link>
  </div>
);

export default Section;