<template>
  <h1>여기는 버스</h1>
  <div>
    <!-- 실시간 버스도착 정보 -->
    <h3><mark>실시간</mark>버스 도착 정보</h3>
    <button @click="dbu">1개 수정하기</button>
    <h4>{{ bus }}</h4>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      bus: '실시간 버스 정보를 받아옵니다.'
    }
  },
  methods: {
    ppg: function () {
      this.en = 'DB데이터 로딩중...'
      axios.get('/ppg/' + this.ko).then((res) => (this.en = res.data))
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
