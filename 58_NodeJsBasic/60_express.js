const express = require('express')
const path = require("path")
const app = express()
const port = 3000

// while using express js remove type:"module" from package.json

app.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h3>I am Adarsh vajpayee From Ise dept.</h3>')
})

app.get('/contact', (req, res) => {
  res.send('<h4>Email : adarshvajpayee19@gmail.com</h4>')
})

// Serve static files.
app.get('/serveDetails', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
// Copied code from express js website.
