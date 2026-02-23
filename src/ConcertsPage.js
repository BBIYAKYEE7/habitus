import React from 'react';
import { Link } from 'react-router-dom';
import posterImg from './image/poster.png';
import './ConcertsPage.css';

// 정기공연 데이터 - 새 공연 추가 시 여기에 추가하면 됩니다
const concertsData = [
  {
    id: '2025-winter',
    title: '2025 겨울 정기공연',
    date: '2025.12.03',
    location: '문화스포츠관 215호',
    poster: posterImg,
    link: '/concert-info',
    status: 'completed', // upcoming, ongoing, completed
  },
  // 새 공연 추가 예시:
  // {
  //   id: '2026-spring',
  //   title: '2026 봄 정기공연',
  //   date: '2026.05.15',
  //   location: '예정',
  //   poster: newPosterImg,
  //   link: '/concert-info-2026',
  //   status: 'upcoming',
  // },
];

function ConcertsPage() {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'upcoming':
        return <span className="concert-badge concert-badge--upcoming">예정</span>;
      case 'ongoing':
        return <span className="concert-badge concert-badge--ongoing">진행중</span>;
      case 'completed':
        return <span className="concert-badge concert-badge--completed">종료</span>;
      default:
        return null;
    }
  };

  return (
    <div className="concerts-page">
      <div className="concerts-container">
        <header className="concerts-header">
          <Link to="/" className="back-btn">
            ← 홈으로
          </Link>
          <h1>🎸 정기공연</h1>
        </header>

        <div className="concerts-intro">
          <p>HABITUS의 정기공연 기록입니다. 포스터를 클릭하면 상세 정보를 확인할 수 있습니다.</p>
        </div>

        <div className="concerts-grid">
          {concertsData.map((concert) => (
            <Link 
              to={concert.link} 
              key={concert.id} 
              className="concert-card"
            >
              <div className="concert-poster-wrapper">
                {getStatusBadge(concert.status)}
                <img 
                  src={concert.poster} 
                  alt={`${concert.title} 포스터`} 
                  className="concert-poster-img"
                />
                <div className="concert-overlay">
                  <span>자세히 보기</span>
                </div>
              </div>
              <div className="concert-info">
                <h3 className="concert-title">{concert.title}</h3>
                <p className="concert-date">📅 {concert.date}</p>
                <p className="concert-location">📍 {concert.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="concerts-footer">
          <Link to="/" className="footer-link">← 홈으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
}

export default ConcertsPage;
