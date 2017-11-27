<template>
  <div class="Itunes">
    <div>
      <form @submit.prevent="getMusicByArtist()">
        <input type="text" placeholder="Artist Name" v-model="artist">
        <button type="submit">Search Artists</button>
        
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Itunes',
    data() {
      return {
      }
    },
    methods: {
      getMusicByArtist() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      },
      addToMyTunes(i) {
        this.$store.dispatch('addToMyTunes', i)
      }
    },
    computed: {
      results() {
        return this.$store.state.results
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>