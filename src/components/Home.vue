<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/z.png">
    <p>
    <router-link to="/helloworld">go to helloworld</router-link> 
    <router-link to="/todo">go to todolist</router-link> 
    <router-link to="/others">go to others</router-link> 
    <br>
    <router-link to="/echarts"> go to echarts</router-link> 
    <router-link to="/map"> go to baidumap</router-link> 
    <router-link to="/fanpai"> go to fanpai</router-link> 
    <br>
    <router-link to="/css"> go to css</router-link> 
    <router-link to="/cssblog"> go to myblog</router-link> 
    <router-link to="/flex"> go to myflex</router-link> 
    <br>
    <router-link to="/axios">go to axios</router-link> 
    <br>
    <router-link to="/elui" >go to element ui</router-link>
    <router-link to="/room/test" >go to room/test</router-link> 
    <router-link to="/yufa" >go to yufa</router-link>
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
<style lang="scss" scoped>
.home {
  font-size: 1.5rem;
}
.home a {
  color:rgb(75, 136, 138);
}
.home a:after {
    content: url('../assets/d.png');
    width:2px;
    height: 1rem;
    line-height: 1rem;
    vertical-align: middle;
    margin-right: 10px;
}
</style>