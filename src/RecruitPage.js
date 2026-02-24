import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recruitImg from './image/recurit.jpg';
import './RecruitPage.css';

const translations = {
  ko: {
    backBtn: '← 홈으로',
    pageTitle: '📢 공지사항',
    badge: '모집중',
    postTitle: '🎸 HABITUS 2025 신입 부원 모집',
    postDate: '2025.02.23',
    posterAlt: '신입 모집 포스터',
    infoTitle: '모집 안내',
    intro1: '안녕하십니까! 🤗',
    intro2: '공공정책대학 소속 밴드 동아리 아비투스입니다! ❤️🔥',
    highlights: [
      '🔮 대학의 낭만을 느끼고 싶다면!',
      '👨‍👩‍👧‍👦 끈끈한 선후배 관계를 원한다면!',
      '🎸 음악에 대한 열정이 가득하다면!',
      '✏️ 독특한 스펙을 원한다면!',
    ],
    description: '음악을 좋아하고, 한 번쯤 무대에 서보고 싶었다면 아비투스가 기다리고 있습니다! 대학시절 잊지못할 낭만적인 추억을 함께 만들어가길 고대합니다!',
    qualLabel: '✨ 지원 자격',
    qualValue: '단과대 무관, 전공 무관, 학번 무관, 나이 무관',
    qualNote: '(이번학기 입문자는 모집하지 않습니다)',
    periodLabel: '✨ 모집 기간',
    periodValue: '2/23 (월) ~ 3/13 (금)',
    auditionLabel: '✨ 오디션 일정',
    auditionValue: '3/16 (월) ~ 3/20 (금)',
    sessionLabel: '✨ 모집 세션',
    sessionValue: '보컬, 기타, 베이스, 드럼, 키보드',
    methodLabel: '✨ 지원 방법',
    methodValue: '구글폼 작성 후 오디션',
    contactLabel: '📞 문의',
    contactValue: '회장 현민아 (010-3103-0435)',
    instaRef: '🪩 참고: 아비투스 인스타그램',
    applyBtn: '지원하기',
    instaBtn: '인스타그램',
    callBtn: '전화 문의',
    faqTitle: '💬 자주 묻는 질문',
    faq1Q: '밴드부는 시간을 많이 뺏기지 않나요? 학점 챙기기 어려울 것 같아요.',
    faq1A1: '아비투스는 본인이 선택한 1개 이상의 곡을 평균 <strong>일주일에 1번, 1시간씩</strong> 합주합니다.',
    faq1A2: '전 부원이 참여하는 선곡 회의에서 본인이 생각하는 적절한 수의 곡을 선택하시면 시간 관리에 용이합니다.',
    faq1A3: '또한 <strong>시험 기간 전주와 해당 주는 합주를 금지</strong>합니다. 본인이 공부를 열심히 한다면 전혀 어렵지 않습니다!',
    faq1Tip: '💡 학점 4.5 선배 다수 보유 중! 학부 연구생도 있습니다! 얼른 와서 시험 팁과 필기 받아 가세요!',
    faq2Q: '사람들과 못 어울릴까 봐 걱정이에요.',
    faq2A1: '신입 부원과 기존 부원을 적절히 섞어 합주 팀을 꾸릴 예정입니다!',
    faq2A2: '능숙하고 친절한 선배들이 아이스브레이킹도 하고 잘 이끌어 주실 테니 걱정하지 않으셔도 됩니다.',
    faq2A3: '또한 모든 부원이 활발한 동아리 활동을 할 수 있도록 <strong>피크닉, MT, \'친해지길 바래\' 챌린지</strong> 등 다양한 내부 콘텐츠를 준비하고 있습니다.',
    faq3Q: '개인 악기가 본가에 있는데 어떡하죠?',
    faq3A1: '동아리방에 구비된 <strong>공용 악기</strong>를 사용하시면 됩니다!',
    faq3A2: '아비투스는 드럼, 건반은 물론 일렉 기타와 베이스 기타, 이펙터까지 구비하고 있습니다.',
    faq3A3: '여러분의 개인 연습을 응원합니다!! 🎸',
    faqContact: '또 다른 질문이 있으시다면<br/><strong>인스타그램 DM</strong>이나 <strong>회장 현민아 (010-3103-0435)</strong>로 편하게 연락 주세요! 💬',
    footerLink: '← 목록으로 돌아가기',
  },
  en: {
    backBtn: '← Home',
    pageTitle: '📢 Announcements',
    badge: 'Recruiting',
    postTitle: '🎸 HABITUS 2025 New Member Recruitment',
    postDate: '2025.02.23',
    posterAlt: 'Recruitment Poster',
    infoTitle: 'Recruitment Info',
    intro1: 'Hello! 🤗',
    intro2: 'We are HABITUS, a band club under the College of Public Policy! ❤️🔥',
    highlights: [
      '🔮 Want to feel the romance of college life?',
      '👨‍👩‍👧‍👦 Looking for close senior-junior relationships?',
      '🎸 Passionate about music?',
      '✏️ Want unique experiences?',
    ],
    description: 'If you love music and have always wanted to perform on stage, HABITUS is waiting for you! We look forward to creating unforgettable memories together!',
    qualLabel: '✨ Eligibility',
    qualValue: 'Open to all colleges, majors, and years',
    qualNote: '(Beginners starting this semester are not accepted)',
    periodLabel: '✨ Application Period',
    periodValue: 'Feb 23 (Mon) ~ Mar 13 (Fri)',
    auditionLabel: '✨ Audition Schedule',
    auditionValue: 'Mar 16 (Mon) ~ Mar 20 (Fri)',
    sessionLabel: '✨ Recruiting Sessions',
    sessionValue: 'Vocal, Guitar, Bass, Drums, Keyboard',
    methodLabel: '✨ How to Apply',
    methodValue: 'Fill out Google Form, then audition',
    contactLabel: '📞 Contact',
    contactValue: 'President Mina Hyun (010-3103-0435)',
    instaRef: '🪩 Reference: HABITUS Instagram',
    applyBtn: 'Apply Now',
    instaBtn: 'Instagram',
    callBtn: 'Call',
    faqTitle: '💬 FAQ',
    faq1Q: "Won't being in a band take up too much time? I'm worried about my grades.",
    faq1A1: 'HABITUS members practice <strong>once a week for 1 hour</strong> on average for songs they choose.',
    faq1A2: 'You can manage your time effectively by choosing an appropriate number of songs at our song selection meetings.',
    faq1A3: 'Also, <strong>practice is prohibited during exam week and the week before</strong>. If you study hard, it\'s not difficult at all!',
    faq1Tip: '💡 We have many seniors with 4.5 GPA! Come get study tips and notes!',
    faq2Q: "I'm worried I won't fit in with others.",
    faq2A1: 'We will mix new and existing members appropriately when forming practice teams!',
    faq2A2: "Experienced and friendly seniors will help with ice-breaking and guide you, so don't worry.",
    faq2A3: 'We also prepare various activities like <strong>picnics, MT (membership training), "Let\'s Get Close" challenges</strong> so all members can actively participate.',
    faq3Q: "My instrument is at my parents' house. What should I do?",
    faq3A1: 'You can use the <strong>shared instruments</strong> in our club room!',
    faq3A2: 'HABITUS has drums, keyboards, electric guitars, bass guitars, and even effect pedals.',
    faq3A3: 'We support your individual practice! 🎸',
    faqContact: 'If you have other questions,<br/>feel free to contact us via <strong>Instagram DM</strong> or <strong>President Mina Hyun (010-3103-0435)</strong>! 💬',
    footerLink: '← Back to list',
  },
};

