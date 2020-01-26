const express = require('express')
const routes = require('./routes/ideaRoutes')
const cors = require('cors') 
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3050
const app = express()
const db = require('./db/MongoDB')

db.createConnection()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () =>{
    console.log(`application running at port ${PORT}`) 
})
