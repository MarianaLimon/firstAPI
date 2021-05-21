
const mongoose = require('mongoose')

const DB_USER = 'MarianaLimon'
const DB_PASSWORD = 'm4ri4n4Lim'
const DB_HOST = 'kodemia-limon.egzdw.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect (){
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect