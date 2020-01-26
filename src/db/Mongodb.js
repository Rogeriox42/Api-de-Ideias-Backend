const mongoose = require('mongoose')
const USER = 'ideauser'
const PASSWORD = 'ideapassword'
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-b0doj.mongodb.net/tests?retryWrites=true&w=majority`

class MongoDB {
    constructor() {
        this.connection = null 
        this.createConnection()
        
     }
    createConnection() {
        this.connection = mongoose.connect(URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        this.logger()
    }
    logger() { 
        this.connection = mongoose.connection 
        
        this.connection.on('connected', () => {
            console.log('Connection - Success!')
        })

        this.connection.on('error', () => {
            console.log('Connection - Error!')
        })

        this.connection.on('disconnected', () => {
            console.log('Connection - Disconnected!')
        })
    }
}

module.exports = new MongoDB()