export type UserDto = {
    fullname: string
    email: string
    password: string
    gender: string
}

export type LoginDto = {
    email: string
    password: string
}

export interface IUser {
    _id: string
    email: string
    fullname: string
    password?: string
    gender: 'M' | 'F' | ''
    verified: boolean
}