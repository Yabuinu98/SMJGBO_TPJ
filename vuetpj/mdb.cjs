const mongoose = require('mongoose')
const VSchema = require('./schema.cjs')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'd1' // 보안용은 DB를 생성하질 못함 그러므로 기존 DB로 지정해주기!!!
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

mongoose.set('strictQuery', false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('스키마 로드완료!! \n MDB 접속완료!! \n'))
  .catch((e) => console.error(e))

module.exports = VSchema
