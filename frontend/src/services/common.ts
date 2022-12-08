import {
	addDoc,
  AddPrefixToKeys,
	collection,
	deleteDoc,
	doc,
	DocumentData,
	DocumentReference,
	getDoc,
	getDocs,
	onSnapshot,
	QueryDocumentSnapshot,
	QuerySnapshot,
	setDoc,
	updateDoc,
  WithFieldValue,
} from 'firebase/firestore'
import { db } from '../libs/firebase'

function parseDoc<T>(doc: QueryDocumentSnapshot<DocumentData>) {
	return {
		id: doc.id,
		...doc.data(),
	} as T
}

function parseDocs<T>(docs: QuerySnapshot<DocumentData>) {
  const results: T[] = []
  docs.forEach(doc => results.push(parseDoc<T>(doc)))
  return results
}

export async function getAll<T>(collectionName: string) {
	const docsRef = collection(db, collectionName)
	const docsSnap = await getDocs(docsRef)
	return parseDocs<T>(docsSnap)
}

export async function getOne<T>(collectionName: string, docId: string) {
	const docRef = doc(db, collectionName, docId)
	const docSnap = await getDoc(docRef)
	return docSnap.exists() ? parseDoc<T>(docSnap) : null
}

type CreateDto = WithFieldValue<DocumentData>

export async function createOne(collectionName: string, createDto: CreateDto, id?: string) {
	if (id) {
		const docRef = doc(db, collectionName, id)
		await setDoc(docRef, createDto)
	} else {
		const docRef = collection(db, collectionName)
		await addDoc(docRef, createDto)
	}
}

type UpdateDto = { [x: string]: any; } & AddPrefixToKeys<string, any>

export async function updateOne(collectionName: string, id: string, updateDto: UpdateDto) {
  const docRef = doc(db, collectionName, id)
  await updateDoc(docRef, updateDto)
}

export async function deleteOne(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id)
  await deleteDoc(docRef)
}

export function collectionListener<T>(collectionName: string, setState?: React.Dispatch<React.SetStateAction<T[]>>) {
  const docsRef = collection(db, collectionName)
  return onSnapshot(docsRef, docsSnap => {
    const docs = parseDocs<T>(docsSnap)
    if (setState) setState(docs)
  })
}

export function documentListener<T>(collectionName: string, id: string, setState?: React.Dispatch<React.SetStateAction<T | null>>) {
  const docRef = doc(db, collectionName, id)
  return onSnapshot(docRef, docSnap => {
    const doc = docSnap.exists() ? parseDoc<T>(docSnap) : null
    if (setState) setState(doc)
  })
}