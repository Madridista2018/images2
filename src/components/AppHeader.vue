<template>
<div class="ui secondary pointing menu">
    <a href="/" class="active item">
        主页
    </a>
    
    <div class="right menu">
      <div v-if='isLoggedIn' class="horizontal">
        <a class="item" @click="logout">退出登录</a>
        <a class="item">上传图片</a>
        <a class="item">图集</a>
      </div>
      <!-- @ = v-on： 用于绑定事件 -->
      <a href="#" class="ui item" @click="login" v-else>
        登录
      </a>  
    </div>
    
</div>
</template>


<script>
//把actions,getters绑定到component 的methods 上
import {mapActions, mapGetters} from 'vuex';

 
export default{
    name:'AppHeader',
    //导入需要用到的action，以数组形式传入（不限modules）
    methods : {
      ...mapActions(['login','logout'])
    },
    //计算缓存，缓存getters传来的数据，提供template使用
    computed : {
      ...mapGetters(['isLoggedIn'])
    },
}
</script>

<style scoped>
.horizontal{
  display: flex;
  flex-direction: row;
}

</style>