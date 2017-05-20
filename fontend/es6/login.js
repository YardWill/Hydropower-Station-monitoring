import Vue from 'vue';
import ElementUI from 'element-ui';
import Login from './components/login.vue';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(Login),
});

Vue.config.devtools = true;

