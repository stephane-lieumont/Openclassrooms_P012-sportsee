export interface IUser {
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
  firstname: String,
  lastname: String,
  age: number
}