import { useEffect, useMemo, useState } from 'react';
import bannerImg from './image/banner.png';
import ConcertPopup from './ConcertPopup';
import './App.css';

function MainPage() {
  const sectionIds = useMemo(() => ['about', 'sessions', 'apply'], []);
  const snapOrder = useMemo(() => ['hero', ...sectionIds], [sectionIds]);
  const [activeId, setActiveId] = useState('about');
  const [isConcertPopupOpen, setIsConcertPopupOpen] = useState(false);

  // 페이지 로드 시 자동으로 팝업 열기
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConcertPopupOpen(true);
    }, 1000); // 1초 후 팝업 열기
    
    return () => clearTimeout(timer);
  }, []);

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

        // Re-evaluate active section by proximity to viewport top
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

  // Removed custom auto-scroll handlers and dwell auto-advance

  const bannerUrl = bannerImg;
  const heroStyle = {
    backgroundImage: `radial-gradient(ellipse at top, rgba(11, 11, 11, 0.2) 0%, rgba(11, 11, 11, 0.6) 60%), url(${bannerUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="SiteRoot">
      <div className="TopBar">
        <div className="TopBar__inner">
          <div className="Brand" onClick={() => scrollTo('about')}>HABITUS</div>
          <div className="NavSpacer" />
          <nav className="Nav" aria-label="상단 내비게이션">
            {sectionIds.map((id) => (
              <button
                key={id}
                className={`Nav__link ${activeId === id ? 'is-active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {id === 'about' && '소개'}
                {id === 'sessions' && '세션'}
                {id === 'apply' && '지원'}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <header className="Hero Section Section--hero" id="hero" style={heroStyle}>
        <div className="Hero__badge">모집 종료</div>
        <h1 className="Hero__title">HABITUS</h1>
        <p className="Hero__subtitle">공공정책대학 밴드 동아리</p>
        <p className="Hero__period">9/1 (Mon) ~ 9/12 (Fri) · 오디션 ~ 9/13 (Sat)</p>
        <p className="Hero__note">현재 신입 선발이 종료되었습니다.</p>
        <button 
          className="Hero__concert-button"
          onClick={() => setIsConcertPopupOpen(true)}
        >
          🎵 정기공연 안내 보기
        </button>
      </header>

      <main className="Main" role="main">
        <section id="about" className="Section">
          <h2>아비투스는</h2>
          <p>
            부원 간의 끈끈한 우정을 중심으로 음악적으로 성장하고, 잊지 못할 추억을
            만들어가는 고려대학교 세종캠퍼스 공공정책대학 소속 밴드 동아리입니다.
          </p>
          <ul className="Bullets">
            <li>대학의 낭만을 느끼고 싶다면</li>
            <li>끈끈한 선후배 관계를 원한다면</li>
            <li>음악에 대한 열정이 가득하다면</li>
            <li>독특한 스펙이 필요하다면</li>
          </ul>
        </section>

        <section id="sessions" className="Section">
          <h2>모집 세션</h2>
          <div className="Grid">
            <div className="Card">보컬 (남/여)</div>
            <div className="Card">일렉기타</div>
            <div className="Card">베이스기타</div>
            <div className="Card">드럼</div>
            <div className="Card">키보드</div>
            <div className="Card">매니저</div>
          </div>
        </section>

        <section id="apply" className="Section">
          <h2>지원 방법</h2>
          <p>구글폼 작성 후, 오디션 진행</p>
          <div className="Actions">
            <a
              className="Button Button--disabled"
              aria-disabled="true"
              href="https://forms.gle/cTJ6TMdN3PER54V87"
              onClick={(e) => e.preventDefault()}
              title="모집이 종료되었습니다"
            >
              지원 구글폼 (마감)
            </a>
            <a
              className="Button"
              href="https://www.instagram.com/habitus_kus?igsh=MTRhYzBleTVzNXBzOA=="
              target="_blank"
              rel="noreferrer"
            >
              인스타그램 보기
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
          <div className="Footer__title">Contact & Social</div>
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
            <a className="IconBtn is-disabled" href="https://forms.gle/cTJ6TMdN3PER54V87" onClick={(e) => e.preventDefault()} aria-label="구글폼 마감">
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
      
      {/* 정기공연 팝업 */}
      <ConcertPopup 
        isOpen={isConcertPopupOpen}
        onClose={() => setIsConcertPopupOpen(false)}
      />
    </div>
  );
}

export default MainPage;
