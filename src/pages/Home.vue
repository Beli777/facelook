<template>
  <div class="home">
      You had logged in !!!!
      <button v-on:click="logout">Log out</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Facelook'
    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
