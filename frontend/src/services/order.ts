import { CreateOrderDto, Order, UpdateOrderDto,  } from '../types/order'
import * as api from './common'

const collectionName = 'orders'

export const getOrders = async () => {
	return await api.getAll<Order>(collectionName)
}

export const getOrder = async (id: Order['id']) => {
	return await api.getOne<Order>(collectionName, id)
}

export const createOrder = async (createOrderDto: CreateOrderDto) => {
	return await api.createOne(collectionName, createOrderDto)
}

export const updateOrder = async (id: Order['id'], updateOrderDto: UpdateOrderDto) => {
	return await api.updateOne(collectionName, id, updateOrderDto)
}

export const deleteOrder = async (id: Order['id']) => {
	return await api.deleteOne(collectionName, id)
}

export const ordersListener = (setState?: React.Dispatch<React.SetStateAction<Order[]>>) => {
	return api.collectionListener(collectionName, setState)
}

export const orderListener = (id: Order['id'], setState?: React.Dispatch<React.SetStateAction<Order | null>>) => {
	return api.documentListener(collectionName, id, setState)
}
