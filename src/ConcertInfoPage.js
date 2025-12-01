import React from 'react';
import { Link } from 'react-router-dom';
import posterImg from './image/poster.png';
import './ConcertInfoPage.css';

const ConcertInfoPage = () => {
  const sponsors = [
    "블랙국밥", "달달한 밤", "CU세종고대점",
    "오천국수", "장짜장", "생고기제작소",
    "숙이네밥상", "순우리 감자탕",
    "목구멍", "라운지 목화", "별산삼겹살", "수작", "이게복음밥",
    "비바리코", "바날라가든", "애상금탕", "나이브", "본가", "우리들 식당",
    "진미방", "술이야", "파랑새 분식", "하이술", "술당포", "치이스",
    "맛나봇식", "원미닭갈비", "어머님 칼국수", "건영통닭", "서창리"
  ];

  return (
    <div className="concert-info-page">
      <div className="concert-info-container">
        <header className="concert-info-header">
          <Link to="/" className="back-button">← 메인으로</Link>
          <h1>🎫 HABITUS 정기공연 정보</h1>
        </header>

        <div className="concert-info-content">
          <div className="poster-section">
            <img src={posterImg} alt="HABITUS 정기공연 포스터" className="concert-poster" />
          </div>

          <div className="event-details">
            <h2>📍 공연 정보</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">📅 공연일시</span>
                <span className="detail-value">2025년 12월 3일 (화) 20:30</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🏢 공연장소</span>
                <span className="detail-value">문화스포츠관 215호</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎟️ 입장료</span>
                <span className="detail-value">무료 관람</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">⏱️ 공연시간</span>
                <span className="detail-value">약 90분 (인터미션 포함)</span>
              </div>
            </div>
          </div>
          <div className="sponsors-section">
            <h2>🤝 후원사</h2>
            <p className="sponsors-intro">HABITUS의 정기공연을 후원해주신 많은 업체분들께 진심으로 감사드립니다.</p>
            <div className="sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="sponsor-item">
                  {sponsor}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h2>📞 문의사항</h2>
            <div className="contact-info">
              <p>📧 이메일: habitus.kus@gmail.com</p>
              <p>📱 인스타그램: @habitus_kus</p>
              <p>📞 전화: 010-3103-0435</p>
            </div>
          </div>

          <div className="notice-section">
            <h2>⚠️ 공지사항</h2>
            <ul className="notice-list">
              <li>공연 시작 10분 전까지 입장해 주세요</li>
              <li>공연 중 사진/영상 촬영은 자유롭게 가능합니다</li>
              <li>공연장 내에서는 정숙해지 마시고 많은 환호 부탁드니다</li>
              <li>응급상황 시 스태프에게 즉시 알려주세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertInfoPage;
