import { User } from 'firebase/auth'

export interface Auth extends User {}

export interface SignUpDto {
	email: string
	password: string
}

export interface SignUpDtoFromForm extends SignUpDto {
	surname: string
	name: string
	phone: string
	role: string
}

export interface SignInDto {
	email: string
	password: string
}
