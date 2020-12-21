//引入vuex
import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

//必须显式地通过 Vue.use() 来安装 Vuex：
Vue.use(Vuex);

//“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)
//不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
export default new Vuex.Store({
    //注册module,module和vuex连起来
    modules:{
        auth:auth,
    }


});
