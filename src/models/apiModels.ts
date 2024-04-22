export interface Authorized {
    authorized?: boolean
}

export interface User extends  Authorized{
    username: string,
    password: string,
    token?: string
}

export interface SignInResponse extends Authorized{
    token: string,
    username: string
}