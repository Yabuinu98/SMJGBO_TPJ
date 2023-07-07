<template>
  <div class="container">
    <!-- 파파고 번역기 -->
    <h1 class="title">
      <mark>지금</mark> 가장 <mark>인기있는</mark> 뮤직 리스트
    </h1>
    <div class="controls">
      <select v-model="slt" class="select">
        <option value="20">20개만</option>
        <option value="30">30개만</option>
        <option value="50">50개만</option>
      </select>
      <button @click="getMusicList" class="button">보기</button>
    </div>
    <div v-html="musicList" class="music-list"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      musicList: '인기곡을 불러옵니다.',
      slt: ''
    }
  },
  methods: {
    getMusicList() {
      this.musicList = '가져오는 중...'
      axios.get(`/mml/${this.slt}`).then((res) => {
        this.musicList = res.data
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.title {
  font-size: 35px;
  margin-bottom: 30px;
  padding: 30px;
}
.select {
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
}

.button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #c966f7;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.music-list {
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
}
</style>
