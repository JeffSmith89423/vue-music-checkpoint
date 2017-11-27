var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
// var sessions = require('./auth/sessions')
var cors = require('cors')
var port = 3000


//Route Variables

// var burgerRoutes = require('./server/routes/burger-routes')
// var drinkRoutes = require('./server/routes/drink-routes')

//Middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(express.static(__dirname + '/public'))





//routes in routes folder

//getYourMusic

//addSongToList

//updateRank (PUT
//deleteTrack (DELETE)

server.listen(port, function(){
    console.log('Server Running on port: ', port)
})