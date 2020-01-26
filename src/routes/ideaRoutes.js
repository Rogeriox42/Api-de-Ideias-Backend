const IdeaController = require('../controllers/IdeaController') 


module.exports = [
    {
        method: 'GET', 
        path: '/idea', 
        handler: IdeaController.index
    }, 
    {
        method: 'GET', 
        path: '/idea/{_id}', 
        handler: IdeaController.show
    }, 
    {
        method: 'POST', 
        path: '/idea', 
        handler: IdeaController.create
    }, 
    {
        method: 'PUT', 
        path: '/idea/{id}', 
        handler: IdeaController.update
    }, 
    {
        method: 'DELETE', 
        path: '/idea/{id}', 
        handler: IdeaController.destroy
    }, 
]