import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ArchivePage.css';

const translations = {
  ko: {
    backBtn: '← 홈으로',
    title: '📂 HABITUS Archive',
    subtitle: '아비투스의 소중한 추억을 보관합니다',
    searchPlaceholder: '곡명 또는 아티스트 검색...',
    folders: '개 폴더',
    videos: '개 영상',
    gridView: '그리드 보기',
    listView: '리스트 보기',
    home: '🏠 전체',
    all: '전체',
    preparing: '준비중',
    play: '재생',
    playFull: '전체 영상',
    playDrum: '🥁 드럼 시점',
    noResults: '검색 결과가 없습니다',
    original: '원곡',
    footerNotice1: '⚠️ 모든 자료의 저작권은 HABITUS에 있습니다.',
    footerNotice2: '무단 배포 및 상업적 이용을 금지합니다.',
  },
  en: {
    backBtn: '← Home',
    title: '📂 HABITUS Archive',
    subtitle: 'Preserving precious memories of HABITUS',
    searchPlaceholder: 'Search by song or artist...',
    folders: ' folders',
    videos: ' videos',
    gridView: 'Grid View',
    listView: 'List View',
    home: '🏠 All',
    all: 'All',
    preparing: 'Coming Soon',
    play: 'Play',
    playFull: 'Full Cam',
    playDrum: '🥁 Drum Cam',
    noResults: 'No results found',
    original: 'Original',
    footerNotice1: '⚠️ All materials are copyrighted by HABITUS.',
    footerNotice2: 'Unauthorized distribution and commercial use are prohibited.',
  },
};

// 아카이브 데이터 구조 개선 (하위 폴더를 없애고 단일 파일 리스트로 통합)
const archiveData = {
  folders: [
    {
      id: '2025',
      name: '🎸 2025 정기공연',
      icon: '📁',
      color: '#e2572d',
      // subfolders를 없애고 바로 files를 배치함
      files: [
        { id: 'v1', name: '26', artist: '윤하', type: 'video', youtubeId: 'n4x_9rBl2KM'},
        { id: 'v2', name: 'Butterfly', artist: '러브홀릭스', type: 'video', youtubeId: 'rOKc6yX9O9I'},
        { id: 'v3', name: 'Drowning', artist: 'WOODZ', type: 'video', youtubeId: 'K5JejMSd-Rc'},
        { id: 'v4', name: 'Free', artist: 'Ejae', type: 'video', youtubeId: 'KLnljMY8WYU'},
        { id: 'v5', name: 'Lost Stars', artist: 'Adam Levine', type: 'video', youtubeId: 'NpN75X3JCpg'},
        { id: 'v6', name: 'She', artist: '잔나비', type: 'video', youtubeId: 'Wq7sHcEwVBM4ULcJ'},
        { id: 'v7', name: 'T + Tik Tak Toe', artist: '실리카겔', type: 'video', youtubeId: '94uoV622DDU'},
        { id: 'v8', name: '가을밤에 든 생각', artist: '잔나비', type: 'video', youtubeId: 'tE9kF-eXML0 '},
        { id: 'v9', name: '검을 현', artist: '이승윤', type: 'video', youtubeId: 'quL_xWjSwsI'},
        { id: 'v10', name: '고백', artist: '델리스파이스', type: 'video', youtubeId: 'Ejxb3JJnWEQ'},
        { id: 'v11', name: '난춘', artist: '새소년', type: 'video', youtubeId: 'Gngn3wuTfIo'},
        { id: 'v12', name: '멋진 헛간', artist: '오대천왕', type: 'video', youtubeId: 'HlnVIVqZomQ'},
        { id: 'v13', name: '무제', artist: '브로큰 발렌타인', type: 'video', youtubeId: '_vQUNg36kk8'},
        { id: 'v14', name: '입춘', artist: '한로로', type: 'video', youtubeId: 'F8G4hwRWPjI'},
        { id: 'v15', name: '흰수염고래', artist: 'YB', type: 'video', youtubeId: ''},
      ]
    }
  ]
};

