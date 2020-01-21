const IdeaController = require('../controllers/IdeaController') 
const {Router} = require('express')

const routes = Router() 

// routes.get('/idea', IdeaController.index)

routes.get('/idea', IdeaController.index) 
routes.get('/idea/:_id', IdeaController.show) 
routes.post('/idea', IdeaController.create) 
routes.put('/idea/:_id', IdeaController.update) 
routes.delete('/idea/:_id', IdeaController.destroy) 

module.exports = routes 