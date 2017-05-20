import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import App from './App.vue';
import index from './components/index.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);

const $list = document.querySelector('#list');

const list = [
    { name: '机组监控', to: '/user/qq' },
    { name: '实时信息', to: '/user/qq' },
    { name: '实时警报', to: '/user/qq' },
    { name: '故障记录', to: '/user/qq' },
    { name: '实时视频', to: '/user/qq' },
];

const temp = () => `
    <el-menu class="el-menu-vertical-demo" theme="dark">
        ${list.map((e, i) => `
            <div>
                <router-link to="${e.to}"><el-menu-item index=${i}>${e.name}</el-menu-item></router-link>
            </div>
        `).join(' ')}
    </el-menu>`;

$list.innerHTML = temp();


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
