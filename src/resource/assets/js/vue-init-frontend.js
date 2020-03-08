let Vue = require('vue');

import Vuex from 'vuex';
Vue.use(Vuex);

// @todo rewrite app.blade.php
// import App from './App.vue';

const store = new Vuex.Store({state: {app: {env: process.env}}, mutations: {}});

Vue.component('vn-category-grid', require('./components/vn-category-grid'));
Vue.component('vn-category-row', require('./components/vn-category-row'));
Vue.component('vn-category-col', require('./components/vn-category-col'));
Vue.component('vn-product-card', require('./components/vn-product-card'));

const app = new Vue({store}).$mount('#app');
