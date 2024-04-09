import React, { useState } from 'react';
import Modal from './components/Modal'; // 모달 컴포넌트를 가져옵니다.
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open" onClick={openModal}>버튼 열기</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
