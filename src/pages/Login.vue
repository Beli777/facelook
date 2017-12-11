<template>
  <div class="login">
    <div class="login__holder  animated fadeIn">
        <div class="login__holder-box box">
          <h1>{{ msg }}</h1>
          <div class="login__holder-item">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="Type email" />
          </div>
          <div class="login__holder-item">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Type password" />
          </div>
          <div>
            <button v-on:click="login">Log in</button>
          </div>
          <div class="login__sign">
              <span>You don't have an account? You can </span><router-link to="signin">create one</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'


export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Facelook',
      email: '',
      password: ''
    }
  },
  methods: {
    login: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops.' + err.message)
          }
        );
    }
  },
}
</script>
