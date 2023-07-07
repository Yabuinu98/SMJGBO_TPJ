<template>
  <div>
    <!-- 파파고번역기 -->
    <h1>파파고<mark>번역기</mark> 훔치기!!!</h1>
    원어:
    <input
      type="text"
      v-model="ko"
      placeholder="번역하실 문장을 입력해주세요."
    />
    <button @click="ppg">번역하기</button>
    <h4>{{ rst }}</h4>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      rst: '언어 번역을 합니다.',
      ko: ''
    }
  },
  methods: {
    ppg() {
      this.rst = '번역 중...'
      axios.get(`/ppg/${encodeURIComponent(this.ko)}`).then((res) => {
        this.rst = res.data
      })
    }
  }
}
</script>

<style scoped>
input {
  display: inline-block;
  text-align: left;
  border-style: none;
  border-bottom: 1px solid black;
  margin: 5px;
}
</style>
