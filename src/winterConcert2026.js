export const concert2026 = {
  infoPath: '/concert-info/2026',
  setlistPath: '/setlist/2026',
  start: '2026-11-20T19:00:00+09:00',
  listDate: '2026.11.20',
  ko: {
    title: '2026 겨울 정기공연',
    date: '2026년 11월 20일(금) 19:00',
    venue: '메디힐 홀',
  },
  en: {
    title: '2026 Winter Concert',
    date: 'Nov 20, 2026 (Fri) 7:00 PM',
    venue: 'Mediheal Hall',
  },
};

export const sponsors2026 = [
  { name: '꼬치필리아', link: 'https://map.naver.com/p/search/%EA%BC%AC%EC%B9%98%20%ED%95%84%EB%A6%AC%EC%95%84' },
  { name: '라벨메종', link: 'https://map.naver.com/p/entry/place/32415569' },
  { name: '바다이야기', link: 'https://map.naver.com/p/entry/place/1017616635' },
  { name: '씨유 고대점', previousName: 'CU세종고대점', link: 'https://map.naver.com/p/entry/place/1258943503' },
  { name: '달달한 밤', previousName: '달달한 밤', link: 'https://map.naver.com/p/entry/place/1340599744' },
  { name: '인생맥주', link: 'https://map.naver.com/p/entry/place/2049085933' },
  { name: '소반정', link: 'https://map.naver.com/p/entry/place/1613059821' },
  { name: '일미 닭갈비', link: 'https://map.naver.com/p/entry/place/35602911' },
  { name: '목구멍 세종 조치원점', previousName: '목구멍', link: 'https://map.naver.com/p/entry/place/1065940387' },
  { name: '세종 숯불닭갈비 조치원점', link: 'https://map.naver.com/p/entry/place/1233340510' },
  { name: '순우리뼈감자탕', link: 'https://map.naver.com/p/entry/place/1240859263' },
  { name: '거송식당', link: 'https://map.naver.com/p/entry/place/1307426995' },
  { name: '건영통닭', previousName: '건영통닭', link: 'https://map.naver.com/p/entry/place/1116251520' },
  { name: '대솔 정육 생고기', link: 'https://map.naver.com/p/entry/place/2027338658' },
  { name: '도도리 라운지', link: 'https://map.naver.com/p/entry/place/2035621509' },
  { name: '목화', link: 'https://map.naver.com/p/entry/place/1775447459' },
  { name: '만세곱창 조치원점', link: 'https://map.naver.com/p/entry/place/1924670460' },
  { name: '백록담숯불바베큐치킨 조치원점', link: 'https://map.naver.com/p/entry/place/37692598' },
  { name: '비바리코', previousName: '비바리코', link: 'https://map.naver.com/p/entry/place/1585674733' },
  { name: '술이야', previousName: '술이야', link: 'https://map.naver.com/p/entry/place/38443845' },
  { name: '우리들 식당', previousName: '우리들 식당', link: 'https://map.naver.com/p/entry/place/31024135' },
  { name: '진미방마라탕', link: 'https://map.naver.com/p/entry/place/1287015667' },
  { name: '차스', link: 'https://map.naver.com/p/entry/place/1649326693' },
  { name: '카페수작', previousName: '카페수작', link: 'https://map.naver.com/p/entry/place/1079511833' },
  { name: '파랑새분식', previousName: '파랑새 분식', link: 'https://map.naver.com/p/entry/place/17732098' },
  { name: '하이술', previousName: '하이술', link: 'https://map.naver.com/p/entry/place/2064760781' },
  { name: '한솥', link: 'https://map.naver.com/p/entry/place/31077497' },
  { name: '나이브', previousName: '나이브', link: 'https://map.naver.com/p/entry/place/1681457317' },
  { name: '맛나식당', link: 'https://map.naver.com/p/entry/place/17732118' },
  { name: '손문막창', link: 'https://map.naver.com/p/entry/place/31022374' },
  { name: '어머님칼국수', previousName: '어머님 칼국수', link: 'https://map.naver.com/p/entry/place/30857183' },
  { name: '오븐마루', link: 'https://map.naver.com/p/entry/place/2084652686' },
  { name: '이모네수육국밥', link: 'https://map.naver.com/p/entry/place/1208585238' },
  { name: '삼포돌판', link: 'https://map.naver.com/p/search/%EC%82%BC%ED%8F%AC%EB%8F%8C%ED%8C%90' },
];

// Optional artwork is bundled from src/setlist_album when present.
const albumFiles = process.env.NODE_ENV !== 'test'
  ? require.context('./setlist_album', false, /^\.\/2026-(0[1-9]|1[0-3])\.(png|jpe?g|webp)$/)
  : null;
const albums = Object.fromEntries((albumFiles?.keys() ?? []).map((file) => [
  file.slice(0, file.lastIndexOf('.')),
  albumFiles(file),
]));

export const tracks2026 = [
  { song: 'Reality', artist: 'Richard Sanderson', members: 'V.맹지은 G1.류희민 B.김구현 K.김도담 D.김경렬' },
  { song: '좋은밤 좋은꿈', artist: 'Nerd Connection', members: 'V.윤주빈 G1.류희민 G2.박현민 B.김구현 D.김경렬' },
  { song: '아침만 남겨주고', members: 'V.변준영 K.김도담' },
  { song: '만찬가', artist: 'tuki.', members: 'V.맹지은 G1.류희민 B.김구현 K.최정민 D.김경렬' },
  { song: "Don't Look Back in Anger", artist: 'Oasis', members: 'V.윤주빈 G1.김경렬 G2.류희민 B.김구현 K.김도담 D.김범준' },
  { song: 'Toxic Till the End', artist: 'ROSÉ', members: 'V.맹지은 G1.변준영 B.김구현' },
  { song: '금붕어', artist: '한로로', members: 'V.윤주빈 G1.김경렬 G2.변준영 B.김구현 D.김범준' },
  { song: '봄 내음보다 너를', members: 'V.맹지은 K.김도담' },
  { song: '입춘', artist: '한로로', members: 'V.김범준 G1.김경렬 G2.김도담 B.김구현 D.맹지은' },
  { song: "I'll Never Love Again", artist: 'WOODZ', members: 'V.맹지은 G1.김경렬 G2.김도담 B.김구현 K.윤주빈 D.김범준' },
  { song: '알루미늄', artist: 'Broken Valentine', members: 'V.김경렬 G1.류희민 G2.변준영 B.김구현 D.김범준' },
  { song: '히로인', artist: 'back number', members: 'V.김범준 G1.류희민 B.김구현 K.최정민' },
  { song: 'Text Me Merry Christmas', artist: 'Straight No Chaser', members: 'V.변준영, 맹지은 G1.류희민 B.김구현 K.김도담 D.박현민' },
  { song: '???', artist: 'SPECIAL' },
].map((track, index) => ({
  ...track,
  albumImage: albums[`./2026-${String(index + 1).padStart(2, '0')}`],
  albumColor: 'linear-gradient(135deg, #36302d, #171514)',
  icon: '🎵',
}));
