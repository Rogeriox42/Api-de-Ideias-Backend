const IdeaModel = require('../db/models/Idea')
const Boom = require('boom')

function filterData(req) {
    const { name, description, type, img_url } = req.payload
    const data = { name, description, type, img_url }
    return JSON.parse(JSON.stringify(data))
}

module.exports = {
    async index(req) {
        return await IdeaModel.find()
    },

    async create(req) {
        const data = filterData(req)
        const result = await IdeaModel.create(data)
        return result
    },

    async update(req) {
        console.log('update') 
        const { _id } = req.params
        const data = filterData(req)
        const result = await IdeaModel.updateOne({_id}, {$set: data})
        if(result.nModified !== 1)
            return Boom.internal('Error Updating the idea')

        return {message: `The idea ${data.name} was updated successfully!`}
    },

    async show(req) {
        try {
            const { _id } = req.params
            console.log('_id', _id)
            const idea = await IdeaModel.findOne({ _id })
            if (idea)
                return idea

            return Boom.preconditionFailed(`The provided ID doesn't exist`)
        } catch (error) {
            return Boom.expectationFailed('The provided ID is not valid')
        }
    },

    async destroy(req) {
        try {
            const { _id } = req.params
            const result = await IdeaModel.deleteOne({ _id })
            if (result.n !== 1)
                return Boom.preconditionFailed(`The provided ID doesn't exist`)

            return { message: 'Idea successfully deleted' }

        }
        catch (error) {
            return Boom.expectationFailed('The provided ID is not valid')
        }
    }
}
