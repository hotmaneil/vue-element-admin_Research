import Vue from 'vue'
// import { createApp } from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'
const firebaseConfig = {
  apiKey: 'AIzaSyDw270hLcRdYDEr_0E3EUaiRQ2lJc69a-4',
  authDomain: 'learnforwebpush-33240.firebaseapp.com',
  projectId: 'learnforwebpush-33240',
  storageBucket: 'learnforwebpush-33240.appspot.com',
  messagingSenderId: '281838557464',
  appId: '1:281838557464:web:81f6882537cdd2c215a66d',
  measurementId: 'G-SK5HWF2NDC'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// Initialize Firebase Cloud Messaging and get a reference to the service

const messaging = getMessaging(app)

// import { initSW } from './firebase-messaging-sw'
// initSW()

// Add the public key generated from the console here.
// getToken(
//   messaging,
//   { vapidKey: 'BELvBka0W8PECyhri6phamOjKy05LKI5RBogdp76ooD9N5A0wabUNNCdfe5lHEP0Prk0BvM8hXnkfD4-YNbshgQ' }
// ).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     console.log('currentToken', currentToken)
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.')
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err)
// })

// Vue.prototype.$messaging = null
// if (firebase.messaging.isSupported()) {
//   console.log('firebase.messaging.isSupported()')
//   firebase.initializeApp(firebaseConfig)

//   // Retrieve Firebase Messaging object, assign to Vue Object
//   Vue.prototype.$messaging = firebase.messaging()

//   // Add the public key generated from the Firebase console
//   Vue.prototype.$messaging.usePublicVapidKey('BELvBka0W8PECyhri6phamOjKy05LKI5RBogdp76ooD9N5A0wabUNNCdfe5lHEP0Prk0BvM8hXnkfD4-YNbshgQ')
// } else {
//   console.log('No firebase.messaging.isSupported()')
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
