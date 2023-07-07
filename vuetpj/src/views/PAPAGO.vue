<template>
  <div class="container">
    <!-- 파파고번역기 -->
    <h1 class="title">파파고<mark>번역기</mark> 훔치기!!!</h1>
    <div class="input-container">
      <label for="input-text" class="label">원어:</label>
      <input
        id="input-text"
        type="text"
        v-model="ko"
        class="input"
        placeholder="번역하실 문장을 입력해주세요."
      />
      <button @click="ppg" class="button">번역하기</button>
    </div>
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
.container {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 35px;
  margin-bottom: 70px;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.label {
  font-size: 16px;
  margin-right: 10px;
}

.input {
  border-style: none;
  border-bottom: 1px solid black;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  width: 500px;
}

.button {
  padding: 15px 10px;
  font-size: 16px;
  background-color: #0e73c5;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

h4 {
  font-size: 25px;
  margin-top: 30px;
}
</style>
