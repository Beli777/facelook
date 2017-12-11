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
            <button v-on:click="signUp">Sign Up</button>
          </div>
          <div class="login__sign">
              <span>Already have an account? Go back to </span><router-link to="login">login</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      msg: 'Sign In',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function (){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
           this.$router.replace('home')
        },
        (err) => {
          alert('Oops.' + err.message)
        }
      );
    }
  }
}
</script>
