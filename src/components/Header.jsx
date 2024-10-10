import React from 'react';
import logo from '../assets/New-Sunscope-LOGO-Color.svg'

const Header = () => {
  return (
    <header className="bg-[#FFFFFF] z-10  fixed top-0 left-0 w-full p-4">
      <div className="container mx-auto flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-8" 
        />
      </div>
    </header>
  );
};

export default Header;
