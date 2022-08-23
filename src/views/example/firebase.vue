<template>
  <div class="app-container" />
</template>

<script>
import { apiFCM } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
// import { getToken } from './messaging_get_token.js'
import { requestPermission } from './requestPermission.js'
export default {
  name: 'App',
  data() {
    return {
      messaging: null
    }
  },
  created() {
    this.RequestPermission()
    this.getToken()
    this.receiveMessage()
  },
  methods: {

    RequestPermission() {
      requestPermission()
    },

    getToken() {
      // getToken
      // {
      //     vapidKey: 'BELvBka0W8PECyhri6phamOjKy05LKI5RBogdp76ooD9N5A0wabUNNCdfe5lHEP0Prk0BvM8hXnkfD4-YNbshgQ'
      //   }
      // var messaging = firebase.messaging()
      // messaging.usePublicVapidKey('BELvBka0W8PECyhri6phamOjKy05LKI5RBogdp76ooD9N5A0wabUNNCdfe5lHEP0Prk0BvM8hXnkfD4-YNbshgQ')
      // messaging
      // this.messaging.getToken()
      //   .then((currentToken) => {
      //     if (currentToken) {
      //       console.log('currentToken', currentToken)
      //       apiFCM({
      //         registration_token: currentToken
      //       }).then((res) => {
      //         console.log('res', res)
      //       })
      //     } else {
      //       console.log('No registration token available.')
      //     }
      //   })
      //   .catch((err) => {
      //     console.log('retrieving token err', err)
      //   })

      const debug_messaging = getMessaging()
      getToken(
        debug_messaging,
        { vapidKey: 'BELvBka0W8PECyhri6phamOjKy05LKI5RBogdp76ooD9N5A0wabUNNCdfe5lHEP0Prk0BvM8hXnkfD4-YNbshgQ' }
      ).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log('currentToken', currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.')
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })
    },

    receiveMessage() {
      const messaging = getMessaging()
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
        // ...
      })
      // const debug_messaging = getMessaging()
      // debug_messaging.onMessage((payload) => {
      //   console.log('Message receive.', payload)
      //   const notification = payload.notification
      //   this.$message({
      //     dangerouslyUseHTMLString: true,
      //     message: `<strong style="color:#103769;">${notification.title}</strong>`,
      //     duration: 100000,
      //     showClose: true,
      //     customClass: 'FCMalert'
      //   })
      //   console.log('notification', notification)
      // })

      // const messaging = firebase.messaging()
      // messaging.onTokenRefresh(function() {
      //   console.log('onTokenRefresh')
      //   this.try_to_get_token()
      // }).catch(function(err) {
      //   console.log('Notification permission granted', err)
      // })

      // messaging.onMessage(function(payload) {
      //   console.log('Message received. ', payload)
      // })
    }

    // try_to_get_token(messaging) {
    //   messaging.getToken()
    //     .then(function(currentToken) {
    //       if (currentToken) {
    //         console.log('currentToken:', currentToken)
    //       } else {
    //         console.log('No Instance ID token available. Request permission to generate one.')
    //       }
    //     })
    //     .catch(function(err) {
    //       console.log('An error occurred while retrieving token. ', err)
    //     })
    // }
  }
}
</script>

