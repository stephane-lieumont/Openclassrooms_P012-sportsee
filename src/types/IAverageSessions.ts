export interface Iactivity {
  userId: number,
  sessions: Array<IsessionAverage>
}

export interface IsessionAverage {
  day: number,
  sessionLength: number,
}