const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// DEPENDENCIES
const methodOverride = require('method-override')

const mongoose = require('mongoose')



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
//routes
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
})

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  
  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
app.listen(PORT, () => {
console.log('listening on port', PORT);
})

