export interface IMeetup {
  owner: string
  title: string
  date: string
  place: string
  description: string
  program?: IProgram[]
}
interface IProgram {
  meaning: string
  beginsAt: string
  endsAt: string
  title: string
  description: string
}
export interface IUser {
  email: string
  passwordHash: string
  name: string
}
