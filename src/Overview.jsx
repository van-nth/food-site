import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import sui_meaning from './imgs/sui_meaning.jpeg';
import broken_rice from './imgs/broken_rice.jpeg';
import nong_dan from './imgs/nong_dan_ngheo.jpeg';

function useOnScreen (options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options);
    
    if(ref) {
      observer.observe(ref);
    }
    
    return () => {
      if(ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options])
  
  return [setRef, visible]
}


function Overview() {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 })
  const [showNext, setShowNext] = React.useState(false);
  
  return (
    <div className="overview-page">
      <div style={{ height: "100vh" }}>
        <HeroBanner />
        <div className="flex items-center justify-center mt-4">
          <h2 className="text-center my-2">Scroll to the next section</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      <div
        ref={setRef}
        style = {{
          height: "100vh",
        }}
      >
        {visible ? (
          <div className="section-2 px-4 py-3 md:px-20 md:py-4 md:ml-20">
            <h2 className="ribbon-heading text-center mt-4">菜肴的简介</h2>
            <div className="first-display w-full text-center">
              <div className="text-sm md:text-2xl leading-4 flex items-center justify-center md:space-x-6">
                <h2 className="main-heading text-xl text-center md:text-4xl">
                  为什么叫<span className="text-red-700">"碎米饭"</span>?
                </h2>
                <img src={sui_meaning} alt="img" className="meaning-img w-56"/>
                <div className="flex-1 flex items-center">
                  <img src={broken_rice} alt="img" className="meaning-img w-56 h-56 rounded-full" />
                  <span className="tracking-wide">
                    <strong className="text-red-700">碎米饭</strong>是利用加工时大米头部脱下的小白点和
                    <strong className="text-red-700">被碎</strong>的大米颗粒来煮成的。
                    <br />
                    <span className="italic text-xl">
                      (Cơm tấm được nấu bằng cách sử dụng các hạt gạo nhỏ và các hạt gạo vỡ từ đầu gạo trong quá trình chế biến.)
                    </span>
                  </span>
                </div>
              </div>
            </div>
            
            <button onClick={() => setShowNext(!showNext)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
            </button>
            {showNext && (
              <div className="second-display text-sm md:text-2xl leading-4 mt-10 flex items-center space-x-6">
                <img src={nong_dan} alt="nong_dan"/>
                <p className="tracking-wide">
                  <span>昔日，碎米饭是贫困农民吃的日常便饭</span>
                  <br />
                  <span className="italic text-xl">(Ngày xưa cơm tấm là bữa cơm hàng ngày của những người nông dân nghèo.)</span>
                  <br />
                  <br />
                  <span>因为生活很困难，他们要把最优质的大米卖出去，只能吃碎米过日子。</span>
                  <br />
                  <span className="italic text-xl">(Vì cuộc sống quá khó khăn, nên họ phải đem những hạt gạo tốt nhất bán đi, chỉ còn lại những hạt gạo tấm để ăn cho qua ngày tháng.)</span>
                </p>
              </div>
            )}
          </div>
          ) : (
            <h1>
              Scroll down 300px to the top of next section
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              </span>
            </h1>
          )
        }
      </div>
      <Link to="/cooking-method">
        <h4 className="next-slide fixed bottom-24 right-8 flex items-center mb-4 cursor-pointer text-sm md:text-xl hover:text-green-600 hover:font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="hidden md:flex">下一页: 碎米饭的做法</span>
        </h4>
      </Link>
    </div>
  )
}

export default Overview
