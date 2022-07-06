export interface AwardList {
  id: number
  platform: string
  award: string
  image: string
}

export const AWARD_LIST: AwardList[] = [
  {
    id: 1,
    platform: '2018 구글 플레이스토어',
    award: '올해의 앱 최우수상 수상',
    image: '/images/play-store2x.png',
  },
  {
    id: 2,
    platform: '2018 애플 앱스토어',
    award: '오늘의 여행앱 선정',
    image: '/images/badge-apple4x.png',
  },
]
