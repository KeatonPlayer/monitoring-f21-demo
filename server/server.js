const express = require ('express')
const path = require('path')
const app = express()
app.use(express.static('public'))
const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})