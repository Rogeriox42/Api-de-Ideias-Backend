const IdeaController = require('../controllers/IdeaController') 

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
            tags: ['api']
        }
    }, 
    {
        method: 'POST', 
        path: '/idea', 
        handler: IdeaController.create, 
        options: {
            description: 'Create idea', 
            notes: 'Create a new idea', 
            tags: ['api']
        }
    }, 
    {
        method: 'PUT', 
        path: '/idea/{_id}', 
        handler: IdeaController.update, 
        options: {
            description: 'Update one idea information', 
            notes: 'Updates idea information according to the provided ID', 
            tags: ['api']
        }
    }, 
    {
        method: 'DELETE', 
        path: '/idea/{_id}', 
        handler: IdeaController.destroy, 
        options: {
            description: 'Delete one ideas', 
            notes: 'Delete idea according to the ID provided', 
            tags: ['api']
        }
    }, 
]