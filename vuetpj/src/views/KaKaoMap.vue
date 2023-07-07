<template>
  <h1>여기는 카카오맵</h1>
  <div>
    <!-- 카카오맵으로 위치찍기 -->
    <h3><mark>카카오맵</mark>으로 위치찍기</h3>
    <button @click="kkm">지도 표기</button>
    <div>{{ map }}</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      map: '지도 로딩합니다.'
    }
  },
  methods: {
    kkm: function () {
      this.map = '지도 받아오는 중...'
      axios.get('/kkm/' + this.ko).then((res) => (this.en = res.data))
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
