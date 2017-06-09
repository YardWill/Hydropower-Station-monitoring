import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';

import index from './components/index.vue';
import info from './components/info.vue';
import alert from './components/alert.vue';
import mistake from './components/mistake.vue';
import video from './components/video.vue';
import control from './components/control.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);

const $list = document.querySelector('#list');

const list = [
    { name: '实时信息', to: '/info' },
    { name: '实时警报', to: '/alert' },
    { name: '故障记录', to: '/mistake' },
    { name: '系统控制', to: '/control' },
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
}, {
    path: '/info',
    component: info,
}, {
    path: '/alert',
    component: alert,
}, {
    path: '/mistake',
    component: mistake,
}, {
    path: '/video',
    component: video,
}, {
    path: '/control',
    component: control,
},
];

const router = new VueRouter({
    routes,
});

new Vue({
    router,
}).$mount('#app');

Vue.config.devtools = true;
