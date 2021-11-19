import React, { useState, useCallback, useEffect } from 'react';
import './Modal.css';
import com_tam from './imgs/comtam-3.jpeg';

export default function Modal() {
  //Modal is hidden
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    //Open modal;
    console.log('modal', modal)
    setModal(!modal)
  }
  
  //Close modal when hit ESC
  const handleEsc = useCallback(e => {
    if(e.keyCode === 27) setModal(false);
  },[setModal])
  
  useEffect(() => {
    if(modal) document.addEventListener('keydown', handleEsc, false)
    return () => {
      document.removeEventListener('keydown', handleEsc, false)
    }
  },[handleEsc, modal])

  //prevent page scrolling when modal is opened
  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  

  return (
    <div className="game-modal text-center">
      <button
        onClick={toggleModal}
        className="mt-16 flex items-center justify-center bg-gray-900 text-white text-xl 
        border-none rounded-md px-4 py-3 mb-4 hover:opacity-10"
      >
        答案
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      { modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
              <button className="btn close-modal text-xl" onClick={toggleModal}>X</button>
              <h2 className="main-title text-green-800 font-bold text-4xl md:text-6xl">碎米飯</h2>
              <span className="main-pinyintext-gray-900 text-2xl md:text-2xl">(suìmǐ fàn: Cơm tấm)</span>
              <img src={com_tam} alt="com_tam" className="my-4" />
            </div>
          </div>
      ) }
    </div>
  )
}



