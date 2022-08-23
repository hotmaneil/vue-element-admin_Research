// import Vue from 'vue'
// // const wsUrl = process.env.VUE_APP_API_URL
// const wsUrl = 'wss://localhost:44380/ws'
// var socket = new WebSocket(wsUrl)
// const emitter = new Vue({
//   methods: {
//     send(message) {
//       if (socket.readyState === 1) socket.send(JSON.stringify(message))
//     },
//     connect() {
//       socket = new WebSocket(wsUrl)
//       socket.onmessage = function(msg) {
//         emitter.$emit('message', msg.data)
//       }
//       socket.onerror = function(err) {
//         emitter.$emit('error', err)
//       }
//       socket.onclose = function() {
//         emitter.connect()
//       }
//     }
//   }
// })

// emitter.connect()
// export default emitter
