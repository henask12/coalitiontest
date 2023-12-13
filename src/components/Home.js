import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <header loading="lazy" className="bg-hero-mountains bg-cover h-screen bg-no-repeat saturate-[.8] opacity-80">
      <Navbar backgroundColor="transparent" />

      <div className="flex flex-col justify-center items-center">
        <h1 className="header-font text-7xl sm:text-[7.1rem] pt-10">LOS ANGELES</h1>
        <span className="header-font text-7xl sm:text-[7.1rem] text-blue-900 tracking-wider">
          MOUNTAINS
        </span>
      </div>
    </header>
  );
};

export default Home;
