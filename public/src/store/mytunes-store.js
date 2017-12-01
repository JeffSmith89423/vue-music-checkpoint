import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results){
      state.results = results
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        data = JSON.parse(data)
        commit('setResults', data.results)
        console.log(JSON.parse(data))
      })
    },
    getMyTunes({commit, dispatch}){
      debugger
      $.get('http://localhost:3000/api/songs')
      .then(data => {
        commit('setMyTunes', data)
      })//this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({commit, dispatch}, track){
      debugger
      console.log(track)
      $.post('http://localhost:3000/api/songs', track)
        .then(res => {
          dispatch('getMyTunes')
        })//this will post to your server adding a new track to your tunes
    },
    removeTrack({commit, dispatch}, track){
      $.ajax({
        url: 'http://localhost:3000/api/songs/' + id,
        method: 'DELETE'
      })
        .then(res => {
          dispatch('getMyTunes')
        }) //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
