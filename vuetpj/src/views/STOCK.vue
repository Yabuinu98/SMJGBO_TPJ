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
      rst: '주식챠트 표시'
    }
  },
  methods: {
    stk() {
      this.rst = '변환중...'
      axios.get('/stk').then((res) => {
        this.rst = res.data
      })
    },
    chart() {
      const ctx = this.$refs.myChart
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.rst[0].itmsNm,
          datasets: [
            {
              label: '# of Votes',
              data: this.rst[0].mkp,
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
