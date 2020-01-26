const express = require('express')
const ideaRoutes = require('./routes/ideaRoutes')
const cors = require('cors') 
const dotenv = require('dotenv').config()
const Hapi = require('@hapi/hapi') 
const inert = require('@hapi/inert') 
const vision = require('@hapi/vision')
const hapiSwagger = require('hapi-swagger') 
const db = require('./db/Mongodb').createConnection()

const PORT = process.env.PORT || 3050
// const HOST = process.env.HOST || 'localhost'

const swaggerOptions = {
    info: {
        title: 'Idea API', 
        version: '1.0'
    }
}

class App{
    constructor(){
        this.server = null 
        this.createServer()
        this.loadRoutes()
    }

    async createServer(){
        this.server = Hapi.Server({
            port: PORT,
            // host: HOST,
            routes: {
                cors: true 
            }
        })

        await this.server.register([
            vision, 
            inert, 
            {
                plugin: hapiSwagger, 
                options: swaggerOptions
            }
        ])

        await this.server.start() 
        console.log(`Application running on port: ${PORT}.`)
    }

    loadRoutes(){
        console.log('loadRoutes()')
        this.server.route(
            ideaRoutes
        )
    }
}

new App()






// const app = express()
// const db = require('./db/MongoDB').createConnection()

// app.use(cors())
// app.use(express.json())
// app.use(routes)

// app.listen(PORT, () =>{
//     console.log(`application running at port ${PORT}`) 
// })
