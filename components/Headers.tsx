// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center bg-white p-4 pb-2 justify-between">
      <h2 className="text-[#181511] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
        {title}
      </h2>
      <div className="flex w-12 items-center justify-end">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#181511] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
          <div
            className="text-[#181511]"
            data-icon="Gear"
            data-size="24px"
            data-weight="regular"
          >
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
