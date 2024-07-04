// components/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  buttonText: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  buttonText,
}) => {
  return (
    <div className="p-2">
      <div className="flex items-stretch gap-2 rounded-lg p-2 bg-white shadow-md">
        <div className="flex flex-[2_2_0px] flex-col gap-2 pr-2">
          <div className="flex flex-col gap-1">
            <p className="text-[#181511] text-base font-bold leading-tight">
              {title}
            </p>
            <p className="text-[#8a7960] text-sm font-normal leading-normal">
              {description}
            </p>
          </div>
          {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#f2a20d] text-[#181611] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">{buttonText}</span>
          </button> */}
          <button className="flex min-w-[80px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f2a20d] text-[#181511] text-sm font-medium leading-normal">
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
        <div className="w-full aspect-video rounded-lg flex-1 pl-2">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
