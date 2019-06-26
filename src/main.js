import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAw72pP7-5cjGuBsMwiPy-GljN9cJYQdIU",
    authDomain: "vuecrm-ac588.firebaseapp.com",
    databaseURL: "https://vuecrm-ac588.firebaseio.com",
    projectId: "vuecrm-ac588",
    storageBucket: "",
    messagingSenderId: "853185582819",
    appId: "1:853185582819:web:2a340da1e4f83357"
  };
 
firebase.initializeApp(firebaseConfig)

let app;

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


