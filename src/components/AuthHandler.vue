<template>
    <div>
        wait  
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default{
    name:'AuthHandler',
    //从vuex导入需要用到的action
    methods : mapActions(['finalizeLogin']),
    // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 目前不可见。
    // 在这个生命周期里，数据已经加载完成，并且在这里面修改数据并不会出发update函数。
     // 一般情况下会在这里面做一些异步数据的获取，比如说从服务器获取数据到本地。
    created(){
        //传入返回的信息（包含token）
        this.finalizeLogin(window.location.hash);
    }
}
</script>