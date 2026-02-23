import React from 'react';
import { Link } from 'react-router-dom';
import recruitImg from './image/recurit.jpg';
import './RecruitPage.css';

function RecruitPage() {
  return (
    <div className="recruit-page">
      <div className="recruit-container">
        <header className="recruit-header">
          <Link to="/" className="back-btn">
            ← 홈으로
          </Link>
          <h1>📢 공지사항</h1>
        </header>

        <article className="recruit-post">
          <div className="post-header">
            <span className="post-badge">모집중</span>
            <h2 className="post-title">🎸 HABITUS 2025 신입 부원 모집</h2>
            <div className="post-meta">
              <span className="post-date">2025.02.23</span>
              <span className="post-author">HABITUS</span>
            </div>
          </div>

          <div className="post-content">
            <div className="post-image-container">
              <img src={recruitImg} alt="신입 모집 포스터" className="post-image" />
            </div>

            <div className="post-info">
              <h3>모집 안내</h3>
              
              <div className="info-intro">
                <p>안녕하십니까! 🤗</p>
                <p>공공정책대학 소속 밴드 동아리 아비투스입니다! ❤️🔥</p>
              </div>

              <div className="info-highlights">
                <p>🔮 대학의 낭만을 느끼고 싶다면!</p>
                <p>👨‍👩‍👧‍👦 끈끈한 선후배 관계를 원한다면!</p>
                <p>🎸 음악에 대한 열정이 가득하다면!</p>
                <p>✏️ 독특한 스펙을 원한다면!</p>
              </div>

              <div className="info-description">
                <p>
                  음악을 좋아하고, 한 번쯤 무대에 서보고 싶었다면 아비투스가 기다리고 있습니다! 
                  대학시절 잊지못할 낭만적인 추억을 함께 만들어가길 고대합니다!
                </p>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">✨ 지원 자격</span>
                  <span className="info-value">단과대 무관, 전공 무관, 학번 무관, 나이 무관<br/><span className="info-note">(이번학기 입문자는 모집하지 않습니다)</span></span>
                </div>
                <div className="info-item">
                  <span className="info-label">✨ 모집 기간</span>
                  <span className="info-value">2/23 (월) ~ 3/13 (금)</span>
                </div>
                <div className="info-item">
                  <span className="info-label">✨ 오디션 일정</span>
                  <span className="info-value">3/16 (월) ~ 3/20 (금)</span>
                </div>
                <div className="info-item">
                  <span className="info-label">✨ 모집 세션</span>
                  <span className="info-value">보컬, 기타, 베이스기타, 드럼, 키보드</span>
                </div>
                <div className="info-item">
                  <span className="info-label">✨ 지원 방법</span>
                  <span className="info-value">구글폼 작성 후 오디션</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📞 문의</span>
                  <span className="info-value">회장 현민아 (010-3103-0435)</span>
                </div>
              </div>

              <div className="info-links">
                <p>🪩 참고: 아비투스 인스타그램 <a href="https://www.instagram.com/habitus_kus" target="_blank" rel="noreferrer">@habitus_kus</a></p>
              </div>
            </div>

            <div className="post-actions">
              <a 
                className="action-btn action-btn--primary" 
                href="https://forms.gle/pKKXoF4TCYLpTJRT9"
                target="_blank"
                rel="noreferrer"
              >
                지원하기
              </a>
              <a 
                className="action-btn" 
                href="https://www.instagram.com/habitus_kus"
                target="_blank"
                rel="noreferrer"
              >
                인스타그램
              </a>
              <a 
                className="action-btn" 
                href="tel:01031030435"
              >
                전화 문의
              </a>
            </div>

            {/* FAQ 섹션 */}
            <div className="post-faq">
              <h3>💬 자주 묻는 질문</h3>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-q">Q.</span>
                  밴드부는 시간을 많이 뺏기지 않나요? 학점 챙기기 어려울 것 같아요.
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A.</span>
                  <p>
                    아비투스는 본인이 선택한 1개 이상의 곡을 평균 일주일에 1번, 1시간씩 합주합니다. 
                    전 부원이 참여하는 선곡 회의에서 본인이 생각하는 적절한 수의 곡을 선택하시면 시간 관리에 용이합니다. 
                    또한 시험 기간 전주와 해당 주는 합주를 금지합니다. 본인이 공부를 열심히 한다면 전혀 어렵지 않습니다!
                  </p>
                  <p className="faq-highlight">
                    (학점 4.5 선배 다수 보유 중..! 학부 연구생도 있습니다! 얼른 와서 시험 팁과 필기 받아 가세요..!)
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-q">Q.</span>
                  사람들과 못 어울릴까 봐 걱정이에요.
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A.</span>
                  <p>
                    신입 부원과 기존 부원을 적절히 섞어 합주 팀을 꾸릴 예정입니다! 
                    능숙하고 친절한 선배들이 아이스브레이킹도 하고 잘 이끌어 주실 테니 걱정하지 않으셔도 됩니다. 
                    또한 모든 부원이 활발한 동아리 활동을 할 수 있도록 피크닉, MT, '친해지길 바래' 챌린지 등 다양한 내부 콘텐츠를 준비하고 있습니다.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-q">Q.</span>
                  개인 악기가 본가에 있는데 어떡하죠?
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A.</span>
                  <p>
                    동아리방에 구비된 공용 악기를 사용하시면 됩니다! 
                    아비투스는 드럼, 건반은 물론 일렉 기타와 베이스 기타, 이펙터까지 구비하고 있습니다. 
                    여러분의 개인 연습을 응원합니다!!
                  </p>
                </div>
              </div>

              <div className="faq-contact">
                <p>또 다른 질문이 있으시다면 인스타그램 DM이나<br/>회장 현민아 (010-3103-0435)로 편하게 연락 주세요! 💬</p>
              </div>
            </div>
          </div>
        </article>

        <div className="recruit-footer">
          <Link to="/" className="footer-link">← 목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
}

export default RecruitPage;
