const express = require ('express')
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '74cec7add9b745f8b89797ead7674de3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.use(express.static('public'))
app.use(express.json())


const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/api/students', (req, res) => {
    res.status(200).send(students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body

   const index = students.findIndex(student => {
       return student === name
   })

   if(index === -1 && name !== ''){
    students.push(name)
    rollbar.log('Student added successfully', {author: 'Scott', type: 'manual entry'})
    res.status(200).send(students)
} else if (name === ''){
    rollbar.error('No name given')
    res.status(400).send('must provide a name.')
} else {
    rollbar.error('student already exists')
    res.status(400).send('that student already exists')
}

})
app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})