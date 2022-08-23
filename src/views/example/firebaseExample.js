import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
})

const auth = getAuth(firebaseApp)
// const db = getFirestore(firebaseApp)
// db.collection('todos').getDocs()
// const todosCol=collection(db,'todos')
// const snapshot=await getDocs(todosCol)

// auth.onAuthStateChanged(user=>{

// })

onAuthStateChanged(auth, user => {
  if (user === null) {
    console.log('No user')
  } else {
    console.log('logged in!')
  }
})
