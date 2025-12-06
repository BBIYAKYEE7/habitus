import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ArchivePage.css';

// 아카이브 데이터 구조 (컴포넌트 외부에 정의하여 불필요한 재생성 방지)
// public 폴더의 파일은 process.env.PUBLIC_URL을 통해 접근
const archiveData = {
  folders: [
    {
      id: '2025',
      name: '🎸 2025 정기공연',
      icon: '🎬',
      color: '#e2572d',
      files: [
        { id: 'v1', name: '26', artist: '윤하', type: 'video', url: '/archive/2025/26.mp4' },
        { id: 'v2', name: 'Butterfly', artist: '러브홀릭스', type: 'video', url: '/archive/2025/Butterfly.mp4' },
        { id: 'v3', name: 'Drowning', artist: 'WOODZ', type: 'video', url: '/archive/2025/Drowning.mp4' },
        { id: 'v4', name: 'Free', artist: 'Ejae', type: 'video', url: '/archive/2025/Free.mp4' },
        { id: 'v5', name: 'Lost Stars', artist: 'Adam Levine', type: 'video', url: '/archive/2025/Lost Stars.mp4' },
        { id: 'v6', name: 'She', artist: '잔나비', type: 'video', url: '/archive/2025/She.mp4' },
        { id: 'v7', name: 'T + Tik Tak Toe', artist: '실리카겔', type: 'video', url: '/archive/2025/T + Tik Tak Toe.mp4' },
        { id: 'v8', name: '검을 현', artist: '이승윤', type: 'video', url: '/archive/2025/검을 현.mp4' },
        { id: 'v9', name: '고백', artist: '델리스파이스', type: 'video', url: '/archive/2025/고백.mp4' },
        { id: 'v10', name: '난춘', artist: '새소년', type: 'video', url: '/archive/2025/난춘.mp4' },
        { id: 'v11', name: '멋진 헛간', artist: '오대천왕', type: 'video', url: '/archive/2025/멋진 헛간.mp4' },
        { id: 'v12', name: '무제', artist: '브로큰 발렌타인', type: 'video', url: '/archive/2025/무제.mp4' },
        { id: 'v13', name: '입춘', artist: '한로로', type: 'video', url: '/archive/2025/입춘.mp4' },
        { id: 'v14', name: '흰수염고래', artist: 'YB', type: 'video', url: '/archive/2025/흰수염고래.mp4' },
      ]
    }
  ]
};

