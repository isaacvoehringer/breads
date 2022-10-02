const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// DEPENDENCIES
const methodOverride = require('method-override')
// MIDDLEWARE
app.use(methodOverride('_method'))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
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
  

app.listen(PORT, () => {
console.log('listening on port', PORT);
})

