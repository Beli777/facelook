// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

let app;
var config = {
	apiKey: "AIzaSyBW5OnFxsPyQ4NJ6mTsr-Fa5TpTUyRpkmY",
	authDomain: "facelook-91ac6.firebaseapp.com",
	databaseURL: "https://facelook-91ac6.firebaseio.com",
	projectId: "facelook-91ac6",
	storageBucket: "facelook-91ac6.appspot.com",
	messagingSenderId: "293986919280"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
	if (!app){
		/* eslint-disable no-new */
		app = new Vue({
		  el: '#app',
		  router,
		  template: '<App/>',
		  components: { App }
		})
	}
});
