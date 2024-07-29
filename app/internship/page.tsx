import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer';
import React from 'react';

interface Internship {
  id: number;
  name: string;
  link: string;
  description: string;
  company: string;
  image: string;
}

const internships: Internship[] = [
  {
    id: 1,
    name: "J.P. Morgan Software Engineering",
    link: "https://www.theforage.com/simulations/jpmorgan/software-engineering-btjx",
    description: "Build an interface with a stock price data feed and visually display data to assist our traders as a Software Engineer at JPMorgan Chase.",
    company: "J.P. Morgan",
    image: "/image/internship/img6.jpg"
  },
  {
    id: 2,
    name: "Skyscanner Front-End Software Engineering",
    link: "https://www.theforage.com/simulations/skyscanner/front-end-software-engineering-cbwl",
    description: "Use Skyscanner's open-source library to customise a web application as part of the front-end engineering team.",
    company: "Skyscanner",
    image: "/image/internship/img2.png"
  },
  {
    id: 3,
    name: "Walmart USA Advanced Software Engineering",
    link: "https://www.theforage.com/simulations/walmart/software-engineering-fceb",
    description: "Solve complex technical challenges for a range of Walmart departments as part of our software engineering team.",
    company: "Walmart",
    image: "/image/internship/img3.jpg"
  },
  {
    id: 4,
    name: "Goldman Sachs Software Engineering",
    link: "https://www.theforage.com/simulations/goldman-sachs/software-engineering-unei",
    description: "Crack passwords and suggest security improvements as a Governance Analyst at Goldman Sachs.",
    company: "Goldman Sachs",
    image: "/image/internship/img4.jpg"
  },
  {
    id: 5,
    name: "Electronic Arts Software Engineering",
    link: "https://www.theforage.com/simulations/electronic-arts/software-engineering-awbf",
    description: "Develop a new feature for the Sims 4 game as a Junior Software Engineer.",
    company: "Electronic Arts",
    image: "/image/internship/img5.jpg"
  },
  {
    id: 6,
    name: "JPMorgan Chase & Co. Software Engineering Lite",
    link: "https://www.theforage.com/simulations/jpmorgan/software-engineering-lite-iqaz",
    description: "Improve engineering processes for a system in the credit-card rewards department of JPMorgan Chase & Co.",
    company: "JPMorgan Chase & Co.",
    image: "/image/internship/img6.jpg"
  },
  {
    id: 7,
    name: "Hewlett Packard Enterprise Software Engineering",
    link: "https://www.theforage.com/simulations/hewlett-packard-enterprise/software-engineering-pcij",
    description: "Design a RESTful web service using Java Spring Boot and GreenLake Cloud Platform as a back-end developer at HPE.",
    company: "Hewlett Packard Enterprise",
    image: "/image/internship/img7.jpg"
  },
  {
    id: 8,
    name: "Accenture North America Advanced Software Engineering",
    link: "https://www.theforage.com/simulations/accenture-nam/advanced-software-engineering-yjeu",
    description: "Gain practical experience as a software engineer by helping a client manage their growing code base.",
    company: "Accenture",
    image: "/image/internship/img8.jpg"
  }
];

const InternshipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Software Engineering Internships
        </h1>
        <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <div key={internship.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={internship.image} alt={internship.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {internship.name}
                </h2>
                <p className="text-gray-600 mb-4">{internship.company}</p>
                <p className="text-gray-700 mb-6">{internship.description}</p>
                <a
                  href={internship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300"
                >
                  Apply Now
                </a>
              </div>            
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternshipPage;