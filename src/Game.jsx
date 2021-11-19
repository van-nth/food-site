import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hints from './data';
import CountDown from './CountDown';
import Modal from './Modal';

const allButtons= [...new Set(hints.map(hint => hint.name))];

const allHints = [...new Set(hints.filter(hint => hint.content !== "Chúc bạn may mắn lần sau 😅😅😅"))]

console.log(allHints)

function Game() {
  const [hintItems, setHintItems] = useState([]);
  const [buttons, setButtons] = useState(allButtons);
  const [tab, setTab] = useState('');
  const [showAllHints, setShowAllHints] = useState(false);
  const [showCountDown, setShowCountDown] = useState(false);
  

  
  //Filter Function
  const filter = (button) =>{

    const filteredData = hints.filter(hint => hint.name ===  button);
    setHintItems(filteredData)
  }
  
  
  return (
    <div className="game-page overscroll-y-none">
      <h2 className="text-red-700 font-semibold text-center text-2xl mb-4">TRÒ CHƠI: ĐOÁN TÊN MÓN ĂN</h2>
      <ul>
        <strong className="underline">Luật chơi</strong>: Có tổng cộng 6 gợi ý, các đội lần lượt chọn số từ 1-6 để tìm gợi ý cho câu hỏi <strong className="italic">"Chủ đề hôm nay của nhóm 3 là món ăn gì?"</strong>
        <br />
        Có 2 cách dành chiến thắng:
        <li>1) Trước khi 6 gợi ý được mở, đội nào đoán đúng đáp án sẽ giành chiến thắng</li>
        <li>2) Sau khi cả 6 gợi ý được mở, sẽ có 15 giây để đoán đáp án, đội nào đoán đúng sẽ giành chiến thắng</li>
      </ul>
      <div className="game md:flex justify-between bg-gray-200 border-2 border-gray-500 rounded-md px-4 py-3 mt-6 overflow-hidden">
        <div className="col-1 xl:flex-wrap">
          <div className="buttons flex items-center justify-center space-x-4">
            {buttons.map((button, i)=>(
              <button
                key={i}
                type="button"
                onClick={()=> {
                  filter(button)
                  setTab(button)
                  if (tab === button) {
                    alert('Ô này đã được mở. Vui lòng chọn ô khác!')
                  }
                }}
                className={`${tab === button ? 'active' : 'inactive'}
                px-4 py-2 md:px-6 md:py-4 text-sm xl:text-2xl font-bold border-gray-800 border-2 rounded-md`}
              >
                {button}
              </button>
            ))}
          </div>
          
          <div className="content">
            {hintItems.map((hint) => (
              <div key={hint.id}>
                <p className="text-center text-red-600 my-2 text-sm md:text-2xl xl:text-3xl">{hint.content}</p>
                {(hint.imgs).map((img) => (
                  <div key={img.id} className="flex flex-row items-center justify-center">
                    <img
                      src={img.img}
                      alt="img"
                      className="w-70 h-60"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-2">
          <button
            onClick={() => setShowAllHints(!showAllHints)}
            className="my-4 md:mt-0 flex items-center justify-center bg-gray-900 
            text-white text-xl border-none rounded-md px-4 py-3 mb-4 hover:opacity-10"
          >
            <span>All hints</span> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showAllHints && (
            <ul className="md:w-2/3">
              {allHints.map((v) => (
                <li 
                  key={v.id}
                  className="list-disc text-sm md:text-normal"
                >
                  {v.content}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="col-3 text-center">
          <button
            onClick={() => setShowCountDown(!showCountDown)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          {showCountDown && (
            <CountDown hours={0} minutes={0} seconds={15} />
          )}
         </div>
      </div>
      
      <div className="answer">
        <Modal />
      </div>
      
      <Link to="/overview">
        <div className="next-slide fixed bottom-20 right-4 flex items-center mb-4 cursor-pointer text-sm md:text-xl hover:text-green-600 hover:font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="hidden md:flex">Tiếp theo: Giới thiệu chung về món ăn</p>
        </div>
      </Link>
    </div>
  )
}

export default Game
