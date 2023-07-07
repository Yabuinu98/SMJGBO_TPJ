<template>
  <div class="weather-container">
    <div v-for="item in junpo" :key="item.stationName" class="weather-item">
      <h3>{{ item.stationName }}의 날씨</h3>
      <div class="weather-details">
        <p>오존단계: <span class="grade">{{ item.o3Grade }}</span></p>
        <p>오존농도: <span class="value">{{ item.o3Value }}</span></p>
        <p>미세먼지농도단계(PM10): <span class="grade">{{ item.pm10Grade }}</span></p>
        <p>미세먼지농도(PM10): <span class="value">{{ item.pm10Value }}</span></p>
        <p>일산화탄소농도: <span class="value">{{ item.coValue }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      junpo: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url =
        'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=fecx0uKiCPwbi%2BS94gue%2F6DvlK2DzlSwq7x5uqmM9DY%2FYKOsahSsF2CDfMceMpn21DbN%2BjSCNBaZlExWsE8Yrg%3D%3D&sidoName=%EB%B6%80%EC%82%B0&returnType=JSON'

      axios
        .get(url)
        .then((response) => {
          const rst = response.data.response.body.items
          this.junpo = rst
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #f7f7f7;
}

.weather-item {
  width: 250px;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h3 {
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.weather-details {
  margin-top: 15px;
}

p {
  color: #555;
  font-size: 16px;
  margin-bottom: 8px;
}

.grade {
  color: #ff4081;
  font-weight: bold;
}

.value {
  color: #00bcd4;
  font-weight: bold;
}

.weather-item:nth-child(2n) {
  background-color: #e8eaf6;
}

.weather-item:nth-child(2n) h3 {
  color: #673ab7;
}

.weather-item:nth-child(2n) .grade {
  color: #ff4081;
}

.weather-item:nth-child(2n) .value {
  color: #2196f3;
}
</style>
