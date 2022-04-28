const express = require ('express')
const app = express()
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '74cec7add9b745f8b89797ead7674de3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log('Hello world!')

app.use(express.static('public'))
const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})