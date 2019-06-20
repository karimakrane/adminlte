/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import moment from 'moment';
window.Vue = require('vue');

import {
  Form, 
  HasError,
  AlertError,
  AlertErrors, 
  AlertSuccess
} from 'vform';


//partie alert
import swal from 'sweetalert2';
window.swal = swal;

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

//fin partie alert
//let Evenement = new Vue(); 
window.Fire = new Vue();
//window.Evenement = new Vue();
//partie event


//fin partie event

window.Form = Form;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});


// partie filtre
Vue.filter('capitalize',function(text){
  return text.charAt(0).toUpperCase() + text.slice(1)
});
Vue.filter('myDate',function(created){
  return moment(created).subtract(10, 'days').calendar();
});
//fin partie filtre


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('insmodaluser', require('./components/UserModelComponent.vue').default);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component(AlertErrors.name, AlertErrors);
Vue.component(AlertSuccess.name, AlertSuccess);



let routes = [
  { path: '/dashboard', component: require('./components/Dashboard.vue').default },
  { path: '/profile', component: require('./components/Profile.vue').default },
  { path: '/users', component: require('./components/Users.vue').default },
]

const router = new VueRouter({
	mode: 'history',
  	routes, 
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});