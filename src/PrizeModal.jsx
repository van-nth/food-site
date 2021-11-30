import React, { useCallback, useEffect } from 'react';
import './Modal.css';
import game_prize from './imgs/game_prize.jpeg';

function PrizeModal({ showPrize, setShowPrize }) {
   //Modal is hidden
  

  const toggleModal = () => {
    //Open modal;
    setShowPrize(!showPrize)
  }
  
  //Close modal when hit ESC
  const handleEsc = useCallback(e => {
    if(e.keyCode === 27) setShowPrize(false);
  },[setShowPrize])
  
  useEffect(() => {
    if(showPrize) document.addEventListener('keydown', handleEsc, false)
    return () => {
      document.removeEventListener('keydown', handleEsc, false)
    }
  },[handleEsc, showPrize])

  //prevent page scrolling when modal is opened
  if (showPrize) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
        <div className="modal-content">
          <button className="btn close-modal text-xl" onClick={() => setShowPrize(false)}>X</button>
          <h2 className="main-title text-red-800 font-bold text-xl md:text-4xl text-center">
            <span>✨✨</span>
            游戏奖品
            <span>✨✨</span>
          </h2>
          <img src={game_prize} alt="com_tam" className="my-4" />
        </div>
    </div>
  )
}

export default PrizeModal
