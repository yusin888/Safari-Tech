// app/page.tsx
import React from 'react';
import Link from 'next/link';
import Header from '../components/Headers';
import Section from '../components/Section';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      <Header title="Kenya Digital Ecosystem Mapping" />
      <div
        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white min-h-80"
        style={{
          backgroundImage:
            'url("https://cdn.usegalileo.ai/stability/c7d0d84a-e369-4913-b281-9f89b582d4b9.png")',
        }}
      >
        {/* <img src="/image/img1.png" alt="" /> */}


      </div>
      <h1 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
        Understand the digital and entrepreneurial ecosystem in Kenya.
      </h1>
      <p className="text-[#181511] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We are mapping out the digital and entrepreneurial ecosystem in Kenya to
        help stakeholders understand the landscape, identify opportunities and
        make better decisions.
      </p>
      <div className="pb-3">
        <div className="flex border-b border-[#e6e1db] px-4 gap-8">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-[#181511] text-[#181511] pb-[13px] pt-4">
            <p className="text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]">
              <Link href="/hubs">Hubs</Link>              
            </p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8a7960] pb-[13px] pt-4">
            <p className="text-[#8a7960] text-sm font-bold leading-normal tracking-[0.015em]">
              Funding
            </p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8a7960] pb-[13px] pt-4">
            <p className="text-[#8a7960] text-sm font-bold leading-normal tracking-[0.015em]">
              
              <Link href="/startups">Startups</Link>              
              
            </p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8a7960] pb-[13px] pt-4">
            <p className="text-[#8a7960] text-sm font-bold leading-normal tracking-[0.015em]">
              Deep Tech
            </p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8a7960] pb-[13px] pt-4">
            <p className="text-[#8a7960] text-sm font-bold leading-normal tracking-[0.015em]">
              Internship
            </p>
          </button>
        </div>
      </div>
      <Section
        title="Hubs in Kenya Mapping"
        description="Map of startups, investors, hubs, and other key stakeholders in the Kenyan tech ecosystem."
        imgSrc="/image/image 2.png"
        imgAlt="Hubs in Kenya"
        buttonText="Explore Map"
      />
      <Section
        title="Funding Ecosystem Mapping"
        description="Mapping of funding into the Kenyan tech ecosystem by source, stage, and sector."
        imgSrc="/image/image 3.png"
        imgAlt="Funding Ecosystem"
        buttonText="Explore Map"
      />
      <Section
        title="Startups Ecosystem Mapping"
        description="Directory of startups in Kenya, categorized by sector and stage of development."
        imgSrc="/image/image 4.png"
        imgAlt="Startups Ecosystem"
        buttonText="Explore Map"
      />
      <Section
        title="Deep Tech Mapping"
        description="Mapping of deep tech innovations and stakeholders in Kenya."
        imgSrc="/image/image 5.png"
        imgAlt="Deep Tech"
        buttonText="Explore Map"
      />
      <Footer />
    </div>
  );
}
