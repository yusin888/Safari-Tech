// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/3925bafe-f8a5-410b-81e1-77c84adf87b1.png")' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
