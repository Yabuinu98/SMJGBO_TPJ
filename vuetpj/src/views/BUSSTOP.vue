<template>
  <div>
    <p>{{ items }}</p>
  </div>
</template>

<script>
import { XMLParser } from 'fast-xml-parser'
import axios from 'axios'

export default {
  data() {
    return {
      items: null
    }
  },
  mounted() {
    const url = 'http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno'
    const key = process.env.okey
    const arsno = '05713'

    const urlTotal = `${url}?arsno=${arsno}&serviceKey=${key}`

    axios
      .get(urlTotal)
      .then((response) => {
        const parser = new XMLParser()
        const rst = parser.parse(response.data)
        const items = rst.body.response.body.items
        this.items = items
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
