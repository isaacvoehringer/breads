// require mongoose 
const mongoose = require('mongoose')
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

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
