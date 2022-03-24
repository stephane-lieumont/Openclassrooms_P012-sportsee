export interface IsessionAverage {
  day: number,
  sessionLength: number,
}

export interface Iaverage {
  userId: number,
  sessions: IsessionAverage[]
}