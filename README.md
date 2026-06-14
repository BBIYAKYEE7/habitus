# 🎸 HABITUS 밴드 웹 플랫폼 & 디지털 아카이브

고려대학교 세종캠퍼스 공공정책대학 소속 밴드 동아리 **'HABITUS(하비투스)'**의 공식 웹 사이트 및 정기공연 미디어 아카이빙 플랫폼입니다.

* **운영 서비스 URL:** [https://habitus-kus.vercel.app/](https://habitus-kus.vercel.app/)
* **주요 기능:** 동아리 및 세션 멤버 소개, 정기공연 셋리스트 가이드, 다국어(KO/EN) 토글, 유튜브 연동 공연 영상 아카이브

---

## 🛠️ 기술 스택 및 환경
* **Frontend:** React.js (Create React App 기반)
* **Routing:** React Router DOM (Client-side Routing)
* **Deploy:** Vercel (master 브랜치 푸시 시 자동 배포)
* **Media Storage:** Git LFS (Large File Storage) 연동 완료

---

## 📂 프로젝트 구조 및 핵심 소스코드 안내

* `src/App.js`: 서비스 내 전체 클라이언트 사이드 라우팅 구조 정의 (Main, Setlist, ConcertInfo, Archive, Recruit)
* `src/MainPage.js`: 메인 스크롤 인터랙션, 세션 멤버 아코디언, 다국어 및 테마 영속화(LocalStorage) 처리
* `src/ArchivePage.js`: 정기공연 유튜브 영상 임베드 모달 및 미디어 검색 데이터 핸들링
* `src/SetlistPage.js`: 2025 정기공연 셋리스트 애니메이션 슬라이더 및 카운트다운 타이머 로직
* `src/ConcertPopup.js`: 메인 화면 진입 시 정기공연 정보 및 셋리스트 바로가기를 제공하는 팝업 모달
* `vercel.json`: 외부 브라우저 및 환경에서 비디오 플레이백 오류를 방지하기 위한 커스텀 MIME 타입 헤더 및 URL 인코딩 설정

---

## 📦 패키지 설치 및 실행
```
# 저장소 클론
git clone [https://github.com/BBIYAKYEE7/habitus.git](https://github.com/BBIYAKYEE7/habitus.git)
cd habitus

# 의존성 패키지 설치 (CRA 표준 사양)
npm install

# 로컬 개발 서버 구동 (기본 포트: localhost:3000)
npm start
```

---

## 🔍 프로젝션 빌드 및 검증

* ⚠️ 본 프로젝트는 Vercel에서 배포하고 있어 깃허브 커밋하면 수정사항이 바로 적용됩니다!

---

## ⚠️ 유지보수 및 운영 인수인계 주의사항
	
    * 1.	운영진 및 공고 정보 최신화: 기수가 변경되면 ConcertInfoPage.js와 RecruitPage.js에 하드코딩되어 있는 동아리 대표 연락처(010-3103-0435), 인스타그램 주소(@habitus_kus), 구글 폼 지원 링크 상수를 반드시 수정해야 합니다.
	* 2.	모집 팝업 활성화: MainPage.js 내에 신입 부원 모집용 팝업 마크업과 로직이 주석 처리되어 있습니다. 차기 학기 모집 시 해당 구문의 주석을 해제하고 showRecruitPopup 기본 상태를 조절하여 즉시 재사용할 수 있습니다.
	* 3.	비디오 재생 헤더: vercel.json에 정의된 비디오 스트리밍 사양 헤더는 플레이백 예외를 방지하는 용도이므로 유지보수 시 임의로 변경하거나 삭제하지 마십시오.

---

## 🔄 협업 및 코드 수정 규칙 (Git Workflow)
HABITUS 내부 구성원(운영진 및 개발 부원)들을 위한 코드 기여 안내입니다.
* 자유로운 포크 및 머지 허용: 본 서비스의 기능 개선, 데이터 업데이트(공연 영상 및 신규 셋리스트 추가 등), 버그 수정이 필요할 경우 최초 개발자(김재윤)의 사전 허락이나 별도의 승인 없이 본 저장소를 자유롭게 Fork하여 수정할 수 있습니다.
* 기여 가이드:
	1.	본 레포지토리를 본인의 GitHub 계정으로 Fork합니다.
	2.	Fork한 저장소에서 코드를 수정하고 로컬 빌드(npm run build) 테스트를 통과하는지 확인합니다.
	3.	원본 레포지토리의 master 브랜치를 향해 **Pull Request (PR)**를 보냅니다.
	4.	동아리 내부 검토를 거쳐 전임자의 승인 없이도 부원들이 직접 머징(Merging)을 진행하여 프로덕션에 배포 및 반영하면 됩니다.

---

## 🚀 로컬 개발 환경 구동 방법

### 1. Git LFS 설치 (대용량 미디어 파일 트래킹 필수)
본 레포지토리는 고화질 미디어 자원 백업을 위해 Git LFS를 사용합니다. 프로젝트 클론 전에 로컬 환경에 Git LFS가 활성화되어 있어야 합니다.
```bash
# macOS
brew install git-lfs

# Windows
git lfs install

# ⚖️ License & Copyright
Copyright (c) 2025-2026 HABITUS (Korea University Sejong Campus). All Rights Reserved.
본 프로젝트의 모든 소스코드, 디자인, 에셋, 데이터에 대한 권리는 고려대학교 세종캠퍼스 공공정책대학 밴드 동아리 **'HABITUS(하비투스)'**와 원작자(김재윤 외 개발진)에게 있습니다.
	1.	수정 및 변경 금지 (No Derivatives / ND): HABITUS의 정식 구성원(운영진 및 허가된 개발 부원)이 아닌 외부 제3자는 본 소스코드를 무단으로 수정, 가공, 변형하거나 이를 기반으로 한 2차적 저작물을 작성할 수 없습니다.
	2.	비영리 이용 제한 (Non-Commercial / NC): 본 소스코드는 어떠한 형태로도 상업적 홍보, 유료 서비스 전환 등 영리적 목적으로 이용할 수 없습니다.
	3.	배포 제한: HABITUS 구성원 외의 인원이 본 코드를 복제하여 무단 재배포하는 행위를 금지합니다. 단, 코드의 원본 형태를 유지한 단순 깃허브 참조(Fork 및 링크 공유)는 허용됩니다.