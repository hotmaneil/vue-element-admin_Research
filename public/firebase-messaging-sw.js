
// export function initSW() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope)
//       }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err)
//       })
//   }
// }

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDw270hLcRdYDEr_0E3EUaiRQ2lJc69a-4',
  authDomain: 'learnforwebpush-33240.firebaseapp.com',
  projectId: 'learnforwebpush-33240',
  storageBucket: 'learnforwebpush-33240.appspot.com',
  messagingSenderId: '281838557464',
  appId: '1:281838557464:web:81f6882537cdd2c215a66d',
  measurementId: 'G-SK5HWF2NDC'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
