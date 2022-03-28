import { 
  IsessionActivity,
  IkindData,
  IperformanceData,
  IsessionAverageData
} from "./InterfaceAPI";


export type ActivityProps = {
  activityData:IsessionActivity[],
  load?:boolean,
  delay?:number,
}

export type CustumTooltipProps = {
  active?: boolean,
  payload?: any
}

export type LoaderProps = {
  absolute?: boolean,
  light?: boolean
} 

export type PerformanceProps = {
  listKinds:IkindData[],
  performanceData:IperformanceData[],
  delay?: number,
  load?: boolean
}

export type ScoreProps = {
  score: number,
  delay?: number,
  load?: boolean
}

export type SessionsProps = {
  averageSessionData: IsessionAverageData[],
  delay?: number,
  load?: boolean
}

export type UserInfosProps = {
  value?: number,
  unit?: string,
  icon?: string,
  label?: string,
  color?: string,
  delay?: number,
  load?:boolean
}