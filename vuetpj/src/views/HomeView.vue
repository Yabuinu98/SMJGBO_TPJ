<template>
  <h1>프로젝트: Vuejs로 제작한 웹과 Nodejs 서버를 연동한 풀스택 구현</h1>
  <div>
    <!-- 여기는 민지꺼 들어올 자리 -->
    <h3>여기는 민지꺼 들어올 자리</h3>
    <button @click="min">전송</button>
    <h4>{{ data1 }}</h4>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      data1: '민지꺼 들어올자리'
    }
  },
  methods: {
    min: function () {
      this.en = 'DB데이터 로딩중...'
      // axios.get('/ppg/' + this.ko).then((res) => (this.en = res.data))
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
