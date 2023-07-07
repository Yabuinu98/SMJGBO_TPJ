const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VSchema = new Schema({
  title: String,
  content: String,
  date: Date
})
module.exports = mongoose.model('vpj', VSchema, 'vpj') // vpj이름으로 collection 생성
