<template>
  <div>
    <!-- 파파고 번역기 -->
    <h1><mark>지금</mark> 가장 <mark>인기있는</mark> 뮤직 리스트</h1>
    <select v-model="slt">
      <option value="20">20개만</option>
      <option value="30">30개만</option>
      <option value="50">50개만</option>
    </select>
    <button @click="getMusicList">보기</button>
    <div v-html="musicList"></div>
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

<style scoped></style>
