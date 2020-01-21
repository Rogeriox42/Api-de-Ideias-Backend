const mongoose = require('mongoose') 

const ideiaSchema = new mongoose.Schema({
    name: String, 
    description: String, 
    type: String, 
    img_url: String
})

delete mongoose.models.Idea
module.exports = mongoose.model('Idea', ideiaSchema)