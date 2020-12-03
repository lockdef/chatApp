import firebase from 'firebase/app'
import certificate from './firebaseCertificate.json'

if (!firebase.apps.length) {
  firebase.initializeApp({ ...certificate })
}

const firestore = firebase.firestore()
const auth = firebase.auth()

export { firebase, firestore, auth }
