const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Class')

  console.log(req.query.name);
})
app.get('/peanut', function (req, res) {
    res.send('Hello Peanut')
    console.log(req.query.name)
  })
app.listen(3000)
