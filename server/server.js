const express = require ('express')
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '74cec7add9b745f8b89797ead7674de3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
    rollbar.info('file served')
})

rollbar.log('Hello world!')
app.use(express.static('public'))
const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})