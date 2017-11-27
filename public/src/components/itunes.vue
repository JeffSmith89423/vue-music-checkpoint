<template>
  <div>
    <div >
      <form @submit.prevent="getMusicByArtist" style="text-align: center">
        <input type="text" placeholder="Artist Name" v-model="artist">
        <button type="submit">Search Artists</button>
      </form>
      <div  v-for="song in songs">
        <div class="panel">
            <img :src="song.artworkUrl100">
          <h4>{{song.trackName}}</h4>
          <h4>{{song.artistName}}</h4>
          <audio class="audio" controls="controls" :src="song.previewUrl"></audio>
          <button @click="addToMyTunes(song)" type="submit" class="btn btn-primary">Add to Playlist</button>
          <!-- <h4>{{song.arworkUrl60}}</h4> -->
        </div>

          <!-- <h4>{{song.collectionName}}</h4> -->
          
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'itunes',
    data() {
      return {
        artist: ""
        
        
      }
    },
    methods: {
      getMusicByArtist() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      },
      addToMyTunes(song) {
        this.$store.dispatch('addToMyTunes', this.song)
      }
    },
    computed: {
      songs() {
        // debugger
        return this.$store.state.results
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>