export interface MetricList {
  id: number
  metric: number
  unit: string
  subject: string
}

export const METRIC_LIST: MetricList[] = [
  {
    id: 1,
    metric: 700,
    unit: '만 명의',
    subject: '여행자',
  },
  {
    id: 2,
    metric: 100,
    unit: '만 개의',
    subject: '여행 리뷰',
  },
  {
    id: 3,
    metric: 460,
    unit: '만 개의',
    subject: '여행 일정',
  },
]
