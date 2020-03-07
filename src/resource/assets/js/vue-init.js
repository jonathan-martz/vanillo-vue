let Vue = require('vue');

// needed ?
window.Vue = Vue;

// Setup Vue State Managment
import Vuex from 'vuex'
Vue.use(Vuex);

// Setup Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const store = new Vuex.Store({
                                 state: {
                                     app: {

                                     }
                                 },
                                 mutations: {

                                 }
                             });

// Vue.component('vn-product-list', require('./components/VnProductList.vue'));

const app = new Vue({store,render: h => h(App),}).$mount('#app');
