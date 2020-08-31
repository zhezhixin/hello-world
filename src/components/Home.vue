<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
    <router-link to="/helloworld">go to helloworld</router-link> |  
    <router-link to="/todo">go to todolist</router-link> | 
    <router-link to="/others">go to others</router-link> | 
    <br>
    <router-link to="/echarts"> go to echarts </router-link> | 
    <router-link to="/map"> go to baidumap </router-link> | 
    <router-link to="/fanpai"> go to fanpai </router-link> |
    <br>
    <router-link to="/css"> go to css </router-link> | 
    <router-link to="/cssblog"> go to myblog </router-link> |
    <router-link to="/flex"> go to myflex</router-link> |
    <br>
    <router-link to="/axios">go to axios </router-link> | 
    <br>
    <router-link to="/elui" >go to element ui</router-link> 
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
}
</script>
