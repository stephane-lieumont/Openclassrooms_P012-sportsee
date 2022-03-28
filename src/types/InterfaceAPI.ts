export interface Iactivity {
  userId: number,
  sessions: IsessionActivity[]
}

export interface IsessionActivity {
  day: Date,
  kilogram: number,
  calories: number
}

export interface IsessionAverage {
  userId: number,
  sessions: IsessionAverageData[]
}

export interface IsessionAverageData {
  day: number,
  sessionLength: number,
}

export interface IuserData {
  id: number,
  userInfos: IuserInfos,
  todayScore: number,
  score: number,
  keyData: IkeyData
}

export interface IuserInfos {
  firstName: String,
  lastName: String,
  age: number
}

export interface IkeyData {
  calorieCount: number,
  proteinCount: number,
  carbohydrateCount: number,
  lipidCount: number
}

export interface IuserPerformance {
  userId: number,
  kind: IkindData[]
  data: IperformanceData[]
}

export interface IkindData {
  value: number,
  kind: string
}

export interface IperformanceData {
  value: number,
  kind: number
}