export interface Iactivity {
  userId: number,
  sessions: Array<IsessionActivity>
}

export interface IsessionActivity {
  day: Date,
  kilogram: number,
  calories: number
}