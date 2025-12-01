import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SetlistPage.css';

// 앨범 커버 이미지들 import
import ipchunImg from './setlist_album/ipchun.png';
import butterflyImg from './setlist_album/butterfly.png';
import lostStarsImg from './setlist_album/lost_stars.png';
import freeImg from './setlist_album/free.png';
import img26 from './setlist_album/26.png';
import heanImg from './setlist_album/hean.png';
import tictactoeImg from './setlist_album/tictactoe.png';
import blackImg from './setlist_album/black.png';
import nanchunImg from './setlist_album/nanchun.png';
import nicehutImg from './setlist_album/nicehut.png';
import gardunsangImg from './setlist_album/gardunsang.png';
import sheImg from './setlist_album/she.png';
import gobackImg from './setlist_album/goback.png';
import untitledImg from './setlist_album/untitled.png';

const SetlistPage = () => {
  const [selectedSide, setSelectedSide] = useState('A');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [slideDirection, setSlideDirection] = useState('');
  const [isSongLoading, setIsSongLoading] = useState(false);
  const [showThumbnailAnimation, setShowThumbnailAnimation] = useState(false);

  // 공연 날짜 설정 (2025년 12월 3일 20:30)
  const concertDate = new Date('2025-12-03T20:30:00+09:00');

  // 카운트다운 계산 함수
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = concertDate - now;
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      if (days > 0) {
        return `D-${days} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      } else {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
    } else {
      return '공연이 시작되었습니다!';
    }
  };

  // 카운트다운 타이머 설정
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 초기값 설정
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const setlistPart1 = [
    { 
      song: "입춘", 
      artist: "한로로",
      members: "V.김하영 G.김경렬 김재윤 B.김민서 D.이서연",
      albumImage: ipchunImg,
      albumColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
      icon: "🌸"
    },
    { 
      song: "Butterfly", 
      artist: "러브홀릭스",
      members: "V.윤주빈 김동현 G.변준영 B.김민서 D.소형석 K.최정민",
      albumImage: butterflyImg,
      albumColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      icon: "🦋"
    },
    { 
      song: "Lost Stars", 
      artist: "Adam Levine",
      members: "V.변준영 G.김경렬 변준영 B.김하영 D.김재윤 K.최정민",
      albumImage: lostStarsImg,
      albumColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "⭐"
    },
    { 
      song: "Free", 
      artist: "Ejae",
      members: "V.맹지은 소형석 K.소형석",
      albumImage: freeImg,
      albumColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🕊️"
    },
    { 
      song: "26", 
      artist: "윤하",
      members: "V.윤주빈 G.최민성 김경렬 B.김하영 D.고준호 K.소형석",
      albumImage: img26,
      albumColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      icon: "💫"
    },
    { 
      song: "흰수염고래", 
      artist: "YB",
      members: "V.소형석 G.김경렬 변준영 B.김하영 D.김재윤 K.김도담",
      albumImage: heanImg,
      albumColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🐋"
    },
    { 
      song: "T + Tik Tak Tok", 
      artist: "실리카겔",
      members: "V.최민성 G.최민성 김경렬 B.김하영 D.이서연 K.김동현",
      albumImage: tictactoeImg,
      albumColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "⚡"
    }
  ];

  const setlistPart2 = [
    { 
      song: "검을 현", 
      artist: "이승윤",
      members: "V.최민성 G.최민성 김경렬 B.김민서 D.이서연 K.김동현",
      albumImage: blackImg,
    },
    { 
      song: "난춘", 
      artist: "새소년",
      members: "V.김하영 G.김경렬 B.김하영 D.김재연 K.김동현",
      albumImage: nanchunImg,
    },
    { 
      song: "멋진헛간", 
      artist: "오대천왕",
      members: "V.소형석 G.김경렬 변준영 B.김하영 D.고준호",
      albumImage: nicehutImg,
    },
    { 
      song: "가을 밤에 든 생각", 
      artist: "잔나비",
      members: "V.맹지은 G.변준영 K.소형석",
      albumImage: gardunsangImg,
    },
    { 
      song: "She", 
      artist: "잔나비",
      members: "V.변준영 소형석 K.소형석",
      albumImage: sheImg,
    },
    { 
      song: "고백", 
      artist: "델리스파이스",
      members: "V.김동현 G.김경렬 김재윤 B.김도담 D.이서연 K.김하영",
      albumImage: gobackImg,
    },
    { 
      song: "무제", 
      artist: "브로큰 발렌타인",
      members: "V.최민성 G.최민성 김경렬 B.김하영 D.이서연",
      albumImage: untitledImg,
    }
  ];

  const currentPlaylist = selectedSide === 'A' ? setlistPart1 : setlistPart2;
  const currentSong = currentPlaylist[currentSongIndex];

  const handleSongSelect = (index) => {
    if (index !== currentSongIndex) {
      // 메인 앨범 정보 로딩 애니메이션 적용
      setIsSongLoading(true);
      setTimeout(() => {
        setCurrentSongIndex(index);
        setTimeout(() => {
          setIsSongLoading(false);
        }, 150);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      handleSongSelect(currentSongIndex - 1);
    } else if (selectedSide === 'B') {
      // B-side 첫 곡에서 이전 버튼 누르면 A-side 마지막 곡으로 (로딩 없음)
      setSlideDirection('slide-right');
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedSide('A');
        setCurrentSongIndex(setlistPart1.length - 1);
        setIsTransitioning(false);
        setSlideDirection('');
        setShowThumbnailAnimation(true);
        setTimeout(() => setShowThumbnailAnimation(false), 2000);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentSongIndex < currentPlaylist.length - 1) {
      handleSongSelect(currentSongIndex + 1);
    } else if (selectedSide === 'A') {
      // A-side 마지막 곡에서 다음 버튼 누르면 B-side 첫 곡으로 (로딩 없음)
      setSlideDirection('slide-left');
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedSide('B');
        setCurrentSongIndex(0);
        setIsTransitioning(false);
        setSlideDirection('');
        setShowThumbnailAnimation(true);
        setTimeout(() => setShowThumbnailAnimation(false), 2000);
      }, 300);
    }
  };

  const handleSideChange = (side) => {
    if (side !== selectedSide) {
      // A에서 B로: 왼쪽으로 슬라이드, B에서 A로: 오른쪽으로 슬라이드 (로딩 없음)
      const direction = selectedSide === 'A' && side === 'B' ? 'slide-left' : 'slide-right';
      setSlideDirection(direction);
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedSide(side);
        setCurrentSongIndex(0);
        setIsTransitioning(false);
        setSlideDirection('');
        setShowThumbnailAnimation(true);
        setTimeout(() => setShowThumbnailAnimation(false), 2000);
      }, 300);
    }
  };

  return (
    <div className="setlist-page">
      <div className="setlist-container">
        <header className="setlist-header">
          <Link to="/concert-info" className="back-button">공연정보 알아보기</Link>
          <h1>🎼 2025 HABITUS 정기공연 Tracklist</h1>
          <p className="performance-info">
            📅 2025년 12월 3일 (화) 20:30 📍 문화스포츠관 215호
          </p>
          <div className="countdown-container">
            <span className="countdown-timer">{timeLeft}</span>
          </div>
        </header>

        {/* Side 선택 탭 */}
        <div className="side-tabs">
          <div className="side-tabs-container">
            <button 
              className={`side-tab ${selectedSide === 'A' ? 'active' : ''}`}
              onClick={() => handleSideChange('A')}
            >
              🎵 A-side (7곡)
            </button>
            <button 
              className={`side-tab ${selectedSide === 'B' ? 'active' : ''}`}
              onClick={() => handleSideChange('B')}
            >
              🎵 B-side (7곡)
            </button>
            <div className={`slide-indicator ${selectedSide === 'B' ? 'slide-right' : ''}`}></div>
          </div>
        </div>

        {/* 메인 앨범 디스플레이 */}
        <div className="main-album-display">
          <div className={`content-slider ${isTransitioning ? 'slide-transitioning' : ''}`}>
            {currentSong && (
              <div className={`album-showcase ${isSongLoading ? 'transitioning' : ''}`}>
                <div 
                  className="main-album-cover"
                  style={{ 
                    backgroundImage: currentSong.albumImage ? `url(${currentSong.albumImage})` : currentSong.albumColor,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {!currentSong.albumImage && <div className="album-icon-large">{currentSong.icon}</div>}
                </div>
                <div className="song-info-panel">
                  <h2 className="current-song-title">{currentSong.song}</h2>
                  <p className="current-song-artist">원곡: {currentSong.artist}</p>
                  <p className="current-song-members">{currentSong.members}</p>
                  <div className="song-counter">
                    {currentSongIndex + 1} / {currentPlaylist.length}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 네비게이션 버튼 */}
        <div className="navigation-controls">
          <button 
            className="nav-btn prev-btn"
            onClick={handlePrevious}
            disabled={selectedSide === 'A' && currentSongIndex === 0}
          >
            ⬅️ 이전
          </button>
          <button 
            className="nav-btn next-btn"
            onClick={handleNext}
            disabled={selectedSide === 'B' && currentSongIndex === currentPlaylist.length - 1}
          >
            다음 ➡️
          </button>
        </div>

        {/* 곡 목록 썸네일 */}
        <div className="thumbnails-wrapper">
          <div className={`song-thumbnails ${isTransitioning ? `thumbnails-transitioning ${slideDirection}` : ''} ${showThumbnailAnimation ? 'show-animation' : ''}`}>
            {currentPlaylist.map((song, index) => (
              <div
                key={`${selectedSide}-${index}`}
                className={`song-thumbnail ${index === currentSongIndex ? 'active' : ''}`}
                onClick={() => handleSongSelect(index)}
                style={{ 
                  background: song.albumImage ? `url(${song.albumImage})` : song.albumColor,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '--delay': `${index * 50}ms`
                }}
              >
                <div className="thumbnail-overlay">
                  <div className="thumbnail-icon">{song.albumImage ? '' : song.icon}</div>
                  <div className="thumbnail-info">
                    <span className="thumbnail-number">{index + 1}</span>
                    <span className="thumbnail-title">{song.song}</span>
                    <span className="thumbnail-artist">원곡: {song.artist}</span>
                  </div>
                </div>
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
  );
};

export default SetlistPage;