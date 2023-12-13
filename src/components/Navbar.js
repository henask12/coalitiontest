import React from 'react';

const Navbar = ({ backgroundColor, header }) => {
  const headerClasses = header ? 'text-black' : 'text-white';
  const containerClasses = `flex flex-col sm:flex-row justify-around items-center bg-${backgroundColor} h-28 sm:h-20`;

  return (
    <nav className={containerClasses}>
      <figure className="hover:scale-105 cursor-pointer flex items-center justify-center gap-4">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-10 border mt-2 border-blue-950 rounded-full"
        />

        {header && (
          <figcaption className="flex flex-col mt-2 justify-center items-center w-full">
            <h2 className="header-font font-sm text-black">LOS ANGELES</h2>
            <span className="header-font font-sm text-blue-900 tracking-wider">
              MOUNTAINS
            </span>
          </figcaption>
        )}
      </figure>

      <ul className="flex flex-col sm:flex-row sm:gap-6 items-center">
        <li className={`nav-links ${headerClasses}`}>
          <a href="#history">01. HISTORY</a>
        </li>
        <li className={`nav-links ${headerClasses}`}>
          <a href="#team">02. TEAM</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
