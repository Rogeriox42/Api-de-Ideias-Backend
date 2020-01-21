const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/ideaRoutes')
const cors = require('cors') 
require('dotenv').config()
const PORT = process.env.PORT || 3050

const USER = 'ideauser'
const PASSWORD = 'ideapassword'

const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-b0doj.mongodb.net/tests?retryWrites=true&w=majority`

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.listen(PORT, () =>{
    console.log(`application running at port ${PORT}`) 
})
