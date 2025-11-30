import React from 'react';
import { Link } from 'react-router-dom';
import './SetlistPage.css';

const SetlistPage = () => {
  const setlistPart1 = [
    { song: "입춘", artist: "한로로" },
    { song: "버터플라이", artist: "러브홀릭스" },
    { song: "Lost Stars", artist: "Adam Levine" },
    { song: "Free", artist: "Fjae" },
    { song: "26", artist: "윤하" },
    { song: "힘수염고래", artist: "YB" },
    { song: "T + Tik Tak Tok", artist: "실리카겔" }
  ];

  const setlistPart2 = [
    { song: "검음 현", artist: "이승윤" },
    { song: "난춘", artist: "새소년" },
    { song: "멋진하간", artist: "오대진창" },
    { song: "가을 밤에 든 생각", artist: "잔나비" },
    { song: "She", artist: "잔나비" },
    { song: "고백", artist: "델리스파이스" },
    { song: "무제", artist: "브로큰 발렌타인" },
    { song: "Drowning", artist: "WOODZ" }
  ];

  return (
    <div className="setlist-page">
      <div className="setlist-container">
        <header className="setlist-header">
          <Link to="/" className="back-button">← 메인으로</Link>
          <h1>🎼 HABITUS 정기공연 셋리스트</h1>
          <p className="performance-info">
            📅 2025년 12월 3일 (화) 20:30<br/>
            📍 문화스포츠관 215호
          </p>
        </header>

        <div className="setlist-content">
          <div className="setlist-intro">
            <h2>🎵 2025 HABITUS 정기공연 Tracklist</h2>
            <p>아비투스가 준비한 특별한 15곡의 무대를 만나보세요!</p>
          </div>

          {/* 1부 */}
          <div className="part-section">
            <h3 className="part-title">🎭 1부 (7곡)</h3>
            <div className="songs-list">
              {setlistPart1.map((item, index) => (
                <div key={`part1-${index}`} className="song-item">
                  <div className="song-number">{index + 1}</div>
                  <div className="song-details">
                    <h3 className="song-title">{item.song}</h3>
                    <p className="song-artist">원곡: {item.artist}</p>
                  </div>
                  <div className="song-icon">🎤</div>
                </div>
              ))}
            </div>
          </div>

          {/* 인터미션 */}
          <div className="intermission">
            <h3>⏸️ 인터미션 (15분)</h3>
            <p>잠시 휴식 후 더욱 화려한 2부가 시작됩니다!</p>
          </div>

          {/* 2부 */}
          <div className="part-section">
            <h3 className="part-title">🎭 2부 (8곡)</h3>
            <div className="songs-list">
              {setlistPart2.map((item, index) => (
                <div key={`part2-${index}`} className="song-item">
                  <div className="song-number">{index + 8}</div>
                  <div className="song-details">
                    <h3 className="song-title">{item.song}</h3>
                    <p className="song-artist">원곡: {item.artist}</p>
                  </div>
                  <div className="song-icon">🎵</div>
                </div>
              ))}
            </div>
          </div>

          <div className="setlist-footer">
            <div className="special-note">
              <h3>🌟 Special Thanks</h3>
              <p>모든 부원들의 열정과 노력으로 만들어진 무대입니다.<br/>
                 많은 관심과 응원 부탁드립니다!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetlistPage;
