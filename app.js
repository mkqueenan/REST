const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// dot file(s)
require('dotenv/config')

// define routes
const postsRoute = require('./routes/posts')

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/posts', postsRoute)

// base endpoint
app.get('/', (req, res) => {
    res.send('we are on HOME')
})

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected to DB!')
)

// how to start listening on localhost
app.listen(3000)
