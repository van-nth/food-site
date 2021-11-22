import React from 'react';
import { Link } from 'react-router-dom';
import CookingSteps from './CookingSteps'

function CookingMethod() {
  return (
    <div className="method-page">
      <h2 className="ribbon-heading text-center mt-4 md:ml-20">烹调法</h2>
      <CookingSteps />
      <Link to="/thank-you">
        <h4 className="next-slide fixed bottom-24 right-10 flex items-center mb-4 cursor-pointer text-sm md:text-xl hover:text-green-600 hover:font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="hidden md:flex">下一页</span>
        </h4>
      </Link>
    </div>
  )
}

export default CookingMethod
