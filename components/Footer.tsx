// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-sm">We are dedicated to mapping and understanding the digital ecosystem in Kenya.</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm">Email: info@kenyaecosystem.com</p>
          <p className="text-sm">Phone: +254 123 456 789</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-500">Twitter</a>
            <a href="#" className="text-white hover:text-yellow-500">LinkedIn</a>
            <a href="#" className="text-white hover:text-yellow-500">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Kenya Digital Ecosystem Mapping. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;