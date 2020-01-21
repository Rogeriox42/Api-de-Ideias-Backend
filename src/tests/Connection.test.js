const assert = require('assert') 
const Connection = require('../db/Connection')



describe('Connection tests', async function(){
    let connection 

    this.beforeAll( async () =>{
        connection = await Connection.MongoDBConnection()
    })

    it('Connection test 1', async () =>{
        assert.deepEqual(connection.readyState, 1)
    })
})