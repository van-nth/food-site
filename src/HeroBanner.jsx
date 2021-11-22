import React from 'react';
import './HeroBanner.css';

import banner_img from './imgs/banner_img.webp';

function HeroBanner() {
  return (
    <div className="hero w-full flex items-center justify-center space-x-8 px-4 md:px-20 text-sm md:text-xl text-white">
      <div className="text-center relative">
        <h1 className="main-title font-bold text-3xl md:text-9xl text-gray-100">碎米飯</h1>
        <span className="main-pinyin text-gray-200">(suìmǐ fàn)</span>
        <h3 className="mt-8 mb-1 font-semibold text-xl md:text-4xl text-gray-100">西貢平民而獨特的美食</h3>
        <span className="sub-pinyin text-gray-200">(xīgòng píngmín ér dútè de měishí)</span>
      </div>
      
      <img
        src={banner_img}
        alt="hero-img"
        className="relative"
      />
    </div>
  )
}

export default HeroBanner
