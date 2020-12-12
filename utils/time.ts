import { firebase } from '@/infrastructure/firebase'

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

export { serverTimestamp }
