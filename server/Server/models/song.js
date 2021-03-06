var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artworkUrl60: { type: String },
    artistName: { type: String },
    collectionName: { type: String },
    price: { type: String },
    preview: {type: String }
    
})


module.exports = mongoose.model('song', schema)



// title: song.trackName,
// albumArt: song.artworkUrl60,
// artist: song.artistName,
// collection: song.collectionName,
// price: song.collectionPrice,
// preview: song.previewUrl