const ArchivePage = () => {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null); // 현재 재생 중인 영상

  // 파일 타입별 아이콘
  const getFileIcon = (type) => {
    switch (type) {
      case 'video': return '🎬';
      case 'audio': return '🎵';
      case 'pdf': return '📄';
      case 'zip': return '📦';
      case 'image': return '🖼️';
      default: return '📁';
    }
  };

  // 파일 타입별 색상
  const getFileColor = (type) => {
    switch (type) {
      case 'video': return '#e2572d';
      case 'audio': return '#43e97b';
      case 'pdf': return '#f093fb';
      case 'zip': return '#4facfe';
      case 'image': return '#ffecd2';
      default: return '#b7ab9a';
    }
  };

  // 검색 및 필터링된 콘텐츠
  const filteredContent = useMemo(() => {
    if (currentFolder) {
      const folder = archiveData.folders.find(f => f.id === currentFolder);
      if (!folder) return [];
      
      return folder.files.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory === 'all') {
      return archiveData.folders.filter(folder =>
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return archiveData.folders.filter(folder => 
      folder.id === selectedCategory &&
      folder.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentFolder, searchQuery, selectedCategory]);

  // 전체 파일 수 계산
  const totalFiles = archiveData.folders.reduce((acc, folder) => acc + folder.files.length, 0);

  // 영상 재생 핸들러
  const handlePlayVideo = (file) => {
    setPlayingVideo(file);
  };

  // 영상 모달 닫기
  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  // 폴더 클릭 핸들러
  const handleFolderClick = (folderId) => {
    setPlayingVideo(null); // 비디오 모달 닫기
    setCurrentFolder(folderId);
    setSearchQuery('');
  };

  // 뒤로가기
  const handleBack = () => {
    setPlayingVideo(null); // 비디오 모달 닫기
    setCurrentFolder(null);
    setSearchQuery('');
  };

  // 현재 폴더 정보
  const currentFolderData = currentFolder 
    ? archiveData.folders.find(f => f.id === currentFolder) 
    : null;

  return (
    <div className="archive-page">
      <div className="archive-container">
        {/* 헤더 */}
        <header className="archive-header">
          <div className="header-top">
            <Link to="/" className="back-home-btn">← 홈으로</Link>
            <h1>📂 HABITUS Archive</h1>
            <p className="archive-subtitle">아비투스의 소중한 추억을 보관합니다</p>
          </div>
          
          {/* 검색바 */}
          <div className="search-bar-container">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="곡명 또는 아티스트 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* 통계 및 뷰 모드 */}
          <div className="archive-stats">
            <div className="stats-info">
              <span className="stat-item">📁 {archiveData.folders.length}개 폴더</span>
              <span className="stat-divider">•</span>
              <span className="stat-item">🎬 {totalFiles}개 영상</span>
            </div>
            <div className="view-controls">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="그리드 보기"
              >
                <span className="view-icon">▦</span>
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="리스트 보기"
              >
                <span className="view-icon">☰</span>
              </button>
            </div>
          </div>
        </header>

        {/* 브레드크럼 네비게이션 */}
        <nav className="breadcrumb">
          <button 
            className={`breadcrumb-item ${!currentFolder ? 'active' : ''}`}
            onClick={handleBack}
          >
            🏠 전체
          </button>
          {currentFolderData && (
            <>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item active">
                {currentFolderData.name}
              </span>
            </>
          )}
        </nav>

        {/* 카테고리 필터 (폴더 목록일 때만) */}
        {!currentFolder && (
          <div className="category-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              전체
            </button>
            {archiveData.folders.map(folder => (
              <button
                key={folder.id}
                className={`filter-btn ${selectedCategory === folder.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(folder.id)}
                style={{ '--filter-color': folder.color }}
              >
                {folder.icon} {folder.id}
              </button>
            ))}
          </div>
        )}

        {/* 컨텐츠 영역 */}
        <main className={`archive-content ${viewMode}`}>
          {!currentFolder ? (
            // 폴더 목록
            <div className={`folder-grid ${viewMode}`}>
              {filteredContent.map((folder, index) => (
                <div
                  key={folder.id}
                  className="folder-card"
                  onClick={() => handleFolderClick(folder.id)}
                  style={{ 
                    '--folder-color': folder.color,
                    '--delay': `${index * 0.1}s`
                  }}
                >
                  <div className="folder-icon-wrapper">
                    <div className="folder-icon">{folder.icon}</div>
                    <div className="folder-glow"></div>
                  </div>
                  <div className="folder-info">
                    <h3 className="folder-name">{folder.name}</h3>
                    <p className="folder-meta">{folder.files.length}개 영상</p>
                  </div>
                  <div className="folder-arrow">→</div>
                </div>
              ))}
            </div>
          ) : (
            // 파일 목록
            <div className={`file-grid ${viewMode}`}>
              {filteredContent.length > 0 ? (
                filteredContent.map((file, index) => (
                  <div
                    key={file.id}
                    className="file-card"
                    onClick={() => handlePlayVideo(file)}
                    style={{ 
                      '--file-color': getFileColor(file.type),
                      '--delay': `${index * 0.05}s`
                    }}
                  >
                    <div className="file-icon-wrapper">
                      <span className="file-icon">{getFileIcon(file.type)}</span>
                      <div className="play-overlay">
                        <span className="play-icon">▶</span>
                      </div>
                    </div>
                    <div className="file-info">
                      <h4 className="file-name">{file.name}</h4>
                      <div className="file-meta">
                        <span className="file-artist">🎤 {file.artist}</span>
                        <span className="file-type">{file.type.toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="play-btn">
                      <span className="play-btn-icon">▶</span>
                      <span className="play-btn-text">재생</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <span className="empty-icon">📭</span>
                  <p>검색 결과가 없습니다</p>
                </div>
              )}
            </div>
          )}
        </main>

        {/* 푸터 */}
        <footer className="archive-footer">
          <p>⚠️ 모든 자료의 저작권은 HABITUS에 있습니다.</p>
          <p>무단 배포 및 상업적 이용을 금지합니다.</p>
        </footer>
      </div>

      {/* 비디오 플레이어 모달 */}
      {playingVideo && (
        <div className="video-modal-overlay" onClick={handleCloseVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={handleCloseVideo}>✕</button>
            <div className="video-header">
              <h3 className="video-title">{playingVideo.name}</h3>
              <p className="video-artist">🎤 {playingVideo.artist}</p>
            </div>
            <div className="video-wrapper">
              <video
                key={playingVideo.id}
                controls
                autoPlay
                className="video-player"
              >
                <source src={playingVideo.url} type="video/mp4" />
                브라우저가 비디오 재생을 지원하지 않습니다.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchivePage;