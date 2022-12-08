import { User } from 'firebase/auth'

export interface Auth extends User {}

export interface SignUpDto {
	email: string
	password: string
}

export interface SignInDto {
	email: string
	password: string
}
