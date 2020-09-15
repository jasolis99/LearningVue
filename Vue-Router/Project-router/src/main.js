import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./routes.js"
import {store} from "./store.js"

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes,

  scrollBehavior (to, from, savedPosition) {
    const position = {};
  
    if(to.hash){
      position.selector = to.hash;
      
    }
    else{
      position.x = 500;
      position.y = 500;
      console.log("hola");
    }

    return position;
  }
})

/* this is from  Vue Router global guards lesson */

router.beforeEach((from,to,next)=>{
  console.log("Acceso a ruta");

  if(to.meta.privado){
    console.log("privado es " + to.meta.privado);
    next(store.state.auth)
  }
  else{
    next();
  }
  
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
