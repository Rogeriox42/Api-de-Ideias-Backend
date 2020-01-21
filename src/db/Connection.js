require('dotenv').config()
const mongoose = require('mongoose')
// const USER = process.env.USER
// const PASSWORD = process.env.PASSWORD
const USER = 'ideauser'
const PASSWORD = 'ideapassword'
// const DATABASE = process.env.DATABASE

const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-b0doj.mongodb.net/tests?retryWrites=true&w=majority`

class Connection {
    static async MongoDBConnection() {

        const c = await mongoose.connect(URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        }, (error) => {
            if (error)
                console.log('error', error)
        })

        const conn = mongoose.connection
        // console.log('readystate', conn.readyState)
        // conn.once('open', () => console.log('database conectado!'))
        return conn
    }
}

module.exports = Connection