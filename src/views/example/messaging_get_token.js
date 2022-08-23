// import { initializeApp } from 'firebase/app'
// const firebaseConfig = {
//   apiKey: 'AIzaSyDw270hLcRdYDEr_0E3EUaiRQ2lJc69a-4',
//   authDomain: 'learnforwebpush-33240.firebaseapp.com',
//   projectId: 'learnforwebpush-33240',
//   storageBucket: 'learnforwebpush-33240.appspot.com',
//   messagingSenderId: '281838557464',
//   appId: '1:281838557464:web:81f6882537cdd2c215a66d',
//   measurementId: 'G-SK5HWF2NDC'
// }

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

import { getMessaging, getToken } from 'firebase/messaging'

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging()
// const messaging = getMessaging(app)
getToken(messaging, { vapidKey: 'BELvBka0W8PECyhri6phamOjKy05LKI5RBogdp76ooD9N5A0wabUNNCdfe5lHEP0Prk0BvM8hXnkfD4-YNbshgQ' })
  .then((currentToken) => {
    if (currentToken) {
    // Send the token to your server and update the UI if necessary
      console.log('currentToken', currentToken)
    } else {
    // Show permission request UI
      console.log('No registration token available. Request permission to generate one.')
    // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
  // ...
  })

