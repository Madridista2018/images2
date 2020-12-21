<template>
<div>
    <AppHeader></AppHeader>
    
    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view></router-view>
</div>

</template>

<script>
import AppHeader from './components/AppHeader';


//imgur api: Client ID:93ee23c1e91b6d4,
//Client secret:c30ce3c5e82136ea641cb8081c5c7e2255c26bd6

export default{
    name:'App',
    components :{
        AppHeader
    },
};

</script>