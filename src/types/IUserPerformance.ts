export interface IUserPerformance {
  userId: number,
  kind: Map<number, string>
}

export interface IDataPerformance {
  value: number,
  kind: number
}

export interface IsessionAverage {
  day: number,
  sessionLength: number,
}