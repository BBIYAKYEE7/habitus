import React from 'react';
import { useNavigate } from 'react-router-dom';
import posterImg from './image/poster.png';
import './ConcertPopup.css';

const ConcertPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSetlistClick = () => {
    onClose();
    navigate('/setlist');
  };

  const handleConcertInfoClick = () => {
    onClose();
    navigate('/concert-info');
  };

  return (
    <div className="concert-popup-overlay" onClick={handleOverlayClick}>
      <div className="concert-popup">
        <button className="concert-popup__close" onClick={onClose}>
          ×
        </button>
        <div className="concert-popup__content">
          <img 
            src={posterImg} 
            alt="HABITUS 정기공연 포스터" 
            className="concert-popup__poster"
          />
          <div className="concert-popup__info">
            <h2>HABITUS 정기공연</h2>
            <p>아비투스의 정기공연에 여러분을 초대합니다!</p>
            <div className="concert-popup__buttons">
              <button 
                className="concert-popup__setlist-btn"
                onClick={handleSetlistClick}
              >
                🎼 셋리스트 보기
              </button>
              <button 
                className="concert-popup__ticket-btn"
                onClick={handleConcertInfoClick}
              >
                🎫 공연 정보
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertPopup;
