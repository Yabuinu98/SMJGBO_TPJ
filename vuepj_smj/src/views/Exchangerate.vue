<template>
  <div class="exchange-container">
    <form class="exchange-form" @submit.prevent>
      <input
        type="text"
        v-model="inputAmount"
        placeholder="금액을 입력하세요"
        @keyup.enter="calculateExchangeRate"
      />
      <span class="currency">달러 </span>
      <button type="button" @click="calculateExchangeRate">계산</button>
    </form>
    <h1 class="result">{{ result }}</h1>
    <p class="exchange-rate">{{ exchangeRate }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputAmount: '',
      result: '',
      exchangeRate: ''
    }
  },
  mounted() {
    this.displayExchangeRate()
  },
  methods: {
    calculateExchangeRate() {
      const url =
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const exchangeRate = data[0].basePrice
          const calculatedAmount = this.inputAmount * exchangeRate
          this.result = `${this.inputAmount} 달러는 약 ${calculatedAmount.toLocaleString('ko-KR')} 원입니다.`
        })
        .catch((error) => {
          console.error('환율 정보를 가져오는 중 오류가 발생했습니다:', error)
        })
    },
    displayExchangeRate() {
      const url =
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const exchangeRate = data[0].basePrice
          this.exchangeRate = `현재 환율: 1 달러 = ${exchangeRate} 원`
        })
        .catch((error) => {
          console.error('환율 정보를 가져오는 중 오류가 발생했습니다:', error)
        })
    }
  }
}
</script>

<style scoped>
.exchange-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.exchange-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.currency {
  font-size: 16px;
  font-weight: bold;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f987ad;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 15px;
}

button:hover {
  background-color: #ff669d;
}

.result {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.exchange-rate {
  font-size: 16px;
  color: #777;
}

@media (max-width: 480px) {
  input {
    width: 150px;
  }

  button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .result {
    font-size: 20px;
  }

  .exchange-rate {
    font-size: 14px;
  }
}
</style>
