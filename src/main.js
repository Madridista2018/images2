import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

//VueRouter放在main中， Vuex放在store的index中
Vue.use(VueRouter);

//通过export方式导出，在导入时要加{ }
export const router = new VueRouter({
    //使用browser router模式
    mode : 'history',
    routes : [
        //建立路由和模块的映射
        {path : '/oauth2/callback', component : AuthHandler },
        {path : , component:}
    ]
});

new Vue ({
    //把store传给vue instance,把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件,且子组件能通过 this.$store 访问到。
    store,
    router,
    render: h=>h(App)
}).$mount('#app');