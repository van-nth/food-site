import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    id: "game",
    name: "Game"
  },
  {
    id: "overview",
    name: "Overview"
  },
  {
    id: "cooking-method",
    name: "Cooking method"
  },
  {
    id: "facts",
    name: "Facts"
  }
]

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu= () => {
    setShowMenu(!showMenu);
  }
  
  return (
    <div className="header bg-gray-900 px-4 py-3 flex justify-between items-center md:px-20 md:py-4">
      <Link to="/">
        <div className="w-60 logo flex items-center justify-center px-2 py-2  md:px-4 text-3xl border-2 border-solid border-white">
          <span className="text-red-500 text-xl md:text-xl xl:text-3xl">越南</span>
          <span className="text-xl md:text-xl xl:text-3xl text-white">传统美食</span>
        </div>
      </Link>
      <ul className="nav-bar hidden md:flex space-x-2 text-sm md:space-x-6 md:text-xl xl:text-2xl cursor-pointer">
        {navItems.map((item) => (
          <Link to={`/${item.id}`} key={item.id}>
            <li className="nav-link text-white font-semibold hover:font-bold">{item.name}</li>
          </Link>
        ))}
      </ul>
      <div className="toggle-menu md:hidden">
        <button 
          className="text-sm md:text-xl xl:text-2xl"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {showMenu && (
          <ul className="modal w-50 border-2 border-gray-500 px-4 py-2 absolute right-2 mt-2 z-10 text-sm bg-white">
            {navItems.map((item) => (
              <Link to={`/${item.id}`} key={item.id}>
                <li className="flex items-center space-x-2 hover:text-gray-900 hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  <span className="nav-link font-semibold cursor-pointer">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
