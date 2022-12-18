export interface User {
    email: string
    password: string
    first_name: string
    last_name: string
    company_usdot: string | number
}

export interface CreateUser {
    email: string
    password: string
    first_name: string
    last_name: string
    phone: number
    personal_email: string
    active: boolean | string
    note: string
    company: string
}