const ArchivePage = () => {
  const [currentPath, setCurrentPath] = useState([]); // [folderId] 형태로 축소
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // playingVideo 상태에 어떤 버전의 비디오를 틀었는지 targetId를 함께 저장
  const [playingVideo, setPlayingVideo] = useState(null); // { file, activeId }
  
  const [lang] = useState(() => localStorage.getItem('lang') || 'ko');
  const t = translations[lang];

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

  // 현재 위치 데이터 구조 변경 (2단계 하위 폴더 제거)
  const getCurrentData = () => {
    if (currentPath.length === 0) {
      return { type: 'folders', data: archiveData.folders };
    } else if (currentPath.length === 1) {
      const folder = archiveData.folders.find(f => f.id === currentPath[0]);
      return { type: 'files', data: folder?.files || [], parent: folder };
    }
    return { type: 'folders', data: [] };
  };

  const currentData = getCurrentData();

  const filteredContent = useMemo(() => {
    const { data } = currentData;
    if (currentData.type === 'files') {
      return data.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentData, searchQuery]);

  // 전체 파일 수 계산 수정
  const totalFiles = archiveData.folders.reduce((acc, folder) => {
    return acc + (folder.files?.length || 0);
  }, 0);

  const handlePlayVideo = (file, youtubeId) => {
    setPlayingVideo({ file, activeId: youtubeId });
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  const handleFolderClick = (folderId) => {
    setPlayingVideo(null);
    setCurrentPath([folderId]);
    setSearchQuery('');
  };

  // 브레드크럼 경로 정보 수정
  const getBreadcrumbs = () => {
    const crumbs = [{ id: 'home', name: t.home, path: [] }];
    
    if (currentPath.length >= 1) {
      const folder = archiveData.folders.find(f => f.id === currentPath[0]);
      if (folder) crumbs.push({ id: folder.id, name: folder.name, path: [folder.id] });
    }
    
    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="archive-page">
      <div className="archive-container">
        <header className="archive-header">
          <div className="header-top">
            <Link to="/" className="back-home-btn">{t.backBtn}</Link>
            <h1>{t.title}</h1>
            <p className="archive-subtitle">{t.subtitle}</p>
          </div>
          
          <div className="search-bar-container">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
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

          <div className="archive-stats">
            <div className="stats-info">
              <span className="stat-item">📁 {archiveData.folders.length}{t.folders}</span>
              <span className="stat-divider">•</span>
              <span className="stat-item">🎬 {totalFiles}{t.videos}</span>
            </div>
            <div className="view-controls">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title={t.gridView}
              >
                <span className="view-icon">▦</span>
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title={t.listView}
              >
                <span className="view-icon">☰</span>
              </button>
            </div>
          </div>
        </header>

        <nav className="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.id}>
              {index > 0 && <span className="breadcrumb-separator">›</span>}
              <button 
                className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                onClick={() => setCurrentPath(crumb.path)}
              >
                {crumb.name}
              </button>
            </React.Fragment>
          ))}
        </nav>

        {currentPath.length === 0 && (
          <div className="category-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t.all}
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

        <main className={`archive-content ${viewMode}`}>
          {currentData.type === 'folders' ? (
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
                    <p className="folder-meta">
                      {`${folder.files?.length || 0}개 영상`}
                    </p>
                  </div>
                  <div className="folder-arrow">→</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`file-grid ${viewMode}`}>
              {filteredContent.length > 0 ? (
                filteredContent.map((file, index) => {
                  // 둘 다 비어있으면 준비중(disabled)
                  const isDisabled = !file.youtubeId && !file.drumYoutubeId;

                  return (
                    <div
                      key={file.id}
                      className={`file-card ${isDisabled ? 'disabled' : ''}`}
                      style={{ 
                        '--file-color': getFileColor(file.type),
                        '--delay': `${index * 0.05}s`
                      }}
                    >
                      <div className="file-icon-wrapper">
                        <span className="file-icon">{getFileIcon(file.type)}</span>
                      </div>
                      <div className="file-info">
                        <h4 className="file-name">{file.name}</h4>
                        <div className="file-meta">
                          <span className="file-artist">🎤 {file.artist}</span>
                          <span className="file-type">
                            {isDisabled ? t.preparing : file.type.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* 버전에 맞게 재생 버튼 분기 처리 */}
                      <div className="play-btn-group">
                        {isDisabled ? (
                          <div className="play-btn disabled">
                            <span className="play-btn-icon">🔒</span>
                            <span className="play-btn-text">{t.preparing}</span>
                          </div>
                        ) : (
                          <>
                            {file.youtubeId && (
                              <button 
                                className="play-btn version-full"
                                onClick={() => handlePlayVideo(file, file.youtubeId)}
                              >
                                <span className="play-btn-icon">▶</span>
                                <span className="play-btn-text">{t.playFull}</span>
                              </button>
                            )}
                            {file.drumYoutubeId && (
                              <button 
                                className="play-btn version-drum"
                                onClick={() => handlePlayVideo(file, file.drumYoutubeId)}
                              >
                                <span className="play-btn-icon">🥁</span>
                                <span className="play-btn-text">{t.playDrum}</span>
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty-state">
                  <span className="empty-icon">📭</span>
                  <p>{t.noResults}</p>
                </div>
              )}
            </div>
          )}
        </main>

        <footer className="archive-footer">
          <p>{t.footerNotice1}</p>
          <p>{t.footerNotice2}</p>
        </footer>
      </div>

      {/* YouTube 임베드 모달 */}
      {playingVideo && (
        <div className="video-modal-overlay" onClick={handleCloseVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={handleCloseVideo}>✕</button>
            <div className="video-header">
              <h3 className="video-title">{playingVideo.file.name}</h3>
              <p className="video-artist">🎤 {playingVideo.file.artist}</p>
            </div>
            <div className="video-wrapper">
              <iframe
                key={playingVideo.activeId}
                src={`https://www.youtube.com/embed/${playingVideo.activeId}?autoplay=1&rel=0`}
                title={playingVideo.file.name}
                className="video-player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchivePage;