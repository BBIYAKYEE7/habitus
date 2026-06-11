import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImg from './image/banner.png';
import recruitImg from './image/recurit.jpg';
import posterImg from './image/poster.png';
import './App.css';

// 세션별 멤버 데이터
const sessionMembers = {
  vocal: ['윤주빈', '김동현', '변준영', '맹지은'],
  guitar: ['김경렬', '김재윤', '변준영'],
  bass: ['현민아', '김도담'],
  drum: ['김재윤'],
  keyboard: ['김도담'],
};

// 번역 데이터
const translations = {
  ko: {
    nav: { about: '소개', sessions: '세션', concerts: '정기공연', apply: '지원', archive: '아카이브' },
    hero: {
      badge: '모집 중',
      subtitle: '공공정책대학 밴드 동아리',
      period: '2/23 (월) ~ 3/13 (금) · 오디션 3/16~20',
    },
    about: {
      title: '아비투스는',
      desc: '부원 간의 끈끈한 우정을 중심으로 음악적으로 성장하고, 잊지 못할 추억을 만들어가는 고려대학교 세종캠퍼스 공공정책대학 소속 밴드 동아리입니다.',
      bullets: [
        '대학의 낭만을 느끼고 싶다면',
        '끈끈한 선후배 관계를 원한다면',
        '음악에 대한 열정이 가득하다면',
        '독특한 스펙이 필요하다면',
      ],
    },
    sessions: {
      title: '세션 소개',
      vocal: '보컬', guitar: '일렉기타', bass: '베이스', drum: '드럼', keyboard: '키보드',
    },
    concerts: {
      title: '🎸 정기공연',
      intro: 'HABITUS의 정기공연 기록입니다. 포스터를 클릭하면 상세 정보를 확인할 수 있습니다.',
      badge: '종료',
      concertTitle: '2025 겨울 정기공연',
      viewMore: '자세히 보기',
    },
    apply: {
      title: '지원 방법',
      desc: '구글폼 작성 후, 오디션 진행',
      formBtn: '지원 구글폼',
      instaBtn: '인스타그램 보기',
    },
    footer: {
      contact: 'Contact & Social',
    },
  },
  en: {
    nav: { about: 'About', sessions: 'Sessions', concerts: 'Concerts', apply: 'Apply', archive: 'Archive' },
    hero: {
      badge: 'Recruiting',
      subtitle: 'College of Public Policy Band Club',
      period: 'Feb 23 - Mar 13 · Audition Mar 16-20',
    },
    about: {
      title: 'About HABITUS',
      desc: 'HABITUS is a band club under the College of Public Policy at Korea University Sejong Campus, where members grow musically through strong friendships and create unforgettable memories.',
      bullets: [
        'If you want to feel the romance of college life',
        'If you want close senior-junior relationships',
        'If you are passionate about music',
        'If you need unique experiences',
      ],
    },
    sessions: {
      title: 'Sessions',
      vocal: 'Vocal', guitar: 'Electric Guitar', bass: 'Bass', drum: 'Drum', keyboard: 'Keyboard',
    },
    concerts: {
      title: '🎸 Concerts',
      intro: 'HABITUS concert archive. Click on a poster to view details.',
      badge: 'Ended',
      concertTitle: '2025 Winter Concert',
      viewMore: 'View Details',
    },
    apply: {
      title: 'How to Apply',
      desc: 'Fill out the Google Form, then audition',
      formBtn: 'Application Form',
      instaBtn: 'Instagram',
    },
    footer: {
      contact: 'Contact & Social',
    },
  },
};

function MainPage() {
  const navigate = useNavigate();
  const sectionIds = useMemo(() => ['about', 'sessions', 'concerts', 'apply'], []);
  const snapOrder = useMemo(() => ['hero', ...sectionIds], [sectionIds]);
  const [activeId, setActiveId] = useState('about');
  const [expandedSession, setExpandedSession] = useState(null);
  // 팝업 안 뜨도록 기본 상태를 false로 지정
  const [showRecruitPopup, setShowRecruitPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ko');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  
  const t = translations[lang];

  const toggleSession = (session) => {
    setExpandedSession(expandedSession === session ? null : session);
  };

  const toggleLang = () => {
    const newLang = lang === 'ko' ? 'en' : 'ko';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.Section'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            target.classList.remove('is-leaving');
          } else {
            target.classList.remove('is-visible');
            target.classList.add('is-leaving');
          }
        });

        const all = Array.from(document.querySelectorAll('.Section'));
        const byTop = all
          .map((el) => ({ id: el.id, top: Math.abs(el.getBoundingClientRect().top) }))
          .sort((a, b) => a.top - b.top)[0];
        if (byTop && byTop.id) setActiveId(byTop.id);
      },
      { threshold: [0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const bannerUrl = bannerImg;
  const heroStyle = {
    backgroundImage: `radial-gradient(ellipse at top, rgba(11, 11, 11, 0.2) 0%, rgba(11, 11, 11, 0.6) 60%), url(${bannerUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={`SiteRoot ${theme === 'light' ? 'light-mode' : ''}`}>
      <div className="TopBar">
        <div className="TopBar__inner">
          <div className="Brand" onClick={() => scrollTo('about')}>HABITUS</div>
          <div className="NavSpacer" />
          
          {/* Desktop Nav */}
          <nav className="Nav Nav--desktop" aria-label="상단 내비게이션">
            {sectionIds.map((id) => (
              <button
                key={id}
                className={`Nav__link ${activeId === id ? 'is-active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {t.nav[id]}
              </button>
            ))}
            <Link to="/archive" className="Nav__link">
              {t.nav.archive}
            </Link>
          </nav>

          {/* Settings Buttons */}
          <div className="SettingsBar">
            <button className="SettingsBtn" onClick={toggleLang} aria-label="언어 변경">
              {lang === 'ko' ? 'EN' : '한'}
            </button>
            <button className="SettingsBtn" onClick={toggleTheme} aria-label="테마 변경">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className={`HamburgerBtn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`MobileNav ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="MobileNav__inner">
          {sectionIds.map((id) => (
            <button
              key={id}
              className={`MobileNav__link ${activeId === id ? 'is-active' : ''}`}
              onClick={() => { scrollTo(id); setMobileMenuOpen(false); }}
            >
              {t.nav[id]}
            </button>
          ))}
          <Link 
            to="/archive" 
            className="MobileNav__link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.archive}
          </Link>
          
          {/* Mobile Settings */}
          <div className="MobileNav__settings">
            <button className="SettingsBtn SettingsBtn--large" onClick={toggleLang}>
              {lang === 'ko' ? 'English' : '한국어'}
            </button>
            <button className="SettingsBtn SettingsBtn--large" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </nav>
      </div>

      <header className="Hero Section Section--hero" id="hero" style={heroStyle}>
        <h1 className="Hero__title">HABITUS</h1>
        <p className="Hero__subtitle">{t.hero.subtitle}</p>
        <p className="Hero__period">{t.hero.period}</p>
        {/* 주석 처리된 t.hero.note 제거 완료 */}
      </header>

      <main className="Main" role="main">
        <section id="about" className="Section">
          <h2>{t.about.title}</h2>
          <p>{t.about.desc}</p>
          <ul className="Bullets">
            {t.about.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section id="sessions" className="Section">
          <h2>{t.sessions.title}</h2>
          <div className="Grid">
            <div 
              className={`Card Card--clickable ${expandedSession === 'vocal' ? 'Card--expanded' : ''}`}
              onClick={() => toggleSession('vocal')}
            >
              <span className="Card__title">{t.sessions.vocal}</span>
              <div className={`Card__members ${expandedSession === 'vocal' ? 'is-open' : ''}`}>
                {sessionMembers.vocal.map((name, i) => (
                  <span key={i} className="Card__member">{name}</span>
                ))}
              </div>
            </div>
            <div 
              className={`Card Card--clickable ${expandedSession === 'guitar' ? 'Card--expanded' : ''}`}
              onClick={() => toggleSession('guitar')}
            >
              <span className="Card__title">{t.sessions.guitar}</span>
              <div className={`Card__members ${expandedSession === 'guitar' ? 'is-open' : ''}`}>
                {sessionMembers.guitar.map((name, i) => (
                  <span key={i} className="Card__member">{name}</span>
                ))}
              </div>
            </div>
            <div 
              className={`Card Card--clickable ${expandedSession === 'bass' ? 'Card--expanded' : ''}`}
              onClick={() => toggleSession('bass')}
            >
              <span className="Card__title">{t.sessions.bass}</span>
              <div className={`Card__members ${expandedSession === 'bass' ? 'is-open' : ''}`}>
                {sessionMembers.bass.map((name, i) => (
                  <span key={i} className="Card__member">{name}</span>
                ))}
              </div>
            </div>
            <div 
              className={`Card Card--clickable ${expandedSession === 'drum' ? 'Card--expanded' : ''}`}
              onClick={() => toggleSession('drum')}
            >
              <span className="Card__title">{t.sessions.drum}</span>
              <div className={`Card__members ${expandedSession === 'drum' ? 'is-open' : ''}`}>
                {sessionMembers.drum.map((name, i) => (
                  <span key={i} className="Card__member">{name}</span>
                ))}
              </div>
            </div>
            <div 
              className={`Card Card--clickable ${expandedSession === 'keyboard' ? 'Card--expanded' : ''}`}
              onClick={() => toggleSession('keyboard')}
            >
              <span className="Card__title">{t.sessions.keyboard}</span>
              <div className={`Card__members ${expandedSession === 'keyboard' ? 'is-open' : ''}`}>
                {sessionMembers.keyboard.map((name, i) => (
                  <span key={i} className="Card__member">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="concerts" className="Section Section--concerts">
          <h2>{t.concerts.title}</h2>
          <div className="concerts-intro-box">
            <p>{t.concerts.intro}</p>
          </div>
          <div className="concerts-grid">
            <Link to="/concert-info" className="concert-card">
              <div className="concert-poster-wrapper">
                <span className="concert-badge concert-badge--completed">{t.concerts.badge}</span>
                <img src={posterImg} alt={t.concerts.concertTitle} className="concert-poster-img" />
                <div className="concert-overlay">
                  <span>{t.concerts.viewMore}</span>
                </div>
              </div>
              <div className="concert-info">
                <h3 className="concert-title">{t.concerts.concertTitle}</h3>
                <p className="concert-date">📅 2025.12.03</p>
                <p className="concert-location">📍 {lang === 'ko' ? '문화스포츠관 215호' : 'Culture & Sports Hall 215'}</p>
              </div>
            </Link>
          </div>
        </section>

        <section id="apply" className="Section">
          <h2>{t.apply.title}</h2>
          <p>{t.apply.desc}</p>
          <div className="Actions">
            <a
              className="Button"
              href="https://www.instagram.com/habitus_kus?igsh=MTRhYzBleTVzNXBzOA=="
              target="_blank"
              rel="noreferrer"
            >
              {t.apply.instaBtn}
            </a>
          </div>
        </section>
      </main>

      {/* Right-edge section navigator */}
      <aside className="SideNav" aria-label="섹션 내비게이션">
        {snapOrder.map((id) => (
          <button
            key={id}
            className={`DotBtn ${activeId === id || (id === 'hero' && !sectionIds.includes(activeId)) ? 'is-active' : ''}`}
            onClick={() => scrollTo(id)}
            aria-label={`${id} 섹션으로 이동`}
          />
        ))}
      </aside>

      <footer className="Footer" id="contact">
        <div className="Footer__inner">
          <div className="Footer__title">{t.footer.contact}</div>
          <div className="IconRow">
            <a className="IconBtn" href="tel:01031030435" aria-label="전화">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor"/>
              </svg>
            </a>
            <a className="IconBtn" href="https://www.instagram.com/habitus_kus?igsh=MTRhYzBleTVzNXBzOA==" target="_blank" rel="noreferrer" aria-label="인스타그램">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" fill="currentColor"/>
              </svg>
            </a>
            <a className="IconBtn" href="https://www.youtube.com/@HABITUSBand" target="_blank" rel="noreferrer" aria-label="유튜브">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 7.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.7 4 12 4 12 4h0s-5.7 0-8.6.2c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 9.4 0 11.2v1.6c0 1.8.2 3.7.2 3.7s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1 1.7.2 7.2.2 7.2.2s5.7 0 8.6-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.8.2-3.7v-1.6c0-1.8-.2-3.7-.2-3.7zM9.5 14.8V7.9l6.4 3.45-6.4 3.45z" fill="currentColor"/>
              </svg>
            </a>
            <a className="IconBtn" href="https://forms.gle/pKKXoF4TCYLpTJRT9" target="_blank" rel="noreferrer" aria-label="지원 구글폼">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 1.5V8h4.5" stroke="currentColor" stroke-width="1.8"/>
                <rect x="7" y="11" width="10" height="1.8" fill="currentColor"/>
                <rect x="7" y="15" width="10" height="1.8" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="Footer__bottom">
          <small>© {new Date().getFullYear()} HABITUS, KU Sejong</small>
        </div>
      </footer>

      {/* 팝업 컴포넌트 부분 완벽 주석 처리 */}
      {/* {showRecruitPopup && (
        <div className="Popup__overlay" onClick={() => setShowRecruitPopup(false)}>
          <div className="Popup__content" onClick={(e) => e.stopPropagation()}>
            <button className="Popup__close" onClick={() => setShowRecruitPopup(false)}>×</button>
            <div className="Popup__image-container" onClick={handlePopupClick}>
              <img src={recruitImg} alt={lang === 'ko' ? '신입 모집 공고' : 'Recruitment Notice'} className="Popup__image" />
              <div className="Popup__image-hint">{t.popup.hint}</div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default MainPage;