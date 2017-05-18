import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);


const $list = document.querySelector('#list');

const index = {
    template: `<header>
                    <h1 id="titles">欢迎进入水电站监控系统</h1>
                </header>`,
};

const list = [
    { name: '机组监控', to: '/user/qq' },
    { name: '实时信息', to: '/user/qq' },
    { name: '实时警报', to: '/user/qq' },
    { name: '故障记录', to: '/user/qq' },
    { name: '实时视频', to: '/user/qq' },
];

$list.innerHTML = list.map(e => `
    <div>
        <router-link to="${e.to}"><p>${e.name}</p></router-link>
    </div>
`).join(' ');

const routes = [{
    path: '/',
    component: index,
},
{
    path: '/user/:id',
    component: App,
},
];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
}).$mount('#app');

Vue.config.devtools = true;
