export interface User {
  id: string
  createdAt: string
  updatedAt: string
  email: string
  surname: string
  name: string
  phone: string
  role: string
}

export interface CreateUserDto extends Omit<User, 'id'> { }

export interface UpdateUserDto extends Partial<Omit<User, 'id' | 'createdAt'>> { }