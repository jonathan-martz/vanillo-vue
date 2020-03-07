let Vue = require('vue');

// @todo rewrite app.blade.php
// import App from './App.vue';

import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
                                 state: {
                                     app: {

                                     }
                                 },
                                 mutations: {}
                             });

Vue.component('vn-product-card', require('./components/vn-product-card'));
Vue.component('vn-category-grid', require('./components/vn-category-grid'));

const app = new Vue({store}).$mount('#app');
