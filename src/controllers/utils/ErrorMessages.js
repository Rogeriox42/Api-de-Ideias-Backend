const Boom = require('boom')

module.exports = {
    idDoesntExist(){
        return Boom.preconditionFailed(`The provided ID doesn't exist`)
    },

    idIsInvalid(){
        return Boom.expectationFailed('The provided ID is not valid')
    }
    
}