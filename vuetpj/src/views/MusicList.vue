<template>
  <div class="container">
    <h1 class="title">
      <mark>지금</mark> 가장 <mark>인기있는</mark> 뮤직 리스트 ♬
    </h1>
    <div class="controls">
      <select v-model="slt" class="select">
        <option value="20">20개만</option>
        <option value="30">30개만</option>
        <option value="50">50개만</option>
      </select>
      <button @click="getMusicList" class="button">보기</button>
    </div>
    <table v-if="musicList.length" class="music-list">
      <thead>
        <tr>
          <th>제목</th>
          <th>아티스트</th>
          <th>앨범</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="music in musicList" :key="music.id">
          <td>{{ music.title }}</td>
          <td>{{ music.artist }}</td>
          <td>{{ music.album }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="no-results">뮤직 리스트가 없습니다.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      musicList: [],
      slt: ''
    }
  },
  methods: {
    getMusicList() {
      this.musicList = []
      axios.get(`/mml/${this.slt}`).then((res) => {
        this.musicList = res.data
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
h1{
  font-family: 'Jua', sans-serif;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.title {
  font-size: 40px;
  margin-bottom: 30px;
  padding: 30px;
}

.select {
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  width: 100px;
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
  width: 100%;
  border-collapse: collapse;
}

.music-list th,
.music-list td {
  padding: 10px;
  border: 1px solid #ccc;
}

.no-results {
  margin-top: 20px;
  font-size: 16px;
  color: #999;
}
</style>
