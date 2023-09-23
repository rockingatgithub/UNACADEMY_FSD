const express = require('express')
const PORT = 8000
const app = express()
let count = 0

function requestCounter (req, res, next) {
    count++;
    console.log("Total requests:- ", count)
    next()
}

app.use(requestCounter)

app.get('/home', (req, res) => {
    return res.send('<h1> Served by NodeJS </h1>')
})

app.listen(PORT, () => {
    console.log("server started at: ", PORT)
})