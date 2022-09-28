const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
})

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, () => {
console.log('listening on port', PORT);
})

