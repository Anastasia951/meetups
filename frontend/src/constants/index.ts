export interface IMeetup {
  owner: IUser
  title: string
  date: string
  place: string
  description: string
}

export interface IUser {
  email: string
  token?: string
  passwordHash: string
  name: string
}
