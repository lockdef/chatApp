import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import certificate from './firebaseCertificate.json'

if (!firebase.apps.length) {
  firebase.initializeApp({ ...certificate })
}

const firestore = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, firestore, auth, googleProvider }
