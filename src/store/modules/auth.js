import api from '../../api/imgur';
import qs from 'qs';
//通过export方式导出，在导入时要加{ }
import {router} from '../../main';


const state ={
    //localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
    token : window.localStorage.getItem('imgur_token'),

};

const getters ={
    // isLoggedIn: function(state){
    //     //“!!”的含义了，一个！是将对象转为布尔型并取反，两个！是将取反后的布尔值再取反，相当于直接将非布尔类型值转为布尔类型值。
    //     return !!state.token;
    // }

    //es15语法
    isLoggedIn: state => !!state.token,
};

const actions ={
    //不能直接调用一个 mutation handler,需要以相应的 type 调用 store.commit 方法：
    logout:({commit}) => {
        //可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）,载荷应该是一个对象
        //登出action就是把token置为空
        commit('setToken',null);
        //清除localstorage
        window.localStorage.removeItem('imgur_token');

    },
    login:() => {
        //直接调用api里的登录
        api.login();
    },
    //第一个参数是调用mutation的助手函数commit，第二个才是接收传参的参数
    finalizeLogin:({commit},hash) => {
        //qs.parse  将字符串解析成对象的形式,需要去掉第一个#
        const query = qs.parse(hash.replace('#', ''));
        console.log(query);
        //设置该用户的token 
        commit('setToken',query.access_token);
        //把token存进localstorage
        window.localStorage.setItem('imgur_token',query.access_token);
        //导航到不同的URL，这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
        router.push('/');
        //console.log(state.token);
    }
};

const mutations = { 
    setToken:(state, token)=>{
        state.token = token;
        //console.log(state.token);
    }
};

//module和vuex连起来
export default{
    state : state,
    getters : getters,
    actions : actions,
    mutations : mutations,
}