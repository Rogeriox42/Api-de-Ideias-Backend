const IdeaController = require('../controllers/IdeaController') 
const Joi = require('@hapi/joi') 

const ideaCreateSchema = {
    name: Joi.string().required().min(3).max(100), 
    description: Joi.string().required().min(3).max(100), 
    type: Joi.string().min(3).max(40), 
    img_url: Joi.string().min(5).max(200)
}

const ideaUpdateSchema = {
    ...ideaCreateSchema, 
    name: Joi.string().min(3).max(100), 
    description: Joi.string().min(3).max(100), 
}

const IdeaCreateModel = Joi.object(ideaCreateSchema).label('Idea Create Model')
const IdeaUpdateModel = Joi.object(ideaUpdateSchema).label('Idea Update Model')

module.exports = [
    {
        method: 'GET', 
        path: '/idea', 
        handler: IdeaController.index,
        options: {
            description: 'Get all the ideas', 
            notes: 'List all the available ideas', 
            tags: ['api']
        }
    }, 
    {
        method: 'GET', 
        path: '/idea/{_id}', 
        handler: IdeaController.show, 
        options: {
            description: 'Get one idea', 
            notes: 'Get the idea according to the provided ID', 
            tags: ['api'], 
            validate: {
                params: Joi.object({
                    _id: Joi.string().required().min(24).max(24) 
                })
            }
        }
    }, 
    {
        method: 'POST', 
        path: '/idea', 
        handler: IdeaController.create, 
        options: {
            description: 'Create idea', 
            notes: 'Create a new idea', 
            tags: ['api'], 
            validate: {
                payload: IdeaCreateModel
            }
        }
    }, 
    {
        method: 'PUT', 
        path: '/idea/{_id}', 
        handler: IdeaController.update, 
        options: {
            description: 'Update one idea information', 
            notes: 'Updates idea information according to the provided ID', 
            tags: ['api'], 
            validate: {
                payload: IdeaUpdateModel, 
                params: Joi.object({
                    _id: Joi.string().required().min(24).max(24)
                })
            }
        }
    }, 
    {
        method: 'DELETE', 
        path: '/idea/{_id}', 
        handler: IdeaController.destroy, 
        options: {
            description: 'Delete one ideas', 
            notes: 'Delete idea according to the ID provided', 
            tags: ['api'],
            validate:{
                params: Joi.object({
                    _id: Joi.string().required().min(24).max(24)
                })
            }
        }
    }, 
]