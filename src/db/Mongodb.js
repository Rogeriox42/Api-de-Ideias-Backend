const mongoose = require('mongoose')

class MongoDB {
    constructor(connection, schema) {
        this.connection = connection
        this.schema = schema
    }

    async create(element) {
        return await this.schema.create(element)
    }

    read(query){
        return this.schema.readOne({query})
    }

    update(_id, item){
        return this.schema.updateOne({_id}, {$item: item})
    }

    delete(query){
        return this.schema.deleteOne({query})
    }
}

module.exports = MongoDB