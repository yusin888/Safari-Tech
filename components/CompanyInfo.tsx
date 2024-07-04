// components/CompanyInfo.js
import React from 'react';

const CompanyInfo = () => {
  return (
    <>
      <h1 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Sky.Garden</h1>
      <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div className="text-[#181511] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#181511] text-base font-medium leading-normal line-clamp-1">E-Commerce</p>
          <p className="text-[#8a7960] text-sm font-normal leading-normal line-clamp-2">Internet Services and Retailing, E-Commerce</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          className="text-[#181511] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12"
          data-icon="GlobeHemisphereEast"
          data-size="24px"
          data-weight="regular"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#181511] text-base font-medium leading-normal line-clamp-1">Nairobi, Kenya</p>
          <p className="text-[#8a7960] text-sm font-normal leading-normal line-clamp-2">Headquarters</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div className="text-[#181511] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12" data-icon="Calendar" data-size="24px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A24.07,24.07,0,0,0,24,56V216a24.07,24.07,0,0,0,24,24H208a24.07,24.07,0,0,0,24-24V56A24.07,24.07,0,0,0,208,32Zm8,184a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V104H216ZM216,88H40V56A8,8,0,0,1,48,48H64v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h16a8,8,0,0,1,8,8Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#181511] text-base font-medium leading-normal line-clamp-1">2017</p>
          <p className="text-[#8a7960] text-sm font-normal leading-normal line-clamp-2">Founded</p>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
