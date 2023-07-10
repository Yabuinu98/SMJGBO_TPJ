<template>
  <h1>여기는 주식</h1>
  <button @click="stk">주식정보이동</button>
  <button @click="chart">챠트 시각화</button>
  <div>
    {{ rst }}
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
  data() {
    return {
      rst: []
    }
  },
  methods: {
    async stk() {
      this.rst = '변환중...'
      try {
        const res = await axios.get('/stk')
        this.rst = res.data
      } catch (error) {
        console.error(error)
        this.rst = '주식 정보를 가져오는 데 실패했습니다.'
      }
    },
    async chart() {
      const ctx = this.$refs.myChart

      try {
        this.rst = [] // 데이터를 가져오기 전에 초기화

        const res = await axios.get('/stk')
        this.rst = res.data

        const labels = this.rst.map((item) => item.label)
        const data = this.rst.map((item) => item.value)

        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: '주식 가격',
                data: data,
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })

        this.$data.myChart = myChart
      } catch (error) {
        console.error(error)
        this.rst = '주식 정보를 가져오는 데 실패했습니다.'
      }
    }
  }
}
</script>

<style>
canvas {
  width: 100%;
  height: 400px;
}
</style>
