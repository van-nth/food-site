import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
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
  const [showModal, setShowModal] = useState(false);
  
  const handleModal = () => {
    console.log('show modal')
    setShowModal(!showModal);
  }
  
  return (
    <div className="header px-4 py-3 flex justify-between items-center md:px-20 md:py-4">
      <Link to="/">
        <div className="logo flex items-center justify-center px-2 py-2  md:px-4 text-3xl w-40 border-2 border-solid border-gray-400">
          <span className="text-red-600 text-xl md:text-xl xl:text-2xl">越南</span>
          <span className="text-xl md:text-xl xl:text-2xl">美食</span>
        </div>
      </Link>
      <div className="nav-bar hidden md:flex space-x-2 text-sm md:space-x-6 md:text-xl xl:text-2xl">
        {navItems.map((item) => (
          <Link to={`/${item.id}`} key={item.id}>
            <span className="font-bold cursor-pointer hover:text-green-600">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="toggle-menu md:hidden">
        <button 
          className="text-sm md:text-xl xl:text-2xl"
          onClick={handleModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {showModal && (
          <div className="modal w-40 border-2 px-4 py-2 absolute right-2 mt-2 z-10 bg-gray-100 text-sm text-gray-800">
            {navItems.map((item) => (
              <Link to={`/${item.id}`} key={item.id}>
                <p className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  <span className="font-semibold cursor-pointer">{item.name}</span>
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