function RecruitPage() {
  const [lang] = useState(() => localStorage.getItem('lang') || 'ko');
  const t = translations[lang];

  return (
    <div className="recruit-page">
      <div className="recruit-container">
        <header className="recruit-header">
          <Link to="/" className="back-btn">
            {t.backBtn}
          </Link>
          <h1>{t.pageTitle}</h1>
        </header>

        <article className="recruit-post">
          <div className="post-header">
            <span className="post-badge">{t.badge}</span>
            <h2 className="post-title">{t.postTitle}</h2>
            <div className="post-meta">
              <span className="post-date">{t.postDate}</span>
              <span className="post-author">HABITUS</span>
            </div>
          </div>

          <div className="post-content">
            <div className="post-image-container">
              <img src={recruitImg} alt={t.posterAlt} className="post-image" />
            </div>

            <div className="post-info">
              <h3>{t.infoTitle}</h3>
              
              <div className="info-intro">
                <p>{t.intro1}</p>
                <p>{t.intro2}</p>
              </div>

              <div className="info-highlights">
                {t.highlights.map((h, i) => (
                  <p key={i}>{h}</p>
                ))}
              </div>

              <div className="info-description">
                <p>{t.description}</p>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">{t.qualLabel}</span>
                  <span className="info-value">{t.qualValue}<br/><span className="info-note">{t.qualNote}</span></span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.periodLabel}</span>
                  <span className="info-value">{t.periodValue}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.auditionLabel}</span>
                  <span className="info-value">{t.auditionValue}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.sessionLabel}</span>
                  <span className="info-value">{t.sessionValue}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.methodLabel}</span>
                  <span className="info-value">{t.methodValue}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.contactLabel}</span>
                  <span className="info-value">{t.contactValue}</span>
                </div>
              </div>

              <div className="info-links">
                <p>{t.instaRef} <a href="https://www.instagram.com/habitus_kus" target="_blank" rel="noreferrer">@habitus_kus</a></p>
              </div>
            </div>

            <div className="post-actions">
              <a 
                className="action-btn action-btn--primary" 
                href="https://forms.gle/pKKXoF4TCYLpTJRT9"
                target="_blank"
                rel="noreferrer"
              >
                {t.applyBtn}
              </a>
              <a 
                className="action-btn" 
                href="https://www.instagram.com/habitus_kus"
                target="_blank"
                rel="noreferrer"
              >
                {t.instaBtn}
              </a>
              <a 
                className="action-btn" 
                href="tel:01031030435"
              >
                {t.callBtn}
              </a>
            </div>

            {/* FAQ 섹션 */}
            <div className="post-faq">
              <h3>{t.faqTitle}</h3>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-q">Q</span>
                  <span className="faq-question-text">{t.faq1Q}</span>
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A</span>
                  <div className="faq-answer-content">
                    <p dangerouslySetInnerHTML={{ __html: t.faq1A1 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.faq1A2 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.faq1A3 }} />
                    <div className="faq-tip">{t.faq1Tip}</div>
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-q">Q</span>
                  <span className="faq-question-text">{t.faq2Q}</span>
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A</span>
                  <div className="faq-answer-content">
                    <p dangerouslySetInnerHTML={{ __html: t.faq2A1 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.faq2A2 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.faq2A3 }} />
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-q">Q</span>
                  <span className="faq-question-text">{t.faq3Q}</span>
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A</span>
                  <div className="faq-answer-content">
                    <p dangerouslySetInnerHTML={{ __html: t.faq3A1 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.faq3A2 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.faq3A3 }} />
                  </div>
                </div>
              </div>

              <div className="faq-contact">
                <p dangerouslySetInnerHTML={{ __html: t.faqContact }} />
              </div>
            </div>
          </div>
        </article>

        <div className="recruit-footer">
          <Link to="/" className="footer-link">{t.footerLink}</Link>
        </div>
      </div>
    </div>
  );
}

export default RecruitPage;
