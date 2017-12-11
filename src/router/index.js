import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }, 
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
      	requiresAuth: true
      }
    }, 
  ]
})

router.beforeEach((to,from,next) => {
	let currentUser = firebase.auth().currentUser;
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if(requiresAuth && !currentUser) next('login')
	else if (!requiresAuth && currentUser) next('home')
	else next()
})

export default router
