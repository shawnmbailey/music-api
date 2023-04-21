const express = require('express')

//Import all get routes
const get = require('./queries/get')

const app = express()
const port = 3000

app.get('/', (req, res) =>{
  res.send('Hello World')
})

app.listen(port, () =>{
  console.log(`Server listening at http://localhost:${port}`)
})