// require mongoose 
const mongoose = require('mongoose')
const breads = require('../controllers/breads_controller')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten:  Boolean,
    image: { type: String, default: 'http://placehold.it/400x400.png' },
    baker: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Pheobe']
    }
})
// helper method

breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker}`
}

breadSchema.methods.breadsBreadsBy = function(){
   return `They have made all these breads: ${breads.baker}`
}

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
