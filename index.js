require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/tuk-tuk", (req, res) => {
    res.send("Welocme to TUK-TUK")
})

app.get('/book-Online', (req,res) => {
    res.send("PLease Give your input")
})

app.get('/head', (req,res) => {
    res.send('<h1> TUK-TUK </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${port}`);
})