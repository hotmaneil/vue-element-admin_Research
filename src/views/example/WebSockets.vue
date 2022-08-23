<!-- 以下失敗沒用 -->
<template>
  <div class="app-container">
    {{ data }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Socket from '@/utils/socket'
export default {
  name: 'WebSockets',
  data() {
    return {
      data: null,
      list: null
    }
  },
  computed: {
    ...mapState({
      wsRes: state => state.ws.wsRes
    })
  },
  watch: {
    wsRes(val) {
      const { StatusCode, data } = val
      StatusCode === 0 && this.$message({ type: 'error', message: '查詢失敗' })
      if (this.list) {
        this.data = data
      }
    }
  },

  methods: {
    handleGetName() {
      Socket.send(
      // ...一些後端要求要傳的資料request，通常會是一包物件{}。
      )
    }
  }
}
</script>

