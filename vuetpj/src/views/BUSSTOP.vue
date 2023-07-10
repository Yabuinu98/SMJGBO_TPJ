<template>
  <div class="container">
    <h1>버스정류장 실시간 <mark>버스</mark> 도착정보</h1>
    <button class="button" @click="fetchData">표시</button>
    <p class="result" v-html="result"></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      result: '클릭하세요!!'
    }
  },
  methods: {
    fetchData() {
      this.result = '데이터 가져오는 중...'
      axios.get('/bss/').then((res) => {
        this.result = res.data
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

h1{
  font-family: 'Jua', sans-serif;
  font-size: 40px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #f5fc28;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #bbffbe;
}

.result {
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.4;
}
</style>
