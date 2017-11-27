<template>
    <div class="my-tunes">
             
    </div>
  </template>
  
  <script>
    export default {
      name: 'my-tunes',
      data() {
        return {
        }
      },
      methods: {
        function() {
          this.$store.dispatch()
        },
        getFunction() {
          return {
           
          }
        }
      },
      computed: {
        target() {
          return this.$store.state //<-- add something here
        }
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
   
  </style>