var Playlists = require('../models/playlist')
var router = require('express').Router()
 
router.post('/api/playlists', (req, res, next)=>{
    Playlists.create(req.body)
        .then(playlist =>{
            res.send(playlist)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

module.exports = router