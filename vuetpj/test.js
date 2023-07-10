require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const request = require('request')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
// const VSchema = require('./mdb.cjs')
const app = express()
const client_id = process.env.nid
const client_secret = process.env.npw
const _path = path.join(__dirname, './dist')
// 크롤링할 멜론 차트 페이지의 URL
const melon_url = 'https://www.melon.com/chart/index.htm'

/* POST를 위한 구문 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* 스태틱 경로 */
app.use('/', express.static(_path))
/* 로그 INFO */
app.use(logger('tiny'))

/* mongoDB CRUD */
// 민지 자리

// 3. 멜론챠트
const songlist = []
let year, hour
axios.get(melon_url).then((res) => {
  const $ = cheerio.load(res.data)
  year = $('.year').text()
  hour = $('.hour').text()

  $('.ellipsis.rank01').each(function () {
    const artist = $(this)
      .parent()
      .find('.ellipsis.rank02')
      .find('a')
      .first()
      .text()
      .trim()
    const title = $(this).find('a').text().trim()
    songlist.push({ title, artist })
  })
})

app.get('/mml/:slt', (req, res) => {
  const slt = req.params.slt * 1
  let list = ``
  list += `<h3>기준: ${year} / ${hour}</h3>`
  list += `<table class="music-list">`
  list += `<tr><th>순위</th><th>제목</th><th>아티스트</th></tr>`
  songlist.slice(0, slt).forEach((song, index) => {
    list += `<tr><td>${index + 1}위</td><td>${song.title}</td><td>${
      song.artist
    }<td></tr>`
  })
  list += `</table>`
  res.end(list)
})

// 4. 파파고 번역기
app.get('/ppg/', (req, res) => {
  const txt = req.query.input // 클라이언트에서 보낸 input 값 받기
  const source = req.query.source // 클라이언트에서 보낸 source 값 받기
  const target = req.query.target // 클라이언트에서 보낸 target 값 받기

  const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  const options = {
    url: api_url,
    form: { source, target, text: txt },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const result = JSON.parse(body)
      const translatedText = result.message.result.translatedText

      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
      res.end(translatedText)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})

// 6. 버스정류장
/* 개인키 보안 구문 */
const key = process.env.okey

/* 버스 2(정거장) */
let a, rst
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()
const bss_url =
  'http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno?serviceKey='
const bstop = '05712'
const opt = '&arsno=' + bstop
const totalURL = bss_url + key + opt

request(totalURL, (e, res, body) => {
  rst = parser.parse(body)
  a = rst.response.body.items.item
})

app.get('/bss/', (req, res) => {
  let list = ''
  a.forEach((v, i) => {
    list += `<p>버스번호: ${v.lineno}  |  남은시간: 바로-${
      v.min1 ?? '예정이 없습니다'
    }분후 그다음-${v.min2 ?? '예정이 없습니다'}분후<p>`
  })
  res.end(list)
})

// 7. 주식챠트
const stk_url =
  'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey='
const stk_opt = '&numOfRows=1&pageNo=1&resultType=json'
const stk_totalURL = stk_url + key + stk_opt
let stock = null // 초기값을 null로 설정합니다.

axios
  .get(stk_totalURL)
  .then((response) => {
    const stk_rst = response.data
    stock = stk_rst.response.body.items.item
  })
  .catch((error) => {
    console.error(error)
  })

app.get('/stk/', (req, res) => {
  // stock 값이 null인 경우에는 요청이 아직 완료되지 않았으므로 클라이언트로 응답을 보내지 않습니다.
  if (stock !== null) {
    res.send(stock)
  } else {
    res.status(503).end() // 서비스를 사용할 수 없음을 나타내는 503 상태 코드를 응답합니다.
  }
})

// let stock, stk_rst

// request(stk_totalURL, (e, res, body) => {
//   stk_rst = JSON.parse(body)
//   stock = stk_rst.response.body.items.item
// })
// app.get('/stk/', (req, res) => {
//   res.send(stock)
// })

app.listen(3000, () => {
  console.log('3000서버에서 서버 동작중')
})
