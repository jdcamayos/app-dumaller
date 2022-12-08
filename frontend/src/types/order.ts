export interface Order {
	id: string
	createdAt: string
	updatedAt: string
	date: string
	hour: string
	status: string
	width: number
	long: number
	height: number
	weight: number
	originAddress: string
	originCity: string
	destinyName: string
	destinyNumber: string
	destinyAddress: string
	destinyCity: string
}

export interface CreateOrderDto extends Omit<Order, 'id' | 'createdAt' | 'updatedAt'> {}

export interface UpdateOrderDto extends Partial<CreateOrderDto> {}