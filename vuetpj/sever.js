require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const request = require('request')
const path = require('path')
const VSchema = require('./mdb.cjs')
const app = express()
const client_id = process.env.nid
const client_secret = process.env.npw
const _path = path.join(__dirname, './dist')

/* POST를 위한 구문 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* 스태틱 경로 */
app.use('/', express.static(_path))
/* 로그 INFO */
app.use(logger('tiny'))

/* mongoDB CRUD */
// 민지 자리

// 파파고 자리
app.get('/ppg/:ko', (req, res) => {
  const ko = req.params.ko
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
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
      let result = JSON.parse(body)
      let translatedText = result.message.result.translatedText
      res.send(translatedText)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})
app.listen(3000, () => {
  console.log('3000서버에서 서버 동작중')
})
