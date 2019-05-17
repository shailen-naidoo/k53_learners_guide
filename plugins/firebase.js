import * as firebase from 'firebase/app'
import 'firebase/auth'

// eslint-disable-next-line no-console
console.log('Firebase loaded')

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
})

const auth = firebase.auth()

export default { auth, }
