export interface User {
  id: number
  name: string
  password: string
  token: string
}

export type UserPartial = Partial<User>

export type UserWithNP = Omit<User, 'id' | 'token'>