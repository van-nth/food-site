import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import rice_field from './imgs/rice_field.jpg';
import gao_tam from './imgs/gaotam.jpeg';

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
          <div className="section-2 px-4 py-3 md:px-20 md:py-4">
            <h2 className="ribbon-heading text-center mt-4 md:ml-20">菜肴的简介</h2>
            <div className="w-full md:grid grid-cols-3 items-center gap-4">
              <div className="text-sm md:text-xl leading-4 md:col-span-2">
                <h2 className="main-heading text-xl text-center md:text-6xl mb-10 text-green-600">Tại sao lại gọi là cơm tấm?</h2>
                <p className="mb-6">Ban đầu, Cơm tấm là một món ăn phổ biến của những người nông dân, công nhân nghèo tại vùng đồng bằng sông Cửu Long.</p>
                <p>Vào các năm mùa màng đói kém, nhiều người thường không có đủ gạo ngon để bán, vì vậy họ đã dùng gạo tấm (gạo vỡ) để nấu ăn vì nó luôn có sẵn trong nhà của nhiều hộ gia đình cũng như có tác dụng làm no lâu.</p>
              </div>
              <div className="my-4">
                <img src={rice_field} alt="rice-field" className="mb-4 rounded-xl" />
                <img src={gao_tam} alt="rice-field" className="rounded-xl"/>
              </div>
            </div>
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
