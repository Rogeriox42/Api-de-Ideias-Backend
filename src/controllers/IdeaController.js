const IdeaModel = require('../db/models/Idea')
const Boom = require('boom')

function filterData(req) {
    const { name, description, type, img_url } = req.body
    const data = { name, description, type, img_url }
    return JSON.parse(JSON.stringify(data))
}

module.exports = {
    async index(request, handler) {
        console.log('index')
        // return {
        //     message: 'Index'
        // }
        return await IdeaModel.find()
    },

    async create(req, res) {
        const data = filterData(req)
        const result = await IdeaModel.create(data)
        return result
    },

    async update(req, res) {
        const { _id } = req.params
        const data = filterData(req)
        const result = await IdeaModel.update({_id}, {$set: data})
        if(result.nModified !== 1)
            return res.json(Boom.internal('Error Updating the idea'))

        return {message: `The idea ${data.name} was updated successfully!`}
    },

    async show(req, res) {
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

    async destroy(req, res) {
        try {
            const { _id } = req.params
            const result = await IdeaModel.deleteOne({ _id })
            if (result.n !== 1)
                return Boom.preconditionFailed(`The provided ID doesn't exist`)

            return res.json({ message: 'Idea successfully deleted' })

        }
        catch (error) {
            return Boom.expectationFailed('The provided ID is not valid')
        }
    }
}
