import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZU6_34AbAhAiLh2HYWvVuvYZAFaBDxE0",
  authDomain: "real-home-e22f3.firebaseapp.com",
  projectId: "real-home-e22f3",
  storageBucket: "real-home-e22f3.appspot.com",
  messagingSenderId: "518141622415",
  appId: "1:518141622415:web:b01b47b9fa3b3ac76718fa"
};

const app = initializeApp(firebaseConfig);

Vue.use(app)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
