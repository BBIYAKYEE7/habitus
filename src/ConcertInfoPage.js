import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posterImg from './image/poster.png';
import './ConcertInfoPage.css';

const translations = {
  ko: {
    title: '🎫 HABITUS 정기공연 정보',
    backBtn: '← 홈으로',
    setlistBtn: '셋리스트 보기',
    poster: 'HABITUS 정기공연 포스터',
    eventInfo: '📍 공연 정보',
    dateLabel: '📅 공연일시',
    dateValue: '2025년 12월 3일 (화) 20:30',
    venueLabel: '🏢 공연장소',
    venueValue: '문화스포츠관 215호',
    priceLabel: '🎟️ 입장료',
    priceValue: '무료 관람',
    durationLabel: '⏱️ 공연시간',
    durationValue: '약 120분 (인터미션 포함)',
    sponsorTitle: '🤝 후원사',
    sponsorIntro: 'HABITUS의 정기공연을 후원해주신 많은 업체분들께 진심으로 감사드립니다.',
    contactTitle: '📞 문의사항',
    noticeTitle: '⚠️ 공지사항',
    notices: [
      '공연 시작 10분 전까지 입장해 주세요.',
      '공연 중 사진/영상 촬영은 자유롭게 가능합니다.',
      '공연장 내에서는 정숙이 아닌 많은 환호 부탁드니다!',
      '응급상황 시 스태프에게 즉시 알려주세요.',
    ],
  },
  en: {
    title: '🎫 HABITUS Concert Info',
    backBtn: '← Home',
    setlistBtn: 'View Setlist',
    poster: 'HABITUS Concert Poster',
    eventInfo: '📍 Event Info',
    dateLabel: '📅 Date & Time',
    dateValue: 'Dec 3, 2025 (Tue) 8:30 PM',
    venueLabel: '🏢 Venue',
    venueValue: 'Culture & Sports Hall 215',
    priceLabel: '🎟️ Admission',
    priceValue: 'Free',
    durationLabel: '⏱️ Duration',
    durationValue: 'About 120 min (incl. intermission)',
    sponsorTitle: '🤝 Sponsors',
    sponsorIntro: 'Special thanks to all the sponsors who supported our concert.',
    contactTitle: '📞 Contact',
    noticeTitle: '⚠️ Notice',
    notices: [
      'Please arrive at least 10 minutes before the show.',
      'Photography and video recording are allowed.',
      'Feel free to cheer and enjoy the performance!',
      'In case of emergency, please contact staff immediately.',
    ],
  },
};

