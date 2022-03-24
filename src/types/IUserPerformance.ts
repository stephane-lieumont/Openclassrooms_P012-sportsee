export interface IuserPerformance {
  userId: number,
  kind: Map<number, string>
}

export interface IdataPerformance {
  value: number,
  kind: number
}

export interface IsessionAverage {
  day: number,
  sessionLength: number,
}