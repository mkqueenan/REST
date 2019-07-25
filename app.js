const express = require('express')
const app = express()

// routes
app.get('/', (req, res) => {
    res.send('HOME HOME HOME!')
})

app.get('/posts', (req, res) => {
    res.send('POSTS!')
})

// how to start listening
app.listen(3000)
