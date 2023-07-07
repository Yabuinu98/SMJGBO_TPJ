<template>
  <div>
    <button @click="bss">표시</button>
    <p v-html="rst"></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      rst: '버스정류장 실시간 시간'
    }
  },
  methods: {
    bss() {
      this.rst = '데이터 가져오는중...'
      axios.get('/bss/').then((res) => {
        this.rst = res.data
      })
    }
  }
}
</script>
