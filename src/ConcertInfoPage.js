import React from 'react';
import { Link } from 'react-router-dom';
import posterImg from './image/poster.png';
import './ConcertInfoPage.css';

const ConcertInfoPage = () => {
  const sponsors = [
    "블랙코일", "올팸의 밤", "CUNIS고대점",
    "호치국수", "잠재정", "썩고기지전소"
  ];

  const performers = [
    { name: "김민준", role: "보컬", description: "감성적인 목소리로 듣는 이의 마음을 사로잡는 메인 보컬" },
    { name: "이서연", role: "보컬", description: "파워풀한 고음과 섬세한 감정 표현이 돋보이는 서브 보컬" },
    { name: "최현우", role: "일렉기타", description: "다양한 장르를 넘나드는 테크닉과 창의적인 연주" },
    { name: "장태윤", role: "베이스", description: "단단한 리듬감으로 밴드의 기초를 다지는 베이시스트" },
    { name: "오성민", role: "드럼", description: "정확한 비트와 다이나믹한 연주로 무대를 이끄는 드러머" },
    { name: "한예린", role: "키보드", description: "다채로운 사운드로 음악에 깊이를 더하는 키보디스트" }
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

          <div className="performers-section">
            <h2>🎭 출연진 소개</h2>
            <div className="performers-grid">
              {performers.map((performer, index) => (
                <div key={index} className="performer-card">
                  <div className="performer-avatar">🎵</div>
                  <h3>{performer.name}</h3>
                  <span className="performer-role">{performer.role}</span>
                  <p>{performer.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sponsors-section">
            <h2>🤝 후원사</h2>
            <p className="sponsors-intro">HABITUS의 정기공연을 후원해주신 분들께 감사드립니다.</p>
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
              <li>음식물 반입은 제한되오니 양해 부탁드립니다</li>
              <li>공연장 내에서는 정숙해 주시기 바랍니다</li>
              <li>응급상황 시 스태프에게 즉시 알려주세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertInfoPage;
