// components/FundingRounds.js
import React from 'react';

const FundingRounds = () => {
  return (
    <>
      <h1 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Funding Rounds</h1>
      <div className="flex flex-col gap-2 bg-white px-4 min-h-[72px] py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#181511] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12" data-icon="StackSimple" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M221.66,117.68l-96,32a8,8,0,0,1-5.32,0l-96-32a8,8,0,0,0-5.32,15.14L80,145.46V180.2l-19.66,6.55a8,8,0,0,0,0,15.14l96,32a8,8,0,0,0,5.32,0l96-32a8,8,0,0,0,0-15.14L176,180.2V145.46l80.66-12.64A8,8,0,0,0,221.66,117.68ZM160,184.54v25.72L96,193.8V168.08ZM32,80a8,8,0,0,1,5.32-7.57l96-32a8,8,0,0,1,5.32,0l96,32a8,8,0,0,1,0,15.14l-96,32a8,8,0,0,1-5.32,0l-96-32A8,8,0,0,1,32,80Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181511] text-base font-medium leading-normal line-clamp-1">Seed</p>
              <p className="text-[#8a7960] text-sm font-normal leading-normal line-clamp-2">$200.00k</p>
            </div>
          </div>
          <div className="text-[#181511] text-sm font-normal leading-normal tracking-[0.015em]">May 1, 2017</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white px-4 min-h-[72px] py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#181511] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12" data-icon="StackSimple" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M221.66,117.68l-96,32a8,8,0,0,1-5.32,0l-96-32a8,8,0,0,0-5.32,15.14L80,145.46V180.2l-19.66,6.55a8,8,0,0,0,0,15.14l96,32a8,8,0,0,0,5.32,0l96-32a8,8,0,0,0,0-15.14L176,180.2V145.46l80.66-12.64A8,8,0,0,0,221.66,117.68ZM160,184.54v25.72L96,193.8V168.08ZM32,80a8,8,0,0,1,5.32-7.57l96-32a8,8,0,0,1,5.32,0l96,32a8,8,0,0,1,0,15.14l-96,32a8,8,0,0,1-5.32,0l-96-32A8,8,0,0,1,32,80Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181511] text-base font-medium leading-normal line-clamp-1">Series A</p>
              <p className="text-[#8a7960] text-sm font-normal leading-normal line-clamp-2">$4.00M</p>
            </div>
          </div>
          <div className="text-[#181511] text-sm font-normal leading-normal tracking-[0.015em]">Oct 2, 2020</div>
        </div>
      </div>
    </>
  );
};

export default FundingRounds;
