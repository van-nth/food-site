import React from 'react';
import './HeroBanner.css';

import banner_img from './imgs/banner_img.webp';

function HeroBanner() {
  return (
    <div className="hero w-full flex items-center justify-between px-4 md:px-20">
      <div className="text-center relative">
        <h1 className="main-title text-green-800 font-bold text-2xl md:text-9xl">碎米飯</h1>
        <span className="main-pinyintext-gray-900 text-sm md:text-2xl">(suìmǐ fàn)</span>
        <h3 className="mt-8 mb-1 text-green-800 font-semibold text-xl md:text-4xl">西貢平民而獨特的美食</h3>
        <span className="sub-pinyin text-gray-900 text-sm md:text-2xl">(xīgòng píngmín ér dútè de měishí)</span>
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
