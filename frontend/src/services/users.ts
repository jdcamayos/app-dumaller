import { collection, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../libs/firebase'
import { CreateUserDto, UpdateUserDto, User } from '../types'

const parseUser = (doc: any): User => {
	return {
		id: doc.id,
		...doc.data(),
	}
}

export const getUsers = async () => {
	const docsRef = collection(db, 'users')
	const docsSnap = await getDocs(docsRef)
	const users: User[] = []
	docsSnap.forEach(doc => users.push(parseUser(doc)))
	return users
}

export const getUser = async (userId: User['id']) => {
	const docRef = doc(db, 'users', userId)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return parseUser(docSnap)
	} else {
		return null
	}
}

export const createUser = async (userId: User['id'], createUserDto: CreateUserDto) => {
	const docRef = doc(db, 'users', userId)
	await setDoc(docRef, createUserDto)
}

export const updateUser = async (userId: User['id'], updateUserDto: UpdateUserDto) => {
	const docRef = doc(db, 'users', userId)
	await updateDoc(docRef, updateUserDto)
}

export const deleteUser = async (userId: User['id']) => {
	const docRef = doc(db, 'users', userId)
	await deleteDoc(docRef)
}

export const getUsersListener = () => {
	const docsRef = collection(db, 'users')
	return onSnapshot(docsRef, docsSnap => {
		const users: User[] = []
		docsSnap.forEach(doc => users.push(parseUser(doc)))
		console.log('Current data', users)
	})
}