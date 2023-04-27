const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://khm9963:9963@boilerplate.wlr20xq.mongodb.net/test', {
}).then(() => console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))

  

app.get('/', (req, res) => {
  res.send('Hello World! ㅎㅇ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//    mongodb+srv://khm9963:<password>@boilerplate.wlr20xq.mongodb.net/test