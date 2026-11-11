# 모바일 정기공연 표시 수정 배포 요청

저장소: https://github.com/BBIYAKYEE7/habitus
수정 브랜치: `codex/fix-mobile-concerts`
푸시된 포크: https://github.com/jjuneyoungbyun-art/habitus/tree/codex/fix-mobile-concerts
운영 사이트: https://habitus-kus.vercel.app/

이 브랜치를 검토하고 master에 병합한 뒤 Vercel 운영 배포를 확인해 주세요.
현재 브랜치는 운영 master를 기준으로 생성했으며, 배포 자체는 아직 실행하지 않았습니다.
기존 포스터, 공연 데이터 및 데스크톱 디자인을 유지해 주세요.

## 원인과 수정

- 운영 사이트 390×844 화면에서 재현: 공연 섹션 높이 약 1513px, opacity 0, is-leaving 상태.
- IntersectionObserver가 섹션 전체의 60% 교차를 요구해 긴 모바일 섹션이 계속 숨겨졌습니다.
- threshold를 0으로 바꾸어 화면 진입/이탈 시 표시 상태를 갱신합니다.
- SideNav 기본 규칙 뒤에 모바일 숨김 규칙을 배치해 작은 화면에서 점 내비게이션이 다시 표시되던 CSS 우선순위 문제를 해결했습니다. 모바일은 햄버거 메뉴로 이동합니다.
- 기본 CRA 예제 테스트를 공연 재진입 및 메뉴/점 내비게이션 회귀 테스트 2개로 교체했습니다.
- CRA Jest의 React Router 7 패키지 해석을 위한 매핑과 TextEncoder/TextDecoder 설정을 추가했습니다.

## 수행한 검증

- `npm test -- --watchAll=false --runInBand`: 테스트 2개 통과.
- 브라우저 모바일 화면 390×844, 360×640에서 메뉴로 정기공연 이동 후 opacity 1 확인.
- 2026 공연 카드에서 상세 페이지 이동 확인.
- 데스크톱 1280×800에서 오른쪽 점 내비게이션 이동 후 opacity 1 확인.
- 실제 iOS/Android 기기 검증은 아직 수행하지 않았습니다.
- 기존 MainPage 미사용 변수 경고로 `CI=true` 빌드는 실패합니다. 일반 프로덕션 빌드 결과를 확인하고, 배포 환경이 경고를 오류로 처리한다면 이 기존 경고도 정리해 주세요.

## 배포 절차

1. `jjuneyoungbyun-art/habitus` 포크의 수정 브랜치를 가져오고 원본 `BBIYAKYEE7/habitus`의 master와 diff를 확인합니다. 사용자 작업을 덮어쓰거나 강제 푸시하지 마세요. 현재 계정은 원본 저장소 쓰기 권한이 없으므로 포크에 푸시했습니다.
2. 의존성이 없다면 `npm ci` 후 위 테스트와 `npm run build`를 실행합니다.
3. 저장소 협업 방식에 맞게 master 대상 PR을 병합합니다. Vercel의 실제 Production Branch도 확인합니다.
4. 자동 배포 상태를 확인하고 실패하면 빌드 로그로 원인을 해결합니다.
5. 운영 URL에서 작은 모바일 화면의 스크롤과 메뉴 이동, 2025/2026 카드 상세 이동, 데스크톱 오른쪽 점 이동을 확인합니다. 가능하면 실제 Safari/Chrome 모바일에서도 확인합니다.
6. 배포 커밋 SHA, 운영 URL, 배포 상태 및 확인 결과를 사용자에게 전달합니다.
