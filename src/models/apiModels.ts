export interface Authorized {
    authorized?: boolean
}

export interface User extends  Authorized{
    username: string,
    password: string,
    cookie?: string
}