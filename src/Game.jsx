import React, { useState } from 'react';
import hints from './data';

const allButtons= [...new Set(hints.map(hint => hint.name))];

const allHints = [...new Set(hints.filter(hint => hint.content !== "Chúc bạn may mắn lần sau 😅😅😅"))]

console.log(allHints)

function Game() {
  const [hintItems, setHintItems] = useState([]);
  const [buttons, setButtons] = useState(allButtons);
  const [tab, setTab] = useState('');
  
  //Filter Function
  const filter = (button) =>{

    const filteredData = hints.filter(hint => hint.name ===  button);
    setHintItems(filteredData)
  }
  
  const handleButton = (button)=> {
    filter(button)
    setTab(button)
    if (tab === button) {
      alert('Ô này đã được mở. Vui lòng chọn ô khác!')
    }
  }
  
  return (
    <div className="game-page">
      <h2 className="text-red-700 font-semibold text-center text-2xl mb-4">TRÒ CHƠI: ĐOÁN TÊN MÓN ĂN</h2>
      <ul>
        <strong className="underline">Luật chơi</strong>: Có tổng cộng 6 gợi ý, các đội lần lượt chọn số từ 1-6 để tìm gợi ý cho câu hỏi <strong className="italic">"Chủ đề hôm nay của nhóm 3 là món ăn gì?"</strong>
        <br />
        Có 2 cách dành chiến thắng:
        <li>1) Trước khi 6 gợi ý được mở, đội nào đoán đúng đáp án sẽ giành chiến thắng</li>
        <li>2) Sau khi cả 6 gợi ý được mở, sẽ có 15 giây để đoán đáp án, đội nào đoán đúng sẽ giành chiến thắng</li>
      </ul>
      <div className="text-center bg-gray-200 border-2 border-gray-500 rounded-md px-4 py-3 mt-6">
        <div className="buttons flex items-center justify-center space-x-4">
          {buttons.map((button, i)=>(
            <button
              key={i}
              type="button"
              onClick={handleButton}
              className={`${tab === button ? 'active' : 'inactive'} px-6 py-4 text-xl font-bold`}
            >
              {button}
            </button>
          ))}
        </div>
        
        <div className="content">
          {hintItems.map((hint) => (
            <div key={hint.id}>
              <p>{hint.content}</p>
              {(hint.imgs).map((img) => (
                <img key={img.id} src={img.img} alt="img" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game
