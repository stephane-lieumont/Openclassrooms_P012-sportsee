export interface IuserPerformance {
  userId: number,
  kind: Array<IdataKind>
  data: IdataPerformance[]
}

export interface IdataKind {
  value: number,
  kind: string
}

export interface IdataPerformance {
  value: number,
  kind: number
}
