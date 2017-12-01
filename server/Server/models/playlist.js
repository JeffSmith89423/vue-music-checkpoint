

var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    songs: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Song" }]
})

module.exports = mongoose.model('Playlist', schema)