const ConcertInfoPage = () => {
  const [lang] = useState(() => localStorage.getItem('lang') || 'ko');
  const t = translations[lang];

  const sponsors = [
    { name: "블랙국밥", category: "한식", area: "조치원", link: "https://map.naver.com/p/search/%EB%B8%94%EB%9E%99%EA%B5%AD%EB%B0%A5%20%EC%84%B8%EC%A2%85%EC%A1%B0%EC%B9%98%EC%9B%90/place/2080268478?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012334&locale=ko&svcName=map_pcv5&searchText=%EB%B8%94%EB%9E%99%EA%B5%AD%EB%B0%A5%20%EC%84%B8%EC%A2%85%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "달달한 밤", category: "요리주점", area: "조치원", link: "https://map.naver.com/p/search/%EB%8B%AC%EB%8B%AC%ED%95%9C%20%EB%B0%A4%20%EC%84%B8%EC%A2%85%EC%A1%B0%EC%B9%98%EC%9B%90/place/1340599744?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012335&locale=ko&svcName=map_pcv5&searchText=%EB%8B%AC%EB%8B%AC%ED%95%9C%20%EB%B0%A4%20%EC%84%B8%EC%A2%85%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "CU세종고대점", category: "편의점", area: "조치원", link: "https://map.naver.com/p/search/CU%20%EC%84%B8%EC%A2%85%EA%B3%A0%EB%8C%80%EC%A0%90/place/1258943503?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012335&locale=ko&svcName=map_pcv5&searchText=CU%20%EC%84%B8%EC%A2%85%EA%B3%A0%EB%8C%80%EC%A0%90" },
    { name: "오천국수", category: "국수", area: "조치원", link: "https://map.naver.com/p/search/%EC%98%A4%EC%B2%9C%EA%B5%AD%EC%88%98%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/2014729784?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012339&locale=ko&svcName=map_pcv5&searchText=%EC%98%A4%EC%B2%9C%EA%B5%AD%EC%88%98%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "장짜장", category: "중식당", area: "조치원", link: "https://map.naver.com/p/search/%EC%9E%A5%EC%A7%9C%EC%9E%A5%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1913633478?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012338&locale=ko&svcName=map_pcv5&searchText=%EC%9E%A5%EC%A7%9C%EC%9E%A5%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "생고기제작소", category: "소고기구이", area: "조치원", link: "https://map.naver.com/p/search/%EC%83%9D%EA%B3%A0%EA%B8%B0%EC%A0%9C%EC%9E%91%EC%86%8C%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1091440402?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012339&locale=ko&svcName=map_pcv5&searchText=%EC%83%9D%EA%B3%A0%EA%B8%B0%EC%A0%9C%EC%9E%91%EC%86%8C%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "숙이네밥상", category: "한식", area: "조치원", link: "https://map.naver.com/p/search/%EC%88%99%EC%9D%B4%EB%84%A4%EB%B0%A5%EC%83%81%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/33896261?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012340&locale=ko&svcName=map_pcv5&searchText=%EC%88%99%EC%9D%B4%EB%84%A4%EB%B0%A5%EC%83%81%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "순우리 감자탕", category: "감자탕", area: "조치원", link: "https://map.naver.com/p/search/%EC%88%9C%EC%9A%B0%EB%A6%AC%20%EA%B0%90%EC%9E%90%ED%83%95%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1240859263?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012340&locale=ko&svcName=map_pcv5&searchText=%EC%88%9C%EC%9A%B0%EB%A6%AC%20%EA%B0%90%EC%9E%90%ED%83%95%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "목구멍", category: "육류,고기요리", area: "조치원", link: "https://map.naver.com/p/search/%EB%AA%A9%EA%B5%AC%EB%A9%8D%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1065940387?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012341&locale=ko&svcName=map_pcv5&searchText=%EB%AA%A9%EA%B5%AC%EB%A9%8D%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "라운지 목화", category: "요리주점", area: "세종시", link: "https://map.naver.com/p/search/%EB%9D%BC%EC%9A%B4%EC%A7%80%20%EB%AA%A9%ED%99%94%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1775447459?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012341&locale=ko&svcName=map_pcv5&searchText=%EB%9D%BC%EC%9A%B4%EC%A7%80%20%EB%AA%A9%ED%99%94%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "별산삼겹살", category: "돼지고기구이", area: "세종시", link: "https://map.naver.com/p/search/%EB%B3%84%EC%82%B0%EC%82%BC%EA%B2%B9%EC%82%B4%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/17545092?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012344&locale=ko&svcName=map_pcv5&searchText=%EB%B3%84%EC%82%B0%EC%82%BC%EA%B2%B9%EC%82%B4%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "카페수작", category: "카페", area: "세종시", link: "https://map.naver.com/p/search/%EC%88%98%EC%9E%91%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1079511833?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012344&locale=ko&svcName=map_pcv5&searchText=%EC%88%98%EC%9E%91%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "이게복음밥", category: "한식", area: "세종시", link: "https://map.naver.com/p/search/%EC%9D%B4%EA%B2%8C%EB%B3%B6%EC%9D%8C%EB%B0%A5%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1247908641?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012345&locale=ko&svcName=map_pcv5&searchText=%EC%9D%B4%EA%B2%8C%EB%B3%B6%EC%9D%8C%EB%B0%A5%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "비바리코", category: "종합분식", area: "세종시", link: "https://map.naver.com/p/search/%EB%B9%84%EB%B0%94%EB%A6%AC%EC%BD%94%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1585674733?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012346&locale=ko&svcName=map_pcv5&searchText=%EB%B9%84%EB%B0%94%EB%A6%AC%EC%BD%94%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "바날라가든", category: "카페", area: "세종시", link: "https://map.naver.com/p/search/%EB%B0%94%EB%8B%90%EB%9D%BC%EA%B0%80%EB%93%A0%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1300746560?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012348&locale=ko&svcName=map_pcv5&searchText=%EB%B0%94%EB%8B%90%EB%9D%BC%EA%B0%80%EB%93%A0%20%EC%A1%B0%EC%B9%98%EC%9B%90"},
    { name: "애상금탕", category: "중식당", area: "세종시", link: "https://map.naver.com/p/search/%EC%B0%A8%EC%BD%94%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/2142101300?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012351&locale=ko&svcName=map_pcv5&searchText=%EC%B0%A8%EC%BD%94%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "나이브", category: "카페", area: "세종시", link: "https://map.naver.com/p/search/%EB%82%98%EC%9D%B4%EB%B8%8C%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1681457317?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012351&locale=ko&svcName=map_pcv5&searchText=%EB%82%98%EC%9D%B4%EB%B8%8C%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "본가", category: "한식", area: "세종시", link: "https://map.naver.com/p/search/%EB%B3%B8%EA%B0%80%EC%8B%9D%EB%8B%B9%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/17547294?c=15.00,0,0,0,dh&placePath=/menu&from=map&fromPanelNum=2&timestamp=202512012353&locale=ko&svcName=map_pcv5&searchText=%EB%B3%B8%EA%B0%80%EC%8B%9D%EB%8B%B9%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "우리들 식당", category: "한식", area: "세종시", link: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EB%93%A4%20%EC%8B%9D%EB%8B%B9%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/31024135?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012354&locale=ko&svcName=map_pcv5&searchText=%EC%9A%B0%EB%A6%AC%EB%93%A4%20%EC%8B%9D%EB%8B%B9%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "진미방", category: "한식", area: "세종시", link: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%EB%B0%A9%20%EA%B3%A0%EB%8C%80%EC%A0%90/place/1287015667?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012355&locale=ko&svcName=map_pcv5&searchText=%EC%A7%84%EB%AF%B8%EB%B0%A9%20%EA%B3%A0%EB%8C%80%EC%A0%90" },
    { name: "술이야", category: "맥주, 호프", area: "세종시", link: "https://map.naver.com/p/search/%EC%88%A0%EC%9D%B4%EC%95%BC%20%EA%B3%A0%EB%8C%80%EC%A0%90/place/38443845?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012355&locale=ko&svcName=map_pcv5&searchText=%EC%88%A0%EC%9D%B4%EC%95%BC%20%EA%B3%A0%EB%8C%80%EC%A0%90" },
    { name: "파랑새 분식", category: "종합분식", area: "세종시", link: "https://map.naver.com/p/search/%ED%8C%8C%EB%9E%91%EC%83%88%20%EB%B6%84%EC%8B%9D%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/17732098?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012356&locale=ko&svcName=map_pcv5&searchText=%ED%8C%8C%EB%9E%91%EC%83%88%20%EB%B6%84%EC%8B%9D%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "하이술", category: "포장마차", area: "세종시", link: "https://map.naver.com/p/search/%ED%95%98%EC%9D%B4%EC%88%A0%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/2064760781?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012356&locale=ko&svcName=map_pcv5&searchText=%ED%95%98%EC%9D%B4%EC%88%A0%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "술당포", category: "맥주, 호프", area: "세종시", link: "https://map.naver.com/p/search/%EC%88%A0%EB%8B%B9%ED%8F%AC%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1720519319?c=15.00,0,0,0,dh&isCorrectAnswer=true" },
    { name: "치어스", category: "한식", area: "세종시", link: "https://map.naver.com/p/search/%EC%B9%98%EC%96%B4%EC%8A%A4%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1696133156?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012357&locale=ko&svcName=map_pcv5&searchText=%EC%B9%98%EC%96%B4%EC%8A%A4%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "맛나분식", category: "한식", area: "세종시", link: "https://map.naver.com/p/search/%EB%A7%9B%EB%82%98%EC%8B%9D%EB%8B%B9%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/17732118?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512012359&locale=ko&svcName=map_pcv5&searchText=%EB%A7%9B%EB%82%98%EC%8B%9D%EB%8B%B9%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "원미닭갈비", category: "닭갈비", area: "세종시", link: "https://map.naver.com/p/search/%EC%9B%90%EB%AF%B8%EB%8B%AD%EA%B0%88%EB%B9%84%EA%B3%A0%EB%8C%80%EC%A0%90/place/20013019?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512020000&locale=ko&svcName=map_pcv5&searchText=%EC%9B%90%EB%AF%B8%EB%8B%AD%EA%B0%88%EB%B9%84%EA%B3%A0%EB%8C%80%EC%A0%90" },
    { name: "어머님 칼국수", category: "칼국수, 만두", area: "세종시", link: "https://map.naver.com/p/search/%EC%96%B4%EB%A8%B8%EB%8B%98%20%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/30857183?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512020000&locale=ko&svcName=map_pcv5&searchText=%EC%96%B4%EB%A8%B8%EB%8B%98%20%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "건영통닭", category: "치킨, 닭강정", area: "세종시", link: "https://map.naver.com/p/search/%EA%B1%B4%EC%98%81%ED%86%B5%EB%8B%AD%20%EC%A1%B0%EC%B9%98%EC%9B%90/place/1116251520?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512020001&locale=ko&svcName=map_pcv5&searchText=%EA%B1%B4%EC%98%81%ED%86%B5%EB%8B%AD%20%EC%A1%B0%EC%B9%98%EC%9B%90" },
    { name: "서창리181", category: "전, 빈대떡", area: "세종시", link: "https://map.naver.com/p/entry/place/1737679585?lng=127.2896264&lat=36.6095908&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202512020002&locale=ko&svcName=map_pcv5&entry=pll&searchType=place&c=15.00,0,0,0,dh" }
  ];

  // 링크로 리디렉션하는 함수
  const redirectToLink = (sponsor) => {
    if (sponsor.link) {
      window.open(sponsor.link, '_blank');
    }
  };

  return (
    <div className="concert-info-page">
      <div className="concert-info-container">
        <header className="concert-info-header">
          <h1>{t.title}</h1>
          <div className="header-buttons">
            <Link to="/#concerts" className="back-button">{t.backBtn}</Link>
            <Link to="/setlist" className="setlist-button">{t.setlistBtn}</Link>
          </div>
        </header>

        <div className="concert-info-content">
          <div className="poster-section">
            <img src={posterImg} alt={t.poster} className="concert-poster" />
          </div>

          <div className="event-details">
            <h2>{t.eventInfo}</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">{t.dateLabel}</span>
                <span className="detail-value">{t.dateValue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t.venueLabel}</span>
                <span className="detail-value">{t.venueValue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t.priceLabel}</span>
                <span className="detail-value">{t.priceValue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t.durationLabel}</span>
                <span className="detail-value">{t.durationValue}</span>
              </div>
            </div>
          </div>
          <div className="sponsors-section">
            <h2>{t.sponsorTitle}</h2>
            <p className="sponsors-intro">{t.sponsorIntro}</p>
            <div className="sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <div 
                  key={index} 
                  className="sponsor-item clickable"
                  onClick={() => redirectToLink(sponsor)}
                  title={`${sponsor.name} - ${sponsor.category} (${sponsor.area})`}
                >
                  <div className="sponsor-name">{sponsor.name}</div>
                  <div className="sponsor-category">{sponsor.category}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h2>{t.contactTitle}</h2>
            <div className="contact-info">
              <p>📧 {lang === 'ko' ? '이메일' : 'Email'}: habitus.kus@gmail.com</p>
              <p>📱 {lang === 'ko' ? '인스타그램' : 'Instagram'}: @habitus_kus</p>
              <p>📞 {lang === 'ko' ? '전화' : 'Phone'}: 010-3103-0435</p>
            </div>
          </div>

          <div className="notice-section">
            <h2>{t.noticeTitle}</h2>
            <ul className="notice-list">
              {t.notices.map((notice, i) => (
                <li key={i}>{notice}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertInfoPage;
