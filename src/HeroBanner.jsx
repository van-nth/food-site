import React from 'react';
import './HeroBanner.css';

import banner_img from './imgs/banner_img.webp';

function HeroBanner() {
  return (
    <div className="hero w-full flex items-center justify-center space-x-8 px-4 md:px-20 text-sm md:text-xl">
      <div className="text-center relative">
        <h1 className="main-title font-bold text-4xl md:text-9xl text-gray-900">碎米飯</h1>
        <span className="main-pinyin text-gray-700 md:text-3xl font-normal">(suìmǐ fàn)</span>
        <h3 className="mt-8 mb-1 font-semibold text-xl md:text-4xl text-gray-900"><span className="text-red-800">西貢</span>平民而獨特的美食</h3>
        <span className="sub-pinyin text-gray-700 font-normal">(<span className="text-red-800">xīgòng</span> píngmín ér dútè de měishí)</span>
        <div className="mt-4 text-gray-600">
          <h3 className="text-xl md:text-4xl mb-2">西貢 = 胡志明市</h3>
          <h3 className="md: text-2xl font-normal">(xīgòng = húzhìmíng shì)</h3>
        </div>
        
      </div>
      
      <img
        src={banner_img}
        alt="hero-img"
        className="w-40"
      />
    </div>
  )
}

export default HeroBanner
