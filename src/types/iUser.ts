export interface Iuser {
  id: number,
  userInfos: IuserInfos,
  todayScore: number,
  keyData: IkeyData
}

export interface IkeyData {
  calorieCount: number,
  proteinCount: number,
  carbohydrateCount: number,
  lipidCount: number
}

export interface IuserInfos {
  firstName: String,
  lastName: String,
  age: number
}