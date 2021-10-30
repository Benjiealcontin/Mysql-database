const express = require('express')
const bodyParser = require('body-parser')

const app = express()


// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const Students = require('../src/routes/Students')

app.use('/Students', Students)






const port = 3000

app.listen(port,() => {
    console.log('Listening in port', port)
})