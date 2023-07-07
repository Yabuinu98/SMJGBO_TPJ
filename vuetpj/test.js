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
  songlist.slice(0, slt).forEach((song, index) => {
    list += `<p>${index + 1}위: ${song.artist} - ${song.title}</p>`
  })
  res.end(list)
})

// 4. 파파고 번역기
app.get('/ppg/:ko', (req, res) => {
  const ko = decodeURIComponent(req.params.ko)
  console.log(ko)
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  const options = {
    url: api_url,
    form: { source: 'ko', target: 'en', text: ko },
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

app.listen(3000, () => {
  console.log('3000서버에서 서버 동작중')
})
