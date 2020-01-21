const assert = require('assert') 
const Mongodb = require('../db/Mongodb') 
const Connection = require('../db/Connection') 
const IdeaModel = require('../db/models/Idea') 

MOCK_IDEA_CREATE = {
    name: 'New Website', 
    description: 'Lorem Ipsum', 
    type: 'New'
}

MOCK_IDEA_UPDATE = {
    name: 'Music Tinder', 
    description: 'Tinderlike application for Music Peripherals Exchange', 
    type: 'Old'
}

MOCK_ID = 12345
let db 
describe.only('MongoDB Tests', function(){
    let connection 

    this.beforeAll( async () =>{
        connection = await Connection.MongoDBConnection()
        db = new Mongodb(connection, IdeaModel)
    })

    it('Create Idea', async () =>{
        const response = await db.create(MOCK_IDEA_CREATE)
        console.log('response', response)
        
        expected = 'success' 

        assert.deepEqual(response, MOCK_IDEA_CREATE)
    })
})