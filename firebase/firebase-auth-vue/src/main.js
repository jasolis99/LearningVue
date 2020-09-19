// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZptdcbRSWCdtydToQT3svARjcsGcWC2s",
  authDomain: "curso-vue-firebase-b1ab2.firebaseapp.com",
  databaseURL: "https://curso-vue-firebase-b1ab2.firebaseio.com",
  projectId: "curso-vue-firebase-b1ab2",
  storageBucket: "curso-vue-firebase-b1ab2.appspot.com",
  messagingSenderId: "755776182053",
  appId: "1:755776182053:web:191840fb1fea3c5018accc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  console.log(firebase.auth().currentUser)
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })

})

