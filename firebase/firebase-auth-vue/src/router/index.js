import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld,
      meta: {
        autentificado: true,
      }
    },
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let auth = to.matched.some(record => record.meta.autentificado);

  if (auth && !user) {

    next('Login');
  }
  else if(!auth && user ){
    next('Home');

  }
  else{
    next();
  }

})