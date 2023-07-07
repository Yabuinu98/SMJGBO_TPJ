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

app.listen(3000, () => {
  console.log('3000서버에서 서버 동작중')